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
  /** Codes des sous-competences B1 mobilisees, ex: ["C1.1", "C2.3"] */
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
    code: 'C1',
    title: 'Gerer le patrimoine informatique',
    sousCompetences: [
      { code: 'C1.1', label: 'Recenser et identifier les ressources numeriques' },
      { code: 'C1.2', label: 'Exploiter des referentiels, normes et standards adoptes par le prestataire informatique' },
      { code: 'C1.3', label: "Mettre en place et verifier les niveaux d'habilitation associes a un service" },
      { code: 'C1.4', label: "Verifier les conditions de la continuite d'un service informatique" },
      { code: 'C1.5', label: 'Gerer des sauvegardes' },
      { code: 'C1.6', label: "Verifier le respect des regles d'utilisation des ressources numeriques" },
    ],
  },
  {
    code: 'C2',
    title: "Repondre aux incidents et aux demandes d'assistance et d'evolution",
    sousCompetences: [
      { code: 'C2.1', label: 'Collecter, suivre et orienter des demandes' },
      { code: 'C2.2', label: 'Traiter des demandes concernant les services reseau et systeme, applicatifs' },
      { code: 'C2.3', label: 'Traiter des demandes concernant les applications' },
    ],
  },
  {
    code: 'C3',
    title: "Developper la presence en ligne de l'organisation",
    sousCompetences: [
      { code: 'C3.1', label: "Participer a la valorisation de l'image de l'organisation sur les medias numeriques" },
      { code: 'C3.2', label: "Referencer les services en ligne de l'organisation et mesurer leur visibilite" },
      { code: 'C3.3', label: "Participer a l'evolution d'un site Web exploitant les donnees de l'organisation" },
    ],
  },
  {
    code: 'C4',
    title: 'Travailler en mode projet',
    sousCompetences: [
      { code: 'C4.1', label: "Analyser les objectifs et les modalites d'organisation d'un projet" },
      { code: 'C4.2', label: 'Planifier les activites' },
      { code: 'C4.3', label: "Evaluer les indicateurs de suivi d'un projet et analyser les ecarts" },
    ],
  },
  {
    code: 'C5',
    title: 'Mettre a disposition des utilisateurs un service informatique',
    sousCompetences: [
      { code: 'C5.1', label: "Realiser les tests d'integration et d'acceptation d'un service" },
      { code: 'C5.2', label: 'Deployer un service' },
      { code: 'C5.3', label: "Accompagner les utilisateurs dans la mise en place d'un service" },
    ],
  },
  {
    code: 'C6',
    title: 'Organiser son developpement professionnel',
    sousCompetences: [
      { code: 'C6.1', label: "Mettre en place son environnement d'apprentissage personnel" },
      { code: 'C6.2', label: 'Mettre en oeuvre des outils et strategies de veille informationnelle' },
      { code: 'C6.3', label: 'Gerer son identite professionnelle' },
      { code: 'C6.4', label: 'Developper son projet professionnel' },
    ],
  },
];

export const realisations: Realisation[] = [
  {
    slug: 'ap-cybernews',
    nom: 'AP — CyberNews',
    type: 'TP',
    resume: 'Atelier de production — newsletter de veille cybersecurite.',
    sousCompetences: ['C1.6', 'C5.3', 'C6.2'],
  },
  {
    slug: 'linkedin',
    nom: 'Profil LinkedIn',
    type: 'TP',
    resume: 'Construction et optimisation de la presence professionnelle en ligne.',
    sousCompetences: ['C3.1', 'C3.3', 'C6.3'],
  },
  {
    slug: 'ap-site-web-equipe',
    nom: 'AP — Site Web Equipe',
    type: 'TP',
    resume: 'Realisation collective d\'un site Web d\'equipe.',
    sousCompetences: ['C1.1', 'C4.1', 'C4.2', 'C5.2'],
  },
  {
    slug: 'ap-cms-wordpress',
    nom: 'AP — CMS WordPress',
    type: 'TP',
    resume: 'Mise en place et configuration d\'un site WordPress.',
    sousCompetences: ['C5.2', 'C5.3'],
  },
  {
    slug: 'tp-windows-10-journalisation',
    nom: 'TP2 — Windows 10 et la journalisation',
    type: 'TP',
    resume: 'Configuration de la journalisation systeme et analyse des logs.',
    sousCompetences: ['C1.4', 'C2.2'],
  },
  {
    slug: 'tp-ms-dos',
    nom: 'TP — MS-DOS',
    type: 'TP',
    resume: 'Manipulation des commandes systeme MS-DOS.',
    sousCompetences: ['C1.1', 'C2.2'],
  },
  {
    slug: 'tp-powershell',
    nom: 'TP — PowerShell',
    type: 'TP',
    resume: 'Scripting d\'administration sous PowerShell.',
    sousCompetences: ['C1.1', 'C2.2'],
  },
  {
    slug: 'stage-ldlc-rouen',
    nom: 'Stage — LDLC Rouen',
    type: 'Stage',
    periode: 'Janvier 2025 — Fevrier 2025',
    resume: 'Conseil client, vente de materiel, montage et depannage d\'ordinateurs.',
    sousCompetences: ['C2.1', 'C2.2', 'C5.3'],
  },
  {
    slug: 'stage-ecam-madrid',
    nom: 'Stage — ECAM (Madrid)',
    type: 'Stage',
    periode: 'Mars 2024 — Avril 2024',
    resume: 'Maintenance informatique et fibre optique, reparation et configuration.',
    sousCompetences: ['C1.1', 'C2.2'],
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
