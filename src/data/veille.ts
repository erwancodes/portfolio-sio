export interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  description: string;
  source: string;
  sourceLabel: string;
  pdf: string;
  tag: string;
  bornage: string;
  keyPoints: { aspect: string; detail: string }[];
}

export const articles: Article[] = [
  {
    slug: 'tesla-optimus-gen3-production-masse',
    title: 'Tesla Optimus Gen3 : Production de masse & integration industrielle',
    date: '2026-02-02',
    tag: 'Humanoide',
    bornage: 'Bornage 1 — Evolution de l\'autonomie / IA generaliste',
    summary: "Tesla a lance la production a grande echelle de son robot humanoide Optimus Gen3, avec une IA embarquee capable de gerer le centre de masse pour une marche fluide et des taches logistiques autonomes.",
    description: `Tesla a officiellement lance la production a grande echelle de son robot humanoide Optimus Gen3. L'IA embarquee permet desormais une gestion autonome du centre de masse pour une marche fluide et l'execution de taches logistiques complexes sans intervention humaine.

L'objectif affiche est un cout inferieur a 20 000 $ pour une integration massive en milieu industriel. Cette avancee represente un tournant majeur dans la robotique humanoide, passant du stade de prototype a celui de produit industriel deployable a grande echelle.

Le robot est concu pour effectuer des taches repetitives et physiquement exigeantes dans les entrepots et usines Tesla, avec l'ambition d'etre commercialise aupres d'autres industriels dans un second temps.`,
    source: 'https://pausehardware.com/tesla-optimus-gen3-2026-production-masse/',
    sourceLabel: 'Pause Hardware',
    pdf: '/pdfs/news_fevrier_1_tesla_optimus_gen3.pdf',
    keyPoints: [
      { aspect: 'Statut', detail: 'Production grande echelle officielle' },
      { aspect: 'IA embarquee', detail: 'Gestion autonome du centre de masse' },
      { aspect: 'Objectif prix', detail: '< 20 000 $ pour l\'industrie' },
      { aspect: 'Usage', detail: 'Logistique complexe sans humain' },
    ],
  },
  {
    slug: 'ces-2026-physical-ai',
    title: 'CES 2026 : Le tournant du « Physical AI »',
    date: '2026-02-23',
    tag: 'IA & Robotique',
    bornage: 'Bornage 2 — Collaboration Homme-Machine / Cobotique',
    summary: "Le CES 2026 a marque une etape historique : l'IA generative s'est totalement integree dans les objets physiques, transformant la cobotique industrielle.",
    description: `Le CES 2026 a marque une etape historique : l'IA generative s'est totalement integree dans les objets physiques (Physical AI). Les robots peuvent desormais percevoir et interpreter leur environnement en temps reel pour collaborer de maniere securisee avec les humains.

Cette evolution transforme profondement la cobotique industrielle. Les robots ne sont plus confines dans des cages de protection mais travaillent cote a cote avec les operateurs humains, certifies CE pour garantir la securite.

Le concept de Physical AI depasse la simple robotique : il englobe l'integration de l'IA generative dans tous les objets physiques — robots, capteurs, vehicules — ouvrant la voie a un monde ou les machines comprennent et s'adaptent a leur environnement de maniere autonome.`,
    source: 'https://airmessoft.fr/robotique-ia-en-2026/',
    sourceLabel: 'Airmessoft / Polymedia',
    pdf: '/pdfs/news_fevrier_2_intelligence_physique.pdf',
    keyPoints: [
      { aspect: 'Physical AI', detail: "L'IA generative s'integre dans des objets physiques (robots, capteurs, vehicules)" },
      { aspect: 'Perception temps reel', detail: 'Les robots percoivent et interpretent leur environnement de maniere autonome' },
      { aspect: 'Collaboration securisee', detail: "Travail cote a cote avec l'humain, sans cage de protection, certifie CE" },
    ],
  },
];

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
