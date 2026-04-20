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
    slug: 'google-deepmind-genie-3-world-model-robotique',
    title: 'Google DeepMind Genie 3 : un World Model pour la robotique',
    date: '2025-08-01',
    tag: 'IA & Robotique',
    bornage: 'Bornage 2 — World Models IA : comprendre le monde physique pour la robotique',
    summary: "Google DeepMind a presente Genie 3, un world model capable de generer des environnements de simulation pour entrainer des robots de maniere infinie sans environnement physique reel.",
    description: `Google DeepMind a presente Genie 3, un world model capable de generer des environnements de simulation interactifs et realistes pour entrainer des robots de maniere infinie. Grace a l'IA, les robots peuvent s'entrainer dans des milliers de scenarios synthetiques sans necessiter d'environnement physique reel.

Cette approche accelere considerablement l'apprentissage par renforcement : la ou un robot aurait besoin de semaines d'essais en conditions reelles, Genie 3 permet de simuler ces experiences a grande echelle et a moindre cout.

Le modele marque une etape importante dans la convergence entre IA generative et robotique, en offrant une source quasi-illimitee de donnees d'entrainement diversifiees et controlees pour developper des comportements robotiques robustes.`,
    source: 'https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/',
    sourceLabel: 'Google DeepMind',
    pdf: '/pdfs/news2.pdf',
    keyPoints: [
      { aspect: 'Modele', detail: 'Google DeepMind Genie 3' },
      { aspect: 'Approche', detail: 'World model generatif pour la simulation robotique' },
      { aspect: 'Avantage', detail: 'Entrainement infini via environnements synthetiques' },
      { aspect: 'Impact', detail: "Acceleration de l'apprentissage par renforcement pour la robotique" },
    ],
  },
  {
    slug: 'infineon-challenge-startups-robotique-humanoide',
    title: 'Infineon lance un challenge startups dedie a la robotique humanoïde',
    date: '2026-03-15',
    tag: 'Humanoide',
    bornage: 'Bornage 1 — Startups robotique & open source humanoide',
    summary: "Infineon organise en mars 2026 un challenge dedie aux startups de robotique humanoide pour soutenir l'innovation materielle et favoriser l'emergence de nouveaux acteurs dans l'ecosysteme.",
    description: `En mars 2026, Infineon organise un challenge specialement dedie aux startups de robotique humanoide. L'objectif est de soutenir l'innovation materielle, de simplifier l'acces aux composants et de favoriser l'emergence de nouveaux acteurs dans l'humanoide, y compris dans une logique de partenariats open source.

Ce challenge s'inscrit dans un contexte de forte acceleration du marche de la robotique humanoide. En facilitant l'acces aux composants electroniques cles — capteurs, microcontroleurs, modules de puissance — Infineon cherche a abaisser les barrieres a l'entree pour les startups innovantes.

L'initiative illustre la montee en puissance des acteurs industriels traditionnels dans l'ecosysteme robotique, qui misent sur le soutien aux jeunes pousses pour integrer leurs composants au coeur des prochaines generations de robots humanoïdes.`,
    source: 'https://www.infineon.com/partners/startups/humanoid-robotics',
    sourceLabel: 'Infineon',
    pdf: '/pdfs/news_mars_3_infineon_challenge.pdf',
    keyPoints: [
      { aspect: 'Acteur', detail: 'Infineon' },
      { aspect: 'Mecanisme', detail: 'Challenge startups dedie a la robotique humanoide' },
      { aspect: 'Objectif', detail: "Soutien a l'innovation materielle et a l'ecosysteme" },
      { aspect: 'Angle', detail: 'Startups, open source, composants pour robots humanoïdes' },
    ],
  },
  {
    slug: 'nvidia-cosmos-world-models-physical-ai',
    title: 'NVIDIA Cosmos : les world models pour la Physical AI',
    date: '2026-03-12',
    tag: 'IA & Robotique',
    bornage: 'Bornage 2 — World Models IA : comprendre le monde physique pour la robotique',
    summary: "NVIDIA a presente Cosmos, une plateforme de world models permettant aux robots de mieux comprendre les lois du monde physique grace a la simulation et aux donnees synthetiques.",
    description: `NVIDIA a presente Cosmos, une plateforme de world models pensee pour la Physical AI. L'objectif est de permettre aux robots de mieux comprendre les lois du monde physique grace a la simulation, aux donnees synthetiques et a des modeles capables d'anticiper les consequences d'une action.

Les world models representent une avancee majeure : au lieu d'apprendre uniquement par essai-erreur dans le monde reel, les robots peuvent s'entrainer dans des simulations haute-fidelite generees par Cosmos, reduisant drastiquement le temps et le cout d'apprentissage.

Cette approche ameliore la robustesse des systemes robotiques en leur donnant une comprehension profonde de la physique — gravite, friction, collisions — rendant leurs comportements plus previsibles et fiables dans des environnements reels et varies.`,
    source: 'https://www.nvidia.com/en-us/ai/cosmos/',
    sourceLabel: 'NVIDIA',
    pdf: '/pdfs/news_mars_4_nvidia_cosmos.pdf',
    keyPoints: [
      { aspect: 'Plateforme', detail: 'NVIDIA Cosmos' },
      { aspect: 'Approche', detail: 'World models pour la Physical AI' },
      { aspect: 'Usage', detail: 'Simulation, donnees synthetiques, comprehension du monde physique' },
      { aspect: 'Objectif', detail: "Ameliorer l'apprentissage et la robustesse des robots" },
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
