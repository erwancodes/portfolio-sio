export type TypeRealisation = 'TP' | 'Stage' | 'RP';

export interface SousCompetence {
  code: string;
  label: string;
}

export interface Competence {
  code: string;
  title: string;
  sousCompetences: SousCompetence[];
}

export type Preuve =
  | { type: 'image'; src: string; caption?: string }
  | { type: 'pdf'; href: string; label: string; caption?: string }
  | { type: 'lien'; href: string; label: string; caption?: string }
  | { type: 'code'; language?: string; content: string; caption?: string };

export type Bloc = 'B1' | 'B2' | 'B3';

export interface PreuvesParBloc {
  bloc: Bloc;
  obligatoire?: boolean;
  preuves: Preuve[];
}

export interface Realisation {
  slug: string;
  nom: string;
  type: TypeRealisation;
  periode?: string;
  resume?: string;
  /** Codes des sous-competences B1 mobilisees, ex: ["B1.1", "B2.3"] */
  sousCompetences: string[];
  /** Histoire de la RP : problematique, besoin, environnement humain. */
  contexte?: string;
  /** Stack technique : langages, frameworks, OS, outils. */
  environnementTechno?: string[];
  /** Preuves regroupees par bloc. B1 obligatoire ; B2/B3 pour valoriser. */
  preuves?: PreuvesParBloc[];
}

export const competencesB1: Competence[] = [
  {
    code: 'B1',
    title: 'Gerer le patrimoine informatique',
    sousCompetences: [
      { code: 'B1.1', label: 'Recenser et identifier les ressources numeriques' },
      { code: 'B1.2', label: 'Exploiter des referentiels, normes et standards adoptes par le prestataire informatique' },
      { code: 'B1.3', label: "Mettre en place et verifier les niveaux d'habilitation associes a un service" },
      { code: 'B1.4', label: "Verifier les conditions de la continuite d'un service informatique" },
      { code: 'B1.5', label: 'Gerer des sauvegardes' },
      { code: 'B1.6', label: "Verifier le respect des regles d'utilisation des ressources numeriques" },
    ],
  },
  {
    code: 'B2',
    title: "Repondre aux incidents et aux demandes d'assistance et d'evolution",
    sousCompetences: [
      { code: 'B2.1', label: 'Collecter, suivre et orienter des demandes' },
      { code: 'B2.2', label: 'Traiter des demandes concernant les services reseau et systeme, applicatifs' },
      { code: 'B2.3', label: 'Traiter des demandes concernant les applications' },
    ],
  },
  {
    code: 'B3',
    title: "Developper la presence en ligne de l'organisation",
    sousCompetences: [
      { code: 'B3.1', label: "Participer a la valorisation de l'image de l'organisation sur les medias numeriques" },
      { code: 'B3.2', label: "Referencer les services en ligne de l'organisation et mesurer leur visibilite" },
      { code: 'B3.3', label: "Participer a l'evolution d'un site Web exploitant les donnees de l'organisation" },
    ],
  },
  {
    code: 'B4',
    title: 'Travailler en mode projet',
    sousCompetences: [
      { code: 'B4.1', label: "Analyser les objectifs et les modalites d'organisation d'un projet" },
      { code: 'B4.2', label: 'Planifier les activites' },
      { code: 'B4.3', label: "Evaluer les indicateurs de suivi d'un projet et analyser les ecarts" },
    ],
  },
  {
    code: 'B5',
    title: 'Mettre a disposition des utilisateurs un service informatique',
    sousCompetences: [
      { code: 'B5.1', label: "Realiser les tests d'integration et d'acceptation d'un service" },
      { code: 'B5.2', label: 'Deployer un service' },
      { code: 'B5.3', label: "Accompagner les utilisateurs dans la mise en place d'un service" },
    ],
  },
  {
    code: 'B6',
    title: 'Organiser son developpement professionnel',
    sousCompetences: [
      { code: 'B6.1', label: "Mettre en place son environnement d'apprentissage personnel" },
      { code: 'B6.2', label: 'Mettre en oeuvre des outils et strategies de veille informationnelle' },
      { code: 'B6.3', label: 'Gerer son identite professionnelle' },
      { code: 'B6.4', label: 'Developper son projet professionnel' },
    ],
  },
];

export const realisations: Realisation[] = [
  {
    slug: 'ap-cybernews',
    nom: 'AP — CyberNews',
    type: 'TP',
    resume: 'Atelier de production — newsletter de veille cybersecurite.',
    sousCompetences: ['B1.6', 'B5.3', 'B6.2'],
  },
  {
    slug: 'linkedin',
    nom: 'Profil LinkedIn',
    type: 'TP',
    resume: 'Construction et optimisation de la presence professionnelle en ligne.',
    sousCompetences: ['B3.1', 'B3.3', 'B6.3'],
  },
  {
    slug: 'ap-site-web-equipe',
    nom: 'AP — Site Web Equipe',
    type: 'TP',
    resume: 'Realisation collective d\'un site Web d\'equipe.',
    sousCompetences: ['B1.1', 'B4.1', 'B4.2', 'B5.2'],
  },
  {
    slug: 'ap-cms-wordpress',
    nom: 'AP — CMS WordPress',
    type: 'TP',
    resume: 'Mise en place et configuration d\'un site WordPress.',
    sousCompetences: ['B5.2', 'B5.3'],
  },
  {
    slug: 'tp-windows-10-journalisation',
    nom: 'TP2 — Windows 10 et la journalisation',
    type: 'TP',
    resume: 'Configuration de la journalisation systeme et analyse des logs.',
    sousCompetences: ['B1.4', 'B2.2'],
  },
  {
    slug: 'tp-ms-dos',
    nom: 'TP — MS-DOS',
    type: 'TP',
    resume: 'Manipulation des commandes systeme MS-DOS.',
    sousCompetences: ['B1.1', 'B2.2'],
  },
  {
    slug: 'tp-powershell',
    nom: 'TP — PowerShell',
    type: 'TP',
    resume: 'Scripting d\'administration sous PowerShell.',
    sousCompetences: ['B1.1', 'B2.2'],
  },
];

export const realisationBySlug = (slug: string): Realisation | undefined =>
  realisations.find((r) => r.slug === slug);

export const sousCompetenceByCode = (code: string): SousCompetence | undefined => {
  for (const c of competencesB1) {
    const sub = c.sousCompetences.find((s) => s.code === code);
    if (sub) return sub;
  }
  return undefined;
};

export const competenceByCode = (code: string): Competence | undefined =>
  competencesB1.find((c) => c.code === code);
