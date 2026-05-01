import type { APIRoute } from 'astro';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, convertToModelMessages, type UIMessage } from 'ai';
import { buildSystemPrompt } from '../../lib/chat-context';
import { checkRateLimit } from '../../lib/rate-limit';

export const prerender = false;

const SYSTEM_PROMPT = buildSystemPrompt();

const MAX_HISTORY = 20;
const MAX_USER_CHARS = 500;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const apiKey = import.meta.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Chat indisponible : clé API non configurée.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    clientAddress ||
    'anonymous';

  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    return new Response(
      JSON.stringify({
        error: `Trop de messages, réessaie dans ${rate.retryAfterSec}s.`,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(rate.retryAfterSec),
        },
      }
    );
  }

  let body: { messages?: UIMessage[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Corps de requête invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'Aucun message fourni.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (messages.length > MAX_HISTORY) {
    return new Response(
      JSON.stringify({ error: 'Conversation trop longue, recharge la page.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  if (lastUser) {
    const text = lastUser.parts
      .filter((p) => p.type === 'text')
      .map((p) => (p as { type: 'text'; text: string }).text)
      .join('');
    if (text.length > MAX_USER_CHARS) {
      return new Response(
        JSON.stringify({
          error: `Message trop long (max ${MAX_USER_CHARS} caractères).`,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  const openai = createOpenAI({ apiKey });
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: SYSTEM_PROMPT,
    messages: modelMessages,
    maxOutputTokens: 500,
    temperature: 0.4,
  });

  return result.toUIMessageStreamResponse();
};
