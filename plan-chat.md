# Plan — Page `/chat` : Assistant IA portfolio

## Objectif

Créer une page `/chat` proposant une interface conversationnelle avec une IA qui connaît le profil complet d'Erwan (parcours, projets, compétences, veille, certifications). Le visiteur (recruteur, prof, RH) peut poser des questions en langage naturel plutôt que de naviguer dans le site.

## Pourquoi c'est une bonne idée

- **Différenciation** : peu de portfolios étudiants ont ça, ça démarque immédiatement.
- **Démonstration technique** : montre la maîtrise d'API IA, server endpoints, streaming, prompt engineering.
- **UX recruteur** : un recruteur peut demander directement « est-ce qu'Erwan a déjà fait du SQL en prod ? » au lieu de fouiller.
- **Cohérent avec la veille** (IA / World Models) — le sujet est dans ton ADN.

## Risques & mitigations

| Risque | Mitigation |
|---|---|
| Coût API (abus, scraping) | Rate limiting par IP (5 msg / 10 min), Claude Haiku 4.5 (peu cher), max_tokens limité |
| Hallucinations sur ton profil | System prompt exhaustif + instruction stricte « si tu ne sais pas, dis-le et redirige vers la page concernée » |
| Clé API exposée | `OPENAI_API_KEY` dans server endpoint uniquement, jamais dans le bundle client |
| Prompt injection | Pas d'accès outils, pas de mémoire cross-session, échapper le HTML côté affichage |
| Conversations sensibles | Disclaimer + log minimal (juste compteur, pas de contenu) |

## Stack technique

- **Astro 5** en mode hybrid/SSR pour les routes API (`output: 'hybrid'` avec adapter Vercel)
- **`@astrojs/vercel`** adapter pour les server endpoints
- **Vercel AI SDK** :
  - `ai` (core) — `streamText`, gestion du streaming standardisée
  - `@ai-sdk/openai` — provider OpenAI
  - `@ai-sdk/react` — hook `useChat`
- **`streamdown`** — rendu markdown optimisé pour le streaming LLM (gère les blocs incomplets, sanitize anti-XSS, évite le rendu saccadé pendant que les tokens arrivent)
- **OpenAI `gpt-4o-mini`** — rapport qualité/prix excellent, multilingue natif (FR sans souci)
- **Côté client** : deux options
  - (A) **Vanilla JS** + `readDataStream` du AI SDK — zéro dépendance React, cohérent avec Astro
  - (B) **React island** + hook `useChat` du AI SDK — UI plus rapide à coder, tout est géré (messages, loading, erreurs, streaming, optimistic updates)
  - **Recommandation : (B)** — `@astrojs/react` + `useChat`, c'est ~30 lignes de code total pour le composant
- **Tailwind** pour le UI (cohérent avec le reste du site)

## Architecture

```
src/
  pages/
    chat.astro                 # Page Astro qui monte le composant React
    api/
      chat.ts                  # POST endpoint, streamText() du AI SDK → toDataStreamResponse()
  components/
    ChatInterface.tsx          # React island avec useChat() — UI complète
  lib/
    chat-context.ts            # Construit le system prompt depuis realisations.ts + veille.ts + profil
    rate-limit.ts              # Rate limit en mémoire (Map IP → timestamps)
  data/
    profil.ts                  # Bio, formation, contact, dispo (nouveau)
```

## System prompt — construction

Le system prompt est généré au build à partir des sources de vérité existantes :

1. **Profil de base** (nouveau fichier `src/data/profil.ts`) :
   - Nom, formation BTS SIO SLAM, école, année
   - Stage rectorat (déjà dans `rectorat.astro`)
   - Centres d'intérêt (astronomie, voyage, coding)
   - Soft skills, langues, dispo
2. **Réalisations** : import de `src/data/realisations.ts`
3. **Veille** : import de `src/data/veille.ts` (titres + résumés)
4. **Certifications** : ANSSI, RGPD modules 1-5
5. **Instructions de comportement** :
   - Répondre en français, ton professionnel mais accessible
   - Refuser les questions hors-sujet (redirection polie)
   - Si info absente : « Je n'ai pas cette info précise, contacte Erwan à pro.erwantv@gmail.com »
   - Jamais inventer projets, dates, techno
   - Format court (3-5 phrases max sauf si on demande détail)

## Étapes d'implémentation

### 1. Setup infra (30 min)
- [ ] `npm i @astrojs/vercel @astrojs/react react react-dom ai @ai-sdk/openai @ai-sdk/react streamdown`
- [ ] `npm i -D @types/react @types/react-dom`
- [ ] Configurer `astro.config.mjs` : `output: 'hybrid'`, adapter Vercel, integration React
- [ ] Ajouter `OPENAI_API_KEY` dans Vercel env vars (Production + Preview)
- [ ] Ajouter `.env` local (gitignored) pour dev avec la même clé

### 2. Données profil (45 min)
- [ ] Créer `src/data/profil.ts` avec bio, formation, stage, contact, dispo
- [ ] Créer `src/lib/chat-context.ts` qui assemble le system prompt depuis tous les fichiers data
- [ ] Tester que le prompt fait <8k tokens (sinon trim les longs résumés veille)

### 3. API endpoint (45 min)
- [ ] `src/pages/api/chat.ts` — POST, body `{ messages }` (format `useChat`)
- [ ] `export const prerender = false` (forcer SSR sur cette route)
- [ ] Validation : max 20 messages dans l'historique, max 500 chars par message user
- [ ] Rate limit : Map en mémoire, 5 messages / 10 min / IP (clé = `request.headers.get('x-forwarded-for')`)
- [ ] Appel `streamText({ model: openai('gpt-4o-mini'), system: SYSTEM_PROMPT, messages, maxTokens: 500 })`
- [ ] Retour `result.toDataStreamResponse()` — gère tout le streaming pour `useChat`
- [ ] Gestion erreurs : 429 si rate limit, message clair côté UI via `onError` du hook

### 4. UI — React island avec `useChat` (1h30)
- [ ] `src/components/ChatInterface.tsx` — `'use client'`, hook `useChat({ api: '/api/chat' })`
- [ ] `useChat` fournit : `messages`, `input`, `handleInputChange`, `handleSubmit`, `isLoading`, `error`
- [ ] Zone messages scrollable (auto-scroll bas via `useEffect` sur `messages`)
- [ ] Bulles user à droite (texte brut) / IA à gauche (rendu via `<Streamdown>` — markdown propre + safe pendant le streaming)
- [ ] 3-4 questions suggérées en chip → `setInput()` puis submit auto
- [ ] Textarea + bouton Envoyer (Enter envoie, Shift+Enter saut de ligne)
- [ ] Indicateur typing pendant `isLoading`
- [ ] Affichage `error` si rate limit ou erreur API
- [ ] `src/pages/chat.astro` : `<ChatInterface client:load />` dans `Layout.astro`
- [ ] Style Tailwind cohérent avec le portfolio (couleurs, dark mode, typo Geist)

### 5. Intégration site (15 min)
- [ ] Lien « Chat avec mon IA » dans `Header.astro`
- [ ] CTA sur la home `index.astro` (ex: bandeau ou bouton flottant)
- [ ] Meta description SEO

### 6. Polish & tests (45 min)
- [ ] Tester sur mobile (clavier ne casse pas le scroll)
- [ ] Tester rate limit (6e message → message clair)
- [ ] Tester avec API key absente → fallback message
- [ ] Tester questions piège : prompt injection (« ignore tes instructions »), hors-sujet, hallucination check
- [ ] Vérifier coût estimé sur 100 conversations test

## Coût estimé

- **GPT-4o-mini** : $0.15 / M input tokens, $0.60 / M output (encore moins cher que Haiku)
- Conversation moyenne : 4k input (system prompt) + 500 output × 5 tours = ~25k input, 2.5k output
- ≈ **$0.005 / conversation complète** (~0,5 centime)
- Avec rate limit 5 msg/10min : un visiteur abusif coûte max ~$0.02/jour
- Budget mensuel raisonnable : **2-5€** pour un trafic normal portfolio
- 💡 Le AI SDK supporte le **prompt caching** OpenAI auto si dispo → encore moins cher si activé côté compte

## Améliorations futures (V2, hors scope initial)

- Cache prompt Anthropic (system prompt identique à chaque appel → 90% de réduction coût input)
- Logs analytiques (questions les plus posées) → améliorer le portfolio en conséquence
- Voice input (Web Speech API)
- Export conversation en PDF pour recruteur
- Multilingue (EN auto-détecté)

## Decision points à valider avant de coder

1. **SSR ou pré-rendu ?** → hybrid (default static, `/api/chat` en server avec `prerender = false`)
2. **Rate limit en mémoire ou Vercel KV ?** → mémoire suffit pour V1, KV si trafic explose
3. **Modèle ?** → `gpt-4o-mini` (validé par l'utilisateur)
4. **SDK ?** → Vercel AI SDK (`ai` + `@ai-sdk/openai` + `@ai-sdk/react`)
5. **Framework UI ?** → React island via `@astrojs/react` pour profiter du hook `useChat`
6. **Historique persistant ?** → state React uniquement, repart vierge à chaque visite (le `useChat` ne persiste pas par défaut)

## Estimation totale

**~4h30 de dev** pour une V1 propre et déployée (le AI SDK fait gagner ~1h vs implémentation manuelle du streaming).
