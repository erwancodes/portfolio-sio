# Plan d'amélioration — Conformité E5

> Source : `E5 contenuportfolio v1.md` (consignes officielles)
> État des lieux : portfolio Astro + Tailwind, pages `index`, `bts-sio`, `veille/`.

---

## 1. Page d'accueil — CV (`src/pages/index.astro`)

**Conforme :** CV intégré (hero + compétences + expériences + formations + projets + centres d'intérêt).

**À ajouter :**
- Section ou bandeau **« Certifications & Cybersécurité »** avec 3 mentions cliquables :
  - **RGPD** → ouvre une lightbox/page dédiée avec **5 copies d'écran** (preuve formation/quiz).
  - **ANSSI** → lien cliquable vers l'attestation/MOOC SecNumacadémie (`target="_blank"`).
  - **PIX** → lien cliquable vers le profil PIX **avec le score obtenu** affiché.
- Retirer le tag « Certification RGPD » noyé dans les skills → le promouvoir en mention dédiée.

**Implémentation suggérée :**
- Nouvelle section `<section id="certifications">` après « Compétences ».
- Stocker les preuves RGPD dans `public/certifications/rgpd/` (5 PNG).
- Page `src/pages/certifications/rgpd.astro` (galerie) ou modale.

---

## 2. Menu de navigation (`src/components/Header.astro`)

**Actuel :** Accueil / Veille Technologique / BTS SIO.

**À faire :**
- **Renommer `bts-sio.astro` → `rectorat.astro`** (la page contient déjà le tableau de synthèse, ce qui correspond pile au besoin de la page Rectorat).
- Lien menu **BTS SIO → Rectorat** (`/rectorat`).
- Renommer **Veille Technologique → Veille** (`/veille`).
- **Ajouter `Réalisations professionnelles`** (`/realisations`) — nouvelle page (cf. §3).
- Conserver le logo `E.S` qui pointe vers `/` (Accueil = CV).
- Ordre final : Accueil / Réalisations professionnelles / Veille / Rectorat.

---

## 3. Page Réalisations professionnelles (`/realisations`) — NOUVELLE

**À créer :** `src/pages/realisations/index.astro` (page entièrement nouvelle, indépendante de `bts-sio.astro`).

**Contenu :**
- Liste des RP avec, pour chacune :
  - Nom (TP / Stage / RP de l'E6)
  - **Compétences ET sous-compétences du Bloc 1** mobilisées (badges)
  - **Lien cliquable vers la page détail** de la RP
- Proposer **deux vues commutables** (au choix) :
  - Vue par réalisation
  - Vue par compétence
- Sources de données : créer `src/data/realisations.ts` (typed) listant chaque RP avec sous-compétences B1.

---

## 4. Pages détail des RP (`/realisations/[slug]`)

**À créer :** route dynamique `src/pages/realisations/[slug].astro` (modèle déjà en place pour `veille/[slug].astro`).

**Contenu obligatoire de chaque page détail :**
1. Rappel des compétences + **sous-compétences B1** mobilisées (badges).
2. **Contexte** — l'histoire de la RP (problématique, besoin, environnement).
3. **Environnement technologique** (langages, frameworks, OS, outils).
4. **Preuves** :
   - Bloc 1 → **obligatoire** (copies d'écran, extraits de code, schémas).
   - Bloc 2 et Bloc 3 → optionnel, pour valoriser.
5. Tous les `<a href>` externes en `target="_blank" rel="noopener noreferrer"`.

**Stockage des preuves :** `public/realisations/<slug>/` (images numérotées).

---

## 5. Page Veille (`src/pages/veille/index.astro`)

**Conforme :** thème affiché (« La robotique humanoïde et industrielle »), articles classés par date décroissante.

**À ajouter / renforcer :**
- **Présentation du bornage** (périmètre, exclusions, mots-clés) en encart en haut de page.
- **Présentation des outils de veille** :
  - 2 outils permanents (RSS Feedly, Google Alerts, etc.)
  - **+ 1 nouvel outil testé chaque mois** à partir de mars (donc 3 ou 4 affichés en mai/juin).
  - Bloc dédié `Outils de veille` avec carte par outil (nom, type, lien, retour d'expérience).
- **News** : passer à **2 news minimum / mois à partir de mars 2026**, regroupées par bornage puis triées par date décroissante.
- **Mise en œuvre** : nouvelle section « À quoi sert ma veille ? » → exemple concret d'application (projet, choix techno, prise de position).

**Implémentation :**
- Étendre `src/data/veille.ts` avec un type `Outil` et un type `MiseEnOeuvre`.
- Composer la page en 4 blocs : Thème + Bornage / Outils / News (groupées) / Mise en œuvre.

---

## 6. Page Rectorat (`/rectorat`) — issue du renommage de `bts-sio.astro`

**Action de base :** `mv src/pages/bts-sio.astro src/pages/rectorat.astro` puis adapter le titre, le H1 et le `<Layout title>`.

**Sous-section E5 — à intégrer dans la page :**
1. Lien `<a href target="_blank">` vers `public/documents/tableau-synthese.xlsx` (visionnage + téléchargement, pas de capture d'écran).
2. Image placeholder **Attestation stage 1ʳᵉ année** (à remplacer en juillet 2026).
3. Image placeholder **Attestation stage 2ᵉ année**.

**Sous-section E6 :**
- Bloc « Contenu donné ultérieurement ».

**Décision à prendre :** garder ou non le référentiel C1–C6 actuellement dans `bts-sio.astro`.
- Option A : le **conserver** dans `rectorat.astro` (vue institutionnelle complète).
- Option B : le **déplacer** dans `/realisations` et n'afficher dans Rectorat que les 3 éléments demandés par les consignes. Option B = plus fidèle au cahier des charges.

**Stockage :** `public/rectorat/attestation-stage-1.png` + `public/rectorat/attestation-stage-2.png`.

---

## 7. Règles transverses

- **Tous les `href` externes** doivent ouvrir dans un nouvel onglet (`target="_blank" rel="noopener noreferrer"`). Audit à faire sur l'ensemble des pages.
- Vérifier que la table `.xls` est bien servie (header MIME) via Astro/`public/`.
- Conserver le thème dark/light déjà en place.
- Pas de régression sur les sections existantes (CV, Projets phares, Centres d'intérêt).

---

## 8. Ordre d'exécution suggéré

1. **Renommage** `bts-sio.astro` → `rectorat.astro` + ajustement du contenu (E5 / E6).
2. **Header** : nouveaux libellés et nouvel onglet Réalisations professionnelles.
3. **Page Réalisations** (nouvelle) + données `realisations.ts` + tableau `.xls` téléchargeable.
4. Pages détail dynamiques `realisations/[slug]` + structure de preuves.
5. Section **Certifications** (RGPD/ANSSI/PIX) sur l'accueil.
6. **Veille** : bornage + outils + mise en œuvre + cadence mensuelle.
7. Audit final `target="_blank"` + relecture conformité point par point.
