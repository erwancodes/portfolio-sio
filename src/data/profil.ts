export const profil = {
  nom: 'Erwan Sagnardon',
  formation: {
    actuelle: 'BTS SIO option SLAM (Solutions Logicielles et Applications Métiers)',
    annees: '2025 — 2027',
    etablissement: 'Le Mesnil-Esnard, France',
    statut: 'En cours, 1ère année',
  },
  formationsPrecedentes: [
    {
      diplome: 'Bac Pro Systèmes Numériques — option RISC',
      annees: '2022 — 2025',
      lieu: 'Le Mesnil-Esnard, France',
    },
  ],
  localisation: 'Étrepagny (27), France — Permis B',
  recherche: 'Stage en développement du 25/05 au 26/06/2026',
  contact: {
    email: 'erwan.sagnardon@campus-la-chataigneraie.org',
    github: 'https://github.com/ErwanCodes',
  },
  competences: {
    web: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'ReactJS', 'NextJS', 'Stripe'],
    langages: ['C#', '.NET', 'Python'],
    bdd: ['SQL', 'MySQL', 'SQL Server', 'PostgreSQL', 'Convex'],
    systemes: ['Installation OS', 'Configuration services', 'Gestion parc informatique', 'Déploiement'],
    scripting: ['MS-DOS', 'PowerShell', 'Algorithmie'],
  },
  experiences: [
    {
      poste: 'Stagiaire',
      entreprise: 'LDLC Rouen',
      lieu: 'Rouen, France',
      periode: 'Janvier 2025 — Février 2025',
      missions: [
        'Conseil client et vente de matériel informatique',
        "Montage, configuration et dépannage d'ordinateurs",
      ],
    },
    {
      poste: 'Stagiaire',
      entreprise: 'ECAM',
      lieu: 'Valdemoro, Madrid, Espagne',
      periode: 'Mars 2024 — Avril 2024',
      missions: [
        'Maintenance informatique et fibre optique',
        "Réparation et configuration d'équipements",
      ],
    },
    {
      poste: 'Stagiaire',
      entreprise: 'Trafic Technologie Système',
      lieu: 'Jouy-le-Moutier, France',
      periode: 'Novembre 2023 — Décembre 2024',
      missions: [
        'Réparation et mise en service de panneaux électroniques',
        'Diagnostic technique et câblage',
      ],
    },
  ],
  projetsPhares: [
    {
      nom: 'AlgoTrainer',
      url: 'https://algotrainer.erwancodes.me/',
      description:
        "Plateforme d'entraînement au CCF d'algorithmique pour le BTS SIO : sujets officiels, correction immédiate et éditeur Python embarqué qui exécute le code en local.",
    },
    {
      nom: 'OpenFlux',
      url: 'https://openflux.erwancodes.me/',
      description:
        'Agrégateur de veille tech via flux RSS, construit avec Astro, mis à jour automatiquement chaque jour via GitHub Actions.',
    },
    {
      nom: 'StagePilot',
      url: 'https://stagepilot.app',
      description: "CRM de recherche de stage pour étudiants. Organise, suit et optimise les candidatures.",
    },
    {
      nom: 'ReactLearning',
      url: 'https://github.com/erwancodes/ReactLeaning',
      description: 'Projet open source : ressources et exercices pour apprendre React.',
    },
  ],
  certifications: [
    { nom: 'ANSSI — MOOC SecNumacademie', type: 'Certificat officiel cybersécurité' },
    { nom: 'RGPD — 5 modules CNIL', type: 'Sensibilisation protection des données personnelles' },
    { nom: 'PIX', type: 'Certification compétences numériques' },
  ],
  centresInteret: ['Astronomie', 'Voyage', 'Coding'],
  softSkills: ['Rigueur', 'Curiosité', 'Autonomie', 'Travail en équipe'],
  langues: ['Français (natif)', 'Anglais', 'Espagnol (notions, stage à Madrid)'],
  realisations: [
    { nom: 'AP — CyberNews', type: 'TP', resume: 'Atelier de production : newsletter de veille cybersécurité.' },
    { nom: 'AP — Site Web Equipe', type: 'TP', resume: "Réalisation collective d'un site Web d'équipe." },
    { nom: 'AP — CMS WordPress', type: 'TP', resume: "Mise en place et configuration d'un site WordPress." },
    { nom: 'TP Windows 10 — Journalisation', type: 'TP', resume: 'Configuration de la journalisation système et analyse des logs.' },
    { nom: 'TP MS-DOS', type: 'TP', resume: 'Manipulation des commandes système MS-DOS.' },
    { nom: 'TP PowerShell', type: 'TP', resume: "Scripting d'administration sous PowerShell." },
  ],
  veille: {
    theme: 'La robotique humanoïde et industrielle',
    bornages: [
      'Startups robotique & open source humanoïde',
      'World Models IA pour la robotique',
    ],
    sujetsSuivis: [
      'Tesla Optimus Gen3 — production de masse',
      'Google DeepMind Genie 3 — world model pour la robotique',
      'NVIDIA Cosmos — world models pour la Physical AI',
      'Infineon — challenge startups robotique humanoïde',
    ],
    outils: ['Feedly', 'Google Alerts', 'OpenFlux (perso)', 'Inoreader'],
  },
};
