# PRD - Portfolio BTS SIO SLAM

## 1. Contexte

Portfolio personnel d'Erwan, etudiant en BTS SIO option SLAM, pour presenter son profil dans le cadre de sa formation et de sa recherche de stage.

Le site integre directement les informations du CV dans ses pages (pas de PDF a telecharger). Il met en avant une veille technologique sur la robotique et les competences du referentiel BTS SIO SLAM.

## 2. Objectif

- Presenter clairement l'identite, le parcours et les competences d'Erwan
- Remplacer un CV statique par une vitrine web moderne
- Montrer une veille techno active sur la robotique
- Demontrer la maitrise des competences BTS SIO option SLAM
- Servir de support pour une candidature de stage

## 3. Public cible

- Recruteurs et maitres de stage
- Enseignants et evaluateurs du BTS SIO
- Professionnels de l'informatique

## 4. Structure du site

Le site se compose de **3 pages** :

### 4.1 Page principale - CV / Profil

Page d'accueil qui presente directement les informations du CV.

Contenu :
- Nom, prenom, accroche professionnelle
- Formation actuelle (BTS SIO option SLAM)
- Objectif de stage / projet professionnel
- Presentation courte
- Parcours : formation, experiences, stages
- Projets scolaires et personnels
- Competences techniques (langages, outils, systemes, BDD)
- Soft skills
- Coordonnees de contact (email, GitHub, LinkedIn)
- Centres d'interet si pertinents

L'ensemble doit se lire comme un CV enrichi, avec une hierarchie visuelle claire et des sections bien decoupees.

### 4.2 Page Veille Technologique - Robotique

Page dediee a la veille technologique sur le theme de la **robotique**.

Contenu :
- Liste d'articles / actualites sur la robotique
- Pour chaque article : titre, date, court resume, lien vers la source
- Organisation chronologique ou thematique
- Sources variees (sites specialises robotique, tech news)

Objectif : montrer une curiosite technique et un suivi actif de l'actualite dans le domaine de la robotique.

### 4.3 Page Competences BTS SIO - Option SLAM

Page presentant les competences du referentiel BTS SIO option SLAM.

Contenu :
- Blocs de competences du referentiel officiel
- Explication simple de chaque competence
- Correspondance avec des projets, exercices, stages ou realisations d'Erwan
- Preuves ou exemples concrets quand disponibles

Objectif : montrer non seulement les competences attendues du BTS SIO SLAM, mais aussi leur mise en pratique reelle.

## 5. Navigation

Navigation simple et explicite, 3 entrees :
- **Accueil** (CV / Profil)
- **Veille Robotique**
- **BTS SIO SLAM**

Contraintes :
- Navigation visible et fixe sur desktop
- Menu adapte au mobile (hamburger ou equivalent)
- Acces rapide, pas de sous-menus inutiles

## 6. Stack technique

- **Astro** - Framework principal (site statique, performant, ideal pour du contenu)
- **TailwindCSS** - Utilitaires CSS
- **Shadcn UI** (portage Astro) - Composants UI accessibles et modernes
- **TypeScript** - Typage du projet
- **Geist** (Vercel) - Systeme typographique :
  - Geist Sans : texte principal, titres, interface
  - Geist Mono : elements techniques, labels, tags, stacks, dates, blocs code

## 7. Exigences UX / UI

Le site doit etre :
- Moderne et sobre
- Professionnel
- Lisible et responsive
- Oriente tech / developpement

Principes :
- Lecture immediate des informations importantes
- Sections bien decoupees avec hierarchie visuelle forte
- Style coherent, clean, inspire des portfolios dev modernes
- Bonne lisibilite mobile et desktop
- Dark mode par defaut (optionnel : toggle light/dark)

## 8. Exigences techniques

- Site responsive
- Chargement rapide (site statique Astro)
- Structure claire et maintenable
- Contenu facilement modifiable (fichiers Markdown ou data)
- Composants reutilisables
- Deploiement simple (Vercel)

## 9. Hors perimetre V1

- Espace d'administration
- Authentification
- Blog
- Formulaire de contact (lien mailto suffit)
- Back-office
- Animations complexes

## 10. Criteres de succes

- Un recruteur comprend le profil d'Erwan en moins de 30 secondes
- Le CV est lisible directement dans le site
- La veille robotique est visible et pertinente
- Les competences BTS SIO SLAM sont clairement presentees avec preuves
- Le site fonctionne sur mobile et desktop
- L'ensemble donne une image professionnelle et technique

## 11. Prochaines etapes

1. Initialiser le projet Astro + Tailwind + Shadcn + Geist
2. Creer le layout principal et la navigation
3. Developper la page CV / Profil
4. Developper la page Veille Robotique
5. Developper la page Competences BTS SIO SLAM
6. Integrer le contenu reel du CV d'Erwan
7. Deployer sur Vercel
