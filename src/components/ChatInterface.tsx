import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { useEffect, useRef, useState } from 'react';
import { Streamdown } from 'streamdown';

const SUGGESTIONS = [
  'Quels sont tes projets phares ?',
  'Sur quel sujet portes-tu ta veille ?',
  'Es-tu disponible pour un stage ?',
  'Quelles technologies maîtrises-tu ?',
];

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((p) => p.type === 'text')
    .map((p) => (p as { type: 'text'; text: string }).text)
    .join('');
}

export default function ChatInterface() {
  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  });

  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isBusy = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, status]);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 160) + 'px';
  }, [input]);

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit(input);
    }
  };

  return (
    <div className="flex h-[calc(100vh-16rem)] min-h-[480px] flex-col rounded-lg border border-border bg-card">
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <div className="space-y-2">
              <p className="font-medium text-foreground">Pose-moi une question sur Erwan.</p>
              <p className="text-xs text-muted-foreground">
                Parcours, projets, compétences, veille, disponibilité...
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => submit(q)}
                  disabled={isBusy}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => {
          const isUser = m.role === 'user';
          return (
            <div key={m.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div
                className={[
                  'max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed',
                  isUser
                    ? 'bg-foreground text-background'
                    : 'border border-border bg-background text-foreground',
                ].join(' ')}
              >
                {isUser ? (
                  <p className="whitespace-pre-wrap">{getMessageText(m)}</p>
                ) : (
                  <Streamdown className="prose-chat">{getMessageText(m)}</Streamdown>
                )}
              </div>
            </div>
          );
        })}

        {status === 'submitted' && (
          <div className="flex justify-start">
            <div className="rounded-lg border border-border bg-background px-3.5 py-2.5">
              <span className="inline-flex gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-600 dark:text-red-400">
            Une erreur est survenue. {error.message}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="border-t border-border p-3"
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Pose ta question..."
            rows={1}
            maxLength={500}
            disabled={isBusy && status !== 'streaming'}
            className="flex-1 resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground disabled:opacity-60"
          />
          {status === 'streaming' ? (
            <button
              type="button"
              onClick={() => stop()}
              className="rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors hover:bg-accent"
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim() || isBusy}
              className="rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Envoyer
            </button>
          )}
        </div>
        <p className="mt-2 px-1 text-[11px] text-muted-foreground">
          Réponses générées par IA (GPT-4o-mini) à partir des informations du portfolio. Pour
          un échange direct : erwan.sagnardon@campus-la-chataigneraie.org
        </p>
      </form>
    </div>
  );
}
