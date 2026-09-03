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
  bornageId: 'B1' | 'B2';
  keyPoints: { aspect: string; detail: string }[];
}

export interface Bornage {
  id: 'B1' | 'B2';
  titre: string;
  description: string;
  motsCles: string[];
  exclusions?: string[];
}

export type TypeOutil = 'permanent' | 'mensuel';

export interface Outil {
  nom: string;
  type: TypeOutil;
  categorie: string;
  url?: string;
  description: string;
  retourExperience?: string;
  /** Mois du test pour les outils mensuels, ex: "mars 2026". */
  moisTeste?: string;
}

export interface MiseEnOeuvre {
  titre: string;
  description: string;
  lien?: { label: string; href: string };
}

export const themeVeille = 'La robotique humanoide et industrielle';

export const bornages: Bornage[] = [
  {
    id: 'B1',
    titre: 'Bornage 1 — Startups robotique & open source humanoide',
    description:
      "Suivi des nouveaux acteurs (startups, spin-offs, projets open source) qui developpent des plateformes humanoides accessibles, modulaires ou industrialisables.",
    motsCles: ['startup', 'humanoide', 'open source', 'composants', 'industrialisation'],
    exclusions: ['robotique militaire', 'jouets/grand public sans portee industrielle'],
  },
  {
    id: 'B2',
    titre: "Bornage 2 — World Models IA pour la robotique",
    description:
      "Avancees des modeles d'IA capables de simuler le monde physique pour entrainer des robots : world models, simulation haute-fidelite, donnees synthetiques.",
    motsCles: ['world model', 'simulation', 'physical AI', 'donnees synthetiques', 'apprentissage par renforcement'],
    exclusions: ['LLM generalistes sans lien avec la robotique'],
  },
];

export const outils: Outil[] = [
  {
    nom: 'Feedly',
    type: 'permanent',
    categorie: 'Agregateur RSS',
    url: 'https://feedly.com',
    description:
      "Centralisation des flux RSS des sources specialisees (DeepMind, NVIDIA, Pause Hardware, Infineon...) avec filtrage par mots-cles et tagging.",
    retourExperience:
      "Outil principal : permet de scanner rapidement plusieurs dizaines d'articles par jour et de ne retenir que ceux qui correspondent au bornage.",
  },
  {
    nom: 'Google Alerts',
    type: 'permanent',
    categorie: 'Alertes par mot-cle',
    url: 'https://www.google.fr/alerts',
    description:
      "Alertes email parametrees sur les mots-cles cles (humanoid robot, world model, Optimus, Cosmos...) pour ne rien manquer en dehors des flux RSS.",
    retourExperience:
      "Complementaire de Feedly : capte les annonces presse et les publications hors blogs RSS.",
  },
  {
    nom: 'Perplexity',
    type: 'permanent',
    categorie: 'Moteur de recherche IA',
    url: 'https://www.perplexity.ai/',
    description:
      "Recherche assistee par IA pour croiser rapidement plusieurs sources, obtenir des pistes documentees et verifier la pertinence d'une actualite avant de l'integrer a la veille.",
    retourExperience:
      "Utile pour gagner du temps sur la phase de qualification : je l'utilise comme point de depart, puis je verifie les sources primaires avant de retenir une news.",
  },
  {
    nom: 'OpenFlux',
    type: 'mensuel',
    categorie: 'Agregateur de veille perso',
    url: 'https://openflux.erwancodes.me/',
    description:
      "Mon propre agregateur RSS deploye sur Astro, mis a jour automatiquement chaque jour via GitHub Actions.",
    retourExperience:
      "Permet de structurer ma veille avec mes propres categories et un design epure. Bon test grandeur nature pour mon flux Bornage 1.",
    moisTeste: 'mars 2026',
  },
  {
    nom: 'Inoreader',
    type: 'mensuel',
    categorie: 'Agregateur RSS avance',
    url: 'https://www.inoreader.com',
    description:
      "Agregateur concurrent de Feedly avec regles de filtrage avancees et detection de doublons.",
    retourExperience:
      "Plus puissant que Feedly sur le filtrage, mais ergonomie moins immediate. Conserve pour les recherches multi-sources.",
    moisTeste: 'avril 2026',
  },
];

export const misesEnOeuvre: MiseEnOeuvre[] = [];

export const articles: Article[] = [
  {
    slug: 'tesla-optimus-gen3-production-masse',
    title: 'Tesla Optimus Gen3 : Production de masse & integration industrielle',
    date: '2026-02-02',
    tag: 'Humanoide',
    bornage: 'Bornage 1 — Startups robotique & open source humanoide',
    bornageId: 'B1',
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
    bornageId: 'B2',
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
    bornageId: 'B1',
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
    bornageId: 'B2',
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
  {
    slug: 'robotis-ai-sapiens-k0-open-source-humanoide',
    title: 'ROBOTIS AI Sapiens K0 : un humanoide open source pour la recherche',
    date: '2026-04-21',
    tag: 'Open source',
    bornage: 'Bornage 1 â€” Startups robotique & open source humanoide',
    bornageId: 'B1',
    summary: "ROBOTIS a presente AI Sapiens K0, un humanoide open source de recherche livre avec fichiers CAD, nomenclature materielle, code source et assets de simulation pour reduire la friction de reconstruction.",
    description: `ROBOTIS a presente AI Sapiens K0, un humanoide de recherche entierement open source. La plateforme met a disposition les fichiers CAD, la nomenclature materielle, le code source et les assets de simulation afin de permettre aux chercheurs de reconstruire plus rapidement une base robotique comparable.

Le K0 mesure 1,3 metre, pese 34 kg et dispose de 23 degres de liberte. Il s'appuie sur les actionneurs Dynamixel-Q de ROBOTIS, concus pour offrir une meilleure backdrivability, une faible impedance et un controle plus fin du couple, des proprietes importantes pour la marche dynamique et les interactions physiques.

L'interet pour ma veille est double : la plateforme renforce l'ecosysteme humanoide ouvert, tout en proposant une base reproductible pour entrainer et comparer des approches de Physical AI via NVIDIA Isaac Sim, l'apprentissage par renforcement et l'imitation learning.`,
    source: 'https://www.humanoidsdaily.com/news/robotis-enters-the-open-source-humanoid-arena-with-ai-sapiens-k0-platform',
    sourceLabel: 'Humanoids Daily',
    pdf: '/pdfs/news_avril_5_robotis_ai_sapiens_k0.pdf',
    keyPoints: [
      { aspect: 'Acteur', detail: 'ROBOTIS' },
      { aspect: 'Plateforme', detail: 'AI Sapiens K0, humanoide open source de recherche' },
      { aspect: 'Ouverture', detail: 'CAD, BoM, code source et assets de simulation publies' },
      { aspect: 'Angle veille', detail: 'Base reproductible pour Physical AI et humanoides ouverts' },
    ],
  },
  {
    slug: 'trois-world-models-3d-robotique-avril-2026',
    title: 'Trois world models 3D deviennent une infrastructure cle pour la robotique',
    date: '2026-04-21',
    tag: 'IA & Robotique',
    bornage: 'Bornage 2 â€” World Models IA : comprendre le monde physique pour la robotique',
    bornageId: 'B2',
    summary: "Un panorama IA d'avril 2026 met en avant trois world models 3D publies par de grands labs, avec des usages directs pour la robotique, la generation d'environnements et les vehicules autonomes.",
    description: `Un panorama IA publie le 21 avril 2026 souligne que trois grands labs ont publie des world models 3D selon trois strategies differentes : Tencent avec HY-World 2.0 en open source commercial, NVIDIA avec Lyra 2.0 sous licence de recherche, et Alibaba avec Happy Oyster via acces anticipe.

Ces systemes cherchent a comprendre l'espace 3D, la physique et la permanence des objets afin de generer des environnements navigables. Pour la robotique, cela peut servir a creer des scenes de simulation, varier les situations d'entrainement et reduire la dependance aux essais physiques couteux.

Cette news est pertinente pour le bornage 2 car elle montre que les world models ne sont plus seulement des demonstrations generatives : ils deviennent une couche d'infrastructure pour les pipelines de robot training, la simulation, les environnements virtuels et les vehicules autonomes.`,
    source: 'https://www.linkedin.com/pulse/ai-daily-briefing-monday-21st-april-2026-david-wright-iyh8e',
    sourceLabel: 'LinkedIn - David Wright',
    pdf: '/pdfs/news_avril_6_world_models_3d_robotique.pdf',
    keyPoints: [
      { aspect: 'Date', detail: '21 avril 2026' },
      { aspect: 'Modeles cites', detail: 'Tencent HY-World 2.0, NVIDIA Lyra 2.0, Alibaba Happy Oyster' },
      { aspect: 'Capacite', detail: 'Generation et comprehension de scenes 3D navigables' },
      { aspect: 'Impact robotique', detail: 'Simulation, entrainement robotique et environnements synthetiques' },
    ],
  },
  {
    slug: 'hugging-face-robot-humanoide-open-source',
    title: 'Hugging Face Robot : une plateforme humanoide bipede open source',
    date: '2026-05-31',
    tag: 'Open source',
    bornage: 'Bornage 1 - Startups robotique & open source humanoide',
    bornageId: 'B1',
    summary: "La veille robotique de l'INRS mentionne Hugging Face Robot comme une plateforme humanoide bipede open source et abordable, pensee pour l'apprentissage de bout en bout.",
    description: `La veille Robots, AMR et exosquelettes de l'INRS, publiee le 8 juin 2026, mentionne Hugging Face Robot comme une plateforme humanoide bipede open source et abordable pour l'apprentissage de bout en bout.

Cette actualite est rattachee au mois de mai car le bulletin INRS compile des signaux recents de l'ecosysteme robotique, dont l'ouverture de plateformes humanoides accessibles pour la recherche, le prototypage et l'entrainement de comportements robotiques.

L'interet pour ma veille est clair : Hugging Face, deja central dans l'IA open source, se positionne aussi sur la robotique physique. Une plateforme humanoide ouverte peut reduire les barrieres d'entree pour les chercheurs, les etudiants et les startups qui veulent tester des modeles d'apprentissage robotique sans repartir de zero.`,
    source: 'https://portaildocumentaire.inrs.fr/blog-view/60/veille-robots-amr-et-exosquelettes/2189/bulletin-de-veille-robots-amr-et-exosquelettes-8-juin-2026',
    sourceLabel: 'INRS - Veille Robots, AMR et exosquelettes',
    pdf: '/pdfs/news_mai_7_hugging_face_robot_humanoide_open_source.pdf',
    keyPoints: [
      { aspect: 'Acteur', detail: 'Hugging Face' },
      { aspect: 'Plateforme', detail: 'Robot humanoide bipede open source' },
      { aspect: 'Objectif', detail: "Apprentissage robotique de bout en bout" },
      { aspect: 'Angle veille', detail: 'Accessibilite, open source et prototypage humanoide' },
    ],
  },
  {
    slug: 'cap-digital-demains-world-models-robotique',
    title: 'Cap Digital DEMAIN(S) : les World Models pour comprendre et simuler le monde',
    date: '2026-05-28',
    tag: 'IA & Robotique',
    bornage: 'Bornage 2 - World Models IA : comprendre le monde physique pour la robotique',
    bornageId: 'B2',
    summary: "Cap Digital consacre une edition DEMAIN(S) aux World Models, presentes comme des IA capables de predire des etats du monde, simuler des situations et raisonner dans des environnements dynamiques.",
    description: `Cap Digital consacre son edition DEMAIN(S) du 28 mai 2026 aux World Models. La publication explique que ces modeles cherchent a predire des etats du monde, simuler des situations, anticiper ce qui va se passer et raisonner dans des environnements dynamiques.

La source relie directement ces capacites a des secteurs comme la robotique, l'industrie ou la sante. Elle met aussi en avant plusieurs briques techniques importantes : architectures JEPA, modelisation temporelle, simulation physique, environnements 3D, multimodalite native et apprentissage par interaction.

Pour ma veille, cette news montre pourquoi les World Models deviennent une brique importante de la robotique : ils peuvent aider un robot a anticiper une trajectoire, comprendre une interaction physique et prendre de meilleures decisions dans un environnement reel ou simule.`,
    source: 'https://www.capdigital.com/decouvrez-notre-nouvelle-edition-de-demains-dediee-aux-world-models/',
    sourceLabel: 'Cap Digital',
    pdf: '/pdfs/news_mai_8_cap_digital_world_models_robotique.pdf',
    keyPoints: [
      { aspect: 'Evenement', detail: 'DEMAIN(S) - les World Models, 28 mai 2026' },
      { aspect: 'Capacite', detail: 'Predire des etats du monde et simuler des situations' },
      { aspect: 'Briques', detail: 'Simulation physique, environnements 3D, multimodalite et interaction' },
      { aspect: 'Impact robotique', detail: 'Anticipation de trajectoires, interactions physiques et decision en environnement dynamique' },
    ],
  },
  {
    slug: 'figure-ai-humanoide-usines-maisons',
    title: 'Figure AI : un humanoide generaliste pour les usines et les maisons',
    date: '2026-06-30',
    tag: 'Humanoide',
    bornage: 'Bornage 1 - Startups robotique & open source humanoide',
    bornageId: 'B1',
    summary: "Robot Magazine analyse la trajectoire de Figure AI, startup valorisee 39 milliards de dollars, qui veut industrialiser des robots humanoides capables d'agir dans les usines, la logistique puis les environnements domestiques.",
    description: `Robot Magazine revient sur la progression de Figure AI, fondee en 2022 par Brett Adcock, et sur son ambition de placer des robots humanoides generalistes dans les usines, les entrepots puis, a terme, dans les maisons. L'entreprise illustre la bascule de la robotique humanoide vers une logique industrielle : levees de fonds massives, pilotes chez BMW et construction d'une usine dediee a la production de robots.

L'article met en avant Figure 02 comme premier deploiement industriel significatif, avec des tests prolonges dans l'usine BMW de Spartanburg, puis Figure 03 comme generation pensee pour des usages plus larges. La partie IA repose sur Helix, un modele Vision-Language-Action embarque qui transforme les images et les consignes en commandes motrices sans pipeline robotique classique.

Pour ma veille, cette news est importante car elle montre qu'une startup humanoide ne se limite plus a la demonstration : elle doit aussi prouver sa capacite a produire, collecter des donnees terrain et reduire les couts. La prudence reste necessaire, car la valorisation repose encore beaucoup sur le potentiel et les deploiements massifs ne sont pas encore confirmes.`,
    source: 'https://www.robot-magazine.fr/la-startup-qui-veut-mettre-un-humanoide-dans-chaque-usine-et-peut-etre-dans-chaque-maison/?utm_source=rss&utm_medium=rss&utm_campaign=la-startup-qui-veut-mettre-un-humanoide-dans-chaque-usine-et-peut-etre-dans-chaque-maison',
    sourceLabel: 'Robot Magazine',
    pdf: '/pdfs/news_juin_9_figure_ai_humanoide_usines_maisons.pdf',
    keyPoints: [
      { aspect: 'Acteur', detail: 'Figure AI, startup americaine fondee en 2022' },
      { aspect: 'Robot', detail: 'Figure 02 pour les pilotes industriels, Figure 03 pour des usages plus polyvalents' },
      { aspect: 'IA', detail: 'Helix, modele Vision-Language-Action embarque' },
      { aspect: 'Angle veille', detail: 'Passage du prototype humanoide a une logique de production industrielle' },
    ],
  },
  {
    slug: 'vivatech-2026-robots-humanoides-realite-industrielle',
    title: 'VivaTech 2026 : les robots humanoides deviennent une realite industrielle',
    date: '2026-06-18',
    tag: 'Humanoide',
    bornage: 'Bornage 1 - Startups robotique & open source humanoide',
    bornageId: 'B1',
    summary: "A VivaTech 2026, les demonstrations de robots humanoides ont confirme la montee en maturite de l'Embodied AI, avec des cas d'usage plus concrets pour l'industrie, la logistique et la maintenance.",
    description: `Robot Magazine presente VivaTech 2026 comme une edition charniere pour la robotique humanoide. Les demonstrations observees les 17 et 18 juin a Paris montrent des robots capables de marcher, manipuler des objets, interagir avec des humains et viser des taches professionnelles concretes.

L'article insiste sur l'Embodied AI : l'IA ne reste plus seulement dans les logiciels, elle s'incarne dans des machines capables d'agir dans le monde physique. Des plateformes comme KANGAROO de PAL Robotics illustrent la volonte europeenne de rester presente dans cette course, avec une approche tournee vers les usages industriels, logistiques et scientifiques.

Pour ma veille, cette actualite confirme que le sujet humanoide arrive dans une phase de maturite plus economique : les entreprises ne cherchent plus seulement a impressionner, mais a demontrer un retour sur investissement face a la penurie de main-d'oeuvre, aux taches repetitives et aux enjeux de souverainete industrielle.`,
    source: 'https://www.robot-magazine.fr/vivatech-2026-lannee-ou-les-robots-humanoides-sont-devenus-une-realite-industrielle/?utm_source=rss&utm_medium=rss&utm_campaign=vivatech-2026-lannee-ou-les-robots-humanoides-sont-devenus-une-realite-industrielle',
    sourceLabel: 'Robot Magazine',
    pdf: '/pdfs/news_juin_10_vivatech_2026_robots_humanoides.pdf',
    keyPoints: [
      { aspect: 'Evenement', detail: 'VivaTech 2026, Paris, 17 et 18 juin' },
      { aspect: 'Tendance', detail: 'L Embodied AI rapproche IA et action physique' },
      { aspect: 'Exemple', detail: 'KANGAROO de PAL Robotics comme vitrine europeenne' },
      { aspect: 'Angle veille', detail: 'Humanoides orientes industrie, logistique, maintenance et ROI' },
    ],
  },
  {
    slug: 'alia-humanoid-open-source-developpement-juillet-2026',
    title: 'Alia Humanoid : un humanoide open source en developpement ouvert',
    date: '2026-07-18',
    tag: 'Open source',
    bornage: 'Bornage 1 — Startups robotique & open source humanoide',
    bornageId: 'B1',
    summary: "Alia Humanoid documente un nouveau jalon de son humanoide open source : la boucle de controle de la cheville a ete validee sur banc a 625 Hz, avec des ameliorations du suivi des articulations et du demarrage a chaud.",
    description: `Alia Humanoid documente publiquement un nouveau jalon de son humanoide open source. La boucle de controle de la cheville a ete validee sur banc a 625 Hz, avec des ameliorations du suivi des articulations, du demarrage a chaud et de la securite du mouvement.

Le projet publie aussi une note technique sur la reconstruction deterministe des offsets au demarrage et fait evoluer le logiciel vers une licence GPLv3. La feuille de route prevoit une ouverture progressive des composants mecaniques, des STL aux futures sources CAD.

Pour ma veille, ce projet montre comment une plateforme humanoide peut avancer par iterations materielles et logicielles partagees, avec des limites de validation clairement distinguees entre simulation et materiel.`,
    source: 'https://github.com/aliahumanoid/alia-humanoid-core',
    sourceLabel: 'Alia Humanoid - GitHub',
    pdf: '/pdfs/news_juillet_11_alia_humanoid_open_source.pdf',
    keyPoints: [
      { aspect: 'Projet', detail: 'Alia Humanoid, robot humanoide a actionnement par tendons' },
      { aspect: 'Avancee', detail: 'Boucle de controle de cheville validee a 625 Hz sur banc' },
      { aspect: 'Ouverture', detail: 'Firmware, documentation materielle et STL publics' },
      { aspect: 'Angle veille', detail: 'Reproductibilite et developpement open source d une plateforme humanoide' },
    ],
  },
  {
    slug: 'xiaomi-robotics-u0-world-model-juillet-2026',
    title: 'Xiaomi-Robotics-U0 : un World Model pour les robots',
    date: '2026-07-13',
    tag: 'IA & Robotique',
    bornage: 'Bornage 2 — World Models IA : comprendre le monde physique pour la robotique',
    bornageId: 'B2',
    summary: "Xiaomi presente Xiaomi-Robotics-U0, un modele de monde autoregressif de 38 milliards de parametres capable de generer des scenes robotiques multi-vues, des transferts d embodiment et des videos d interaction.",
    description: `Xiaomi presente Xiaomi-Robotics-U0, un modele de monde autoregressif de 38 milliards de parametres entraine pour l intelligence incarnee. Le modele relie generation d images, generation de scenes robotiques multi-vues, transfert d embodiment et generation de videos robotiques.

Le modele peut produire des observations robotiques physiquement plausibles et predire des interactions futures a partir d une image, d une consigne et d une action. Xiaomi met egalement en avant une acceleration FlashAR+ destinee a rendre la generation plus exploitable.

Pour ma veille, U0 illustre l usage des world models comme moteurs de donnees synthetiques pour diversifier l entrainement des politiques robotiques et ameliorer leur robustesse sur des taches de manipulation.`,
    source: 'https://robotics.xiaomi.com/xiaomi-robotics-u0.html',
    sourceLabel: 'Xiaomi Robotics',
    pdf: '/pdfs/news_juillet_12_xiaomi_robotics_u0_world_model.pdf',
    keyPoints: [
      { aspect: 'Modele', detail: 'Xiaomi-Robotics-U0, world foundation model de 38 milliards de parametres' },
      { aspect: 'Capacites', detail: 'Scenes robotiques multi-vues, transfert d embodiment et videos d interaction' },
      { aspect: 'Architecture', detail: 'Modele multimodal autoregressif avec acceleration FlashAR+' },
      { aspect: 'Angle veille', detail: 'Generation de donnees synthetiques pour l entrainement robotique' },
    ],
  },
  {
    slug: 'nvidia-world-action-models-manipulation-robotique-aout-2026',
    title: 'NVIDIA : les World Action Models pour la manipulation robotique',
    date: '2026-08-04',
    tag: 'IA & Robotique',
    bornage: 'Bornage 2 — World Models IA : comprendre le monde physique pour la robotique',
    bornageId: 'B2',
    summary: "NVIDIA explique comment les World Action Models associent un modele video du monde a une politique robotique pour predire l evolution d une scene lorsqu une action est executee.",
    description: `NVIDIA explique comment les World Action Models (WAM) peuvent associer un modele video du monde a une politique robotique. Au lieu de seulement reconnaitre une scene, le systeme cherche a predire son evolution lorsqu une action est executee.

Cette approche apporte un a priori physique aux politiques de manipulation : le robot peut evaluer les consequences probables d un mouvement avant de l appliquer. NVIDIA presente Cosmos 3, modele de monde ouvert, comme une base pour construire ces systemes specialises.

Pour ma veille, le world model devient une brique directement reliee au controle et a la planification, et non plus uniquement un outil de generation de videos ou de simulations.`,
    source: 'https://developer.nvidia.com/blog/beyond-vlas-how-world-action-models-reshape-robot-manipulation/',
    sourceLabel: 'NVIDIA Developer Blog',
    pdf: '/pdfs/news_aout_13_nvidia_world_action_models_robotique.pdf',
    keyPoints: [
      { aspect: 'Concept', detail: 'World Action Model, modele de monde couple a une politique d action' },
      { aspect: 'Capacite', detail: 'Prediction de l evolution d une scene conditionnee par une action' },
      { aspect: 'Plateforme', detail: 'NVIDIA Cosmos 3 comme base ouverte pour la Physical AI' },
      { aspect: 'Angle veille', detail: 'Passage des world models vers la manipulation et le controle robotique' },
    ],
  },
  {
    slug: 'xpeng-iron-financement-robotique-humanoide-aout-2026',
    title: 'XPENG Robotics leve plus de 900 millions de dollars',
    date: '2026-08-24',
    tag: 'Humanoide',
    bornage: 'Bornage 1 — Startups robotique & open source humanoide',
    bornageId: 'B1',
    summary: "XPENG annonce une levee de plus de 900 millions de dollars pour accelerer la production de ses robots humanoides et les iterations de ses modeles de Physical AI.",
    description: `XPENG annonce une levee de plus de 900 millions de dollars pour son activite robotique, valorisee a plus de 6,3 milliards de dollars. Ce financement doit accelerer la production de robots humanoides et les iterations de ses modeles de Physical AI.

Le robot humanoide XPENG IRON est developpe comme une plateforme generaliste : il combine une architecture mecanique integree, 76 degres de liberte et une informatique embarquee fondee sur trois puces Turing AI. XPENG vise une production de masse d ici la fin de 2026.

Pour ma veille, cette annonce montre que l industrialisation des humanoides depend autant du financement, de la fabrication et de la qualite industrielle que des performances de l IA embarquee.`,
    source: 'https://www.xpeng.com/pressroom/news/01a03797fccda01e0de68a02a256006a',
    sourceLabel: 'XPENG - communique officiel',
    pdf: '/pdfs/news_aout_14_xpeng_iron_financement_robotique.pdf',
    keyPoints: [
      { aspect: 'Acteur', detail: 'XPENG Robotics, entreprise de Physical AI et de robotique humanoide' },
      { aspect: 'Financement', detail: 'Plus de 900 millions de dollars, valorisation superieure a 6,3 milliards' },
      { aspect: 'Robot', detail: 'XPENG IRON, plateforme generaliste de 76 degres de liberte' },
      { aspect: 'Angle veille', detail: 'Passage de la R&D humanoide a la production et au deploiement commercial' },
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
