export type TypeRealisation = 'TP' | 'Stage' | 'RP';

import cybernewsScreen from '../assets/realisations/ap-cybernews/screen.png';

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
    periode: '2026',
    resume:
      'Site Web de veille cybersecurite developpe en PHP/MySQL : consultation de news classees par categorie, fiches detaillees, sources externes et documents PDF associes.',
    sousCompetences: ['B1.1', 'B1.6', 'B3.1', 'B3.3', 'B5.1', 'B5.2'],
    contexte:
      'CyberNews est une realisation d\'atelier professionnel dont l\'objectif est de presenter des actualites importantes en cybersecurite, avec un focus sur les donnees personnelles. Le site sert de support de veille : l\'utilisateur consulte les informations par categorie, ouvre une fiche detaillee et accede aux sources externes ainsi qu\'aux documents PDF conserves dans le projet.\n\nLe dossier du projet contient une application PHP proceduralisee autour de plusieurs fichiers : une page d\'accueil, une page detaillee de news, un menu dynamique, une connexion MySQL, une feuille de style, un logo, un dossier de documents PDF et un dump SQL. La base `esa_cybernewsbd` contient les tables `categories` et `news`, reliees par une cle etrangere, afin d\'organiser les actualites par themes.\n\nLe contenu de veille reference plusieurs cas concrets : fuite de donnees chez Bouygues Telecom, attaques DDoS contre Glitz Paris, cyberattaque des lycees des Hauts-de-France, fuite Inovie Labosud, faille GLPI, Urssaf Pajemploi, CAF, ministere de l\'Interieur, HubEE, sanctions CNIL, KeepCool, ministere des Sports, ANTS et Rockstar Games. Chaque entree stocke un titre, un auteur, une date, un resume, une source Web, un PDF source et une categorie.\n\nUne attention particuliere a ete portee a la securite applicative : validation de l\'identifiant de news avec `FILTER_VALIDATE_INT`, requetes preparees pour charger une fiche, echappement des sorties HTML avec `htmlspecialchars`, ouverture securisee des liens externes avec `rel="noopener noreferrer"` et encodage `utf8mb4` pour la base de donnees. Le menu est genere dynamiquement depuis MySQL, ce qui permet d\'ajouter des categories ou des news sans modifier le HTML.',
    environnementTechno: [
      'PHP 8.2',
      'MySQL 8.3',
      'Apache / environnement local',
      'mysqli',
      'HTML5',
      'CSS3',
      'phpMyAdmin',
      'UTF-8 / utf8mb4',
    ],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: cybernewsScreen.src,
            caption:
              'Capture de la page CyberNews : menu dynamique des categories, fiche detaillee d\'une news, metadonnees, liens source et resume.',
          },
          {
            type: 'code',
            language: 'sql',
            caption: 'Modele de donnees : categories et news avec relation entre les deux tables.',
            content:
              'CREATE TABLE IF NOT EXISTS `categories` (\n  `idCategorie` int NOT NULL AUTO_INCREMENT,\n  `nomCategorie` varchar(38) NOT NULL,\n  PRIMARY KEY (`idCategorie`)\n);\n\nCREATE TABLE IF NOT EXISTS `news` (\n  `idNews` int NOT NULL AUTO_INCREMENT,\n  `titreNews` varchar(255) NOT NULL,\n  `auteurNews` varchar(38) NOT NULL,\n  `dateNews` date NOT NULL,\n  `resumeNews` text NOT NULL,\n  `lienNews` varchar(255) NOT NULL,\n  `pdfNews` varchar(255) NOT NULL,\n  `categoriesNews` int NOT NULL,\n  PRIMARY KEY (`idNews`),\n  KEY `fk_Categorie` (`categoriesNews`)\n);\n\nALTER TABLE `news`\n  ADD CONSTRAINT `fk_Categorie`\n  FOREIGN KEY (`categoriesNews`) REFERENCES `categories` (`idCategorie`);',
          },
          {
            type: 'code',
            language: 'php',
            caption: 'Connexion a MySQL, encodage utf8mb4 et detection des tables attendues.',
            content:
              '$esaConnexion = mysqli_connect("localhost", "root", "", "esa_cybernewsbd");\n\nif (!$esaConnexion) {\n    die("La connexion a la base de donnees a echoue.");\n}\n\nmysqli_set_charset($esaConnexion, "utf8mb4");\n\n$esaTableCategories = esaTrouverNomTable($esaConnexion, "esa_categorie", "categories");\n$esaTableNews = esaTrouverNomTable($esaConnexion, "esa_news", "news");',
          },
          {
            type: 'code',
            language: 'php',
            caption: 'Securisation de la fiche news : validation de l\'ID, requete preparee et echappement HTML.',
            content:
              '$idNews = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);\n\n$requeteNews = mysqli_prepare(\n    $esaConnexion,\n    "SELECT n.idNews, n.titreNews, n.auteurNews, n.dateNews, n.resumeNews, n.lienNews, n.pdfNews, c.nomCategorie\n     FROM {$esaTableNews} AS n\n     INNER JOIN {$esaTableCategories} AS c ON n.categoriesNews = c.idCategorie\n     WHERE n.idNews = ?"\n);\n\nmysqli_stmt_bind_param($requeteNews, "i", $idNews);\n\necho htmlspecialchars($newsCourante[\'titreNews\']);',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'php',
            caption: 'Menu dynamique : categories chargees depuis la base, puis news associees a chaque categorie.',
            content:
              '$requeteCategories = mysqli_query(\n    $esaConnexion,\n    "SELECT idCategorie, nomCategorie FROM {$esaTableCategories} ORDER BY nomCategorie ASC"\n);\n\n$requeteNews = mysqli_prepare(\n    $esaConnexion,\n    "SELECT idNews, titreNews\n     FROM {$esaTableNews}\n     WHERE categoriesNews = ?\n     ORDER BY dateNews DESC"\n);',
          },
          {
            type: 'code',
            language: 'html',
            caption: 'Page d\'accueil : presentation du site et objectif de veille cybersecurite.',
            content:
              '<h2>Presentation du site</h2>\n<p>Ce site a pour objectif de vous presenter les news les plus importantes de ces derniers mois en matiere de cybersecurite.</p>\n<p>Les news presentees traitent plus particulierement de la cybersecurite autour des donnees personnelles.</p>\n<p>Chaque article propose une source externe et une version imprimable pour conserver l\'information.</p>',
          },
        ],
      },
      {
        bloc: 'B3',
        preuves: [
          {
            type: 'code',
            language: 'php',
            caption: 'Acces aux sources et aux documents PDF pour justifier chaque actualite de veille.',
            content:
              '<a href="<?php echo htmlspecialchars($newsCourante[\'lienNews\']); ?>" target="_blank" rel="noopener noreferrer">Consulter la source</a>\n<a href="esa_news_pdf.php?id=<?php echo (int) $newsCourante[\'idNews\']; ?>" target="_blank" rel="noopener noreferrer">Version PDF imprimable</a>\n<a href="<?php echo htmlspecialchars($newsCourante[\'pdfNews\']); ?>" target="_blank" rel="noopener noreferrer">Document source PDF</a>',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Exemples de categories et de sujets presents dans le dump SQL du projet.',
            content:
              'Categories : Fuite de donnees, Attaques DDoS, Faille critique, Cybersecurite.\n\nExemples de news :\n- Fuite de donnees chez Bouygues Telecom\n- Attaques DDoS contre Glitz Paris\n- Cyberattaque sur les lycees des Hauts-France\n- Faille GLPI non patchee, 3 600 organisations francaises compromises\n- Urssaf Pajemploi victime d\'un vol massif de donnees\n- Sanctions CNIL pour manquements de securite\n- Fuite de donnees a l\'ANTS\n- Rockstar Games : fuite massive de 78,6 millions d\'enregistrements internes',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-site-web-astronomie',
    nom: 'TP — Site Web statique Astronomie',
    type: 'TP',
    periode: '2026',
    resume:
      'Site Web statique realise en equipe pour presenter l\'astronomie, les missions spatiales et les exoplanetes sur plusieurs pages responsives.',
    sousCompetences: ['B1.1', 'B3.1', 'B4.1', 'B4.2'],
    contexte:
      'Site pedagogique realise en equipe avec Thomas Sauveur, organise autour du systeme solaire, du Soleil, des galaxies, des exoplanetes, des agences spatiales et des entreprises privees.\n\nLe developpement comprend une arborescence multi-pages, une navigation commune, des ressources graphiques, du contenu editorial et une adaptation aux differentes tailles d\'ecran.',
    environnementTechno: ['HTML5', 'CSS3', 'Responsive design', 'Navigation multi-pages', 'Travail en equipe'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-site-web-astronomie/screen-astronomie.png',
            caption: 'Capture du site Astronomie : accueil, navigation multi-pages et contenu responsive.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Arborescence du site : pages, feuilles de style et ressources graphiques.',
            content:
              'index.html\npages/systeme_solaire.html\npages/exoplanets.html\npages/agences_spatiales.html\nassets/css/styleserwan.css\nassets/images/logo.png',
          },
        ],
      },
      {
        bloc: 'B3',
        preuves: [
          {
            type: 'code',
            language: 'html',
            caption: 'Navigation thematique et contenu accessible avec des textes alternatifs sur les images.',
            content:
              '<nav class="navbar">\n  <a href="pages/systeme_solaire.html">Systeme Solaire</a>\n  <a href="pages/exoplanets.html">Exoplanetes</a>\n</nav>\n\n<img src="assets/images/astronomie.jpg" alt="Astronomie">',
          },
        ],
      },
    ],
  },
  {
    slug: 'stage-gestion-cles-andelys',
    nom: 'Stage — Gestion des cles des Andelys',
    type: 'Stage',
    periode: '2026',
    resume:
      'Application Web interne pour tracer les remises et retours de cles, avec scan de codes, historique, dashboard et parcours mobile.',
    sousCompetences: ['B1.1', 'B1.6', 'B2.3', 'B3.3', 'B4.1', 'B4.2', 'B5.2', 'B5.3'],
    contexte:
      'Le projet repond au besoin de la Mairie des Andelys de fiabiliser la remise de cles aux agents, prestataires et intervenants exterieurs. L\'application remplace un suivi manuel par un parcours de scan ou de saisie, puis conserve la cle, l\'emprunteur, les dates et le retour dans un historique.\n\nUne interface mobile permet de realiser les actions rapides au guichet. Le projet prend aussi en compte la protection des donnees : les informations de l\'emprunteur restent dans les operations d\'emprunt et ne sont pas gerees comme un annuaire de personnes.',
    environnementTechno: [
      'React',
      'TanStack Start',
      'TanStack Router',
      'Prisma',
      'PostgreSQL',
      'Docker',
      'Code-barres / QR',
      'PWA mobile',
    ],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/stage-gestion-cles-andelys/screen-stage-gestion-cles.png',
            caption: 'Capture de la page de présentation de l’application interne de gestion des clés.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Ressources gerees et tracees par l\'application.',
            content:
              'secteurs -> cles -> emprunts\n\nEmprunt : cle, emprunteur, date_emprunt, date_retour, statut\nHistorique conserve apres le retour',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Parcours de traitement d\'une remise et d\'un retour par scan.',
            content:
              'Scan ou saisie manuelle\n  -> resolution de la cle / du trousseau\n  -> verification de la disponibilite\n  -> enregistrement de la remise ou du retour\n  -> mise a jour du dashboard',
          },
          {
            type: 'code',
            language: 'typescript',
            caption: 'Journalisation des opérations — src/server/keys.server.ts (extrait).',
            content: `const agent = (input.agent ?? '').trim().slice(0, 120) || 'Agent non identifie'
await client.auditLog.create({
  data: {
    action: input.action,
    entite: input.entite,
    cible: input.cible.slice(0, 200),
    details: input.details?.slice(0, 500) || null,
    agent,
  },
})`,
          },
        ],
      },
    ],
  },
  {
    slug: 'stage-gestion-entretiens-professionnels',
    nom: 'Stage — Gestion des entretiens professionnels',
    type: 'Stage',
    periode: '2026',
    resume:
      'Application Symfony de dematerialisation des fiches d\'entretien annuel : workflow de signatures, suivi RH, notifications, revision et export PDF.',
    sousCompetences: ['B1.1', 'B1.3', 'B1.6', 'B2.1', 'B2.3', 'B3.3', 'B4.1', 'B4.2', 'B5.2', 'B6.1'],
    contexte:
      'La Mairie des Andelys gerait le circuit des entretiens professionnels sur papier, avec des deplacements entre signataires et peu de tracabilite. Le projet vise a dematerialiser le cycle complet : saisie, verrouillage progressif, signatures, notification, demande de revision et archivage PDF.\n\nLe besoin impose une gestion fine des roles (agent, evaluateur, RH, direction et autorite territoriale), des journaux d\'audit et des regles de conservation compatibles avec un usage administratif.',
    environnementTechno: [
      'PHP 8.3',
      'Symfony 7',
      'Doctrine ORM',
      'PostgreSQL 16',
      'Twig',
      'Symfony Security',
      'Symfony Mailer',
      'DomPDF',
      'Docker Compose',
    ],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/stage-gestion-entretiens-professionnels/screen-stage-entretiens.png',
            caption: 'Capture de l’écran de connexion de l’application de gestion des entretiens professionnels.',
          },
          {
            type: 'image',
            src: '/realisations/stage-gestion-entretiens-professionnels/screen-guide-entretiens.png',
            caption: 'Guide intégré : présentation du fonctionnement et des rôles dans l’application.',
          },
          {
            type: 'image',
            src: '/realisations/stage-gestion-entretiens-professionnels/screen-circuit-signatures.png',
            caption: 'Circuit de signatures : ordre des intervenants et verrouillage progressif des étapes.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Ressources et habilitations prises en compte dans le service.',
            content:
              'Roles : AGENT, EVALUATEUR, RH, ADMIN\nFiche -> signatures -> notification -> archivage PDF\nJournal horodate des actions\nPurge RGPD planifiee',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Workflow bloquant de traitement d\'une fiche.',
            content:
              'Agent -> Evaluateur -> Agent -> N+2 -> N+3 -> DGS -> Maire\n\nChaque etape est debloquee apres validation de la precedente.',
          },
          {
            type: 'code',
            language: 'php',
            caption: 'Rôle de signature associé à chaque étape — src/Service/WorkflowService.php.',
            content: `public function roleSignaturePour(FicheStatut $statut): ?string
{
    return match ($statut) {
        FicheStatut::SAISIE_EVALUATEUR => Signature::ROLE_EVALUATEUR,
        FicheStatut::SIGNATURE_AGENT => Signature::ROLE_AGENT,
        FicheStatut::VISA_N2 => Signature::ROLE_N2,
        FicheStatut::VISA_N3 => Signature::ROLE_N3,
        FicheStatut::VISA_DGS => Signature::ROLE_DGS,
        FicheStatut::VISA_AUTORITE => Signature::ROLE_AUTORITE,
        FicheStatut::NOTIFICATION => Signature::ROLE_NOTIFICATION,
        default => null,
    };
}`,
          },
        ],
      },
    ],
  },
  {
    slug: 'stage-gestion-budget-andelys',
    nom: 'Stage — Gestion budgetaire des Andelys',
    type: 'Stage',
    periode: '2026',
    resume:
      'Application Web interne de preparation, arbitrage et export des budgets par section, exercice et type de depense.',
    sousCompetences: ['B1.1', 'B1.3', 'B2.1', 'B3.3', 'B4.1', 'B4.2', 'B4.3', 'B5.2', 'B6.1'],
    contexte:
      'Le projet centralise les demandes budgetaires des sections de la ville et remplace les tableaux isoles par un cycle partage : saisie, soumission, arbitrage, decision et export. Les responsables travaillent sur l\'exercice principal et peuvent comparer les annees de reference.\n\nLa conception s\'appuie sur un modele de donnees relationnel, des droits par role et un historique des decisions. La documentation du projet decrit egalement le deploiement Symfony/PostgreSQL dans Docker.',
    environnementTechno: [
      'PHP',
      'Symfony',
      'Doctrine ORM',
      'PostgreSQL',
      'Twig',
      'PhpSpreadsheet',
      'Dompdf',
      'Docker Compose',
    ],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/stage-gestion-budget-andelys/screen-stage-budget.png',
            caption: 'Capture de l’écran de connexion de l’application de gestion budgétaire.',
          },
          {
            type: 'image',
            src: '/realisations/stage-gestion-budget-andelys/screen-guide-budget.png',
            caption: 'Guide utilisateur intégré : saisie, arbitrage, cycle de vie des lignes et exports.',
          },
          {
            type: 'image',
            src: '/realisations/stage-gestion-budget-andelys/screen-formulaire-budget.png',
            caption: 'Formulaire vierge de création d’une ligne budgétaire avec contrôle de complétude.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Patrimoine fonctionnel gere : sections, lignes, montants et decisions.',
            content:
              'Utilisateur <-> Section\nSection -> Ligne budgetaire -> Montants par exercice\nLigne budgetaire -> Decision d\'arbitrage\nAcces affine par role et par section',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Cycle de traitement d\'une demande budgetaire.',
            content:
              'Saisie -> Soumission -> Analyse -> Arbitrage -> Validation / Refus / Correction\n\nChaque decision est historisee et peut etre restituee dans les exports.',
          },
          {
            type: 'code',
            language: 'php',
            caption: 'Restriction des exports aux sections autorisées — src/Controller/ExportController.php (extrait).',
            content: `$isGlobal = array_intersect(['ROLE_ADMIN', 'ROLE_DIRECTION_GENERALE', 'ROLE_MAIRE'], $roles) !== [];
if (!$isGlobal) {
    $sectionIds = [];
    foreach ($user->getSections() as $s) {
        $sectionIds[] = $s->getId();
    }
    if ($sectionIds === []) {
        $qb->andWhere('l.creePar = :u')->setParameter('u', $user);
    } else {
        $qb->andWhere('l.section IN (:sids) OR l.creePar = :u')
            ->setParameter('sids', $sectionIds)
            ->setParameter('u', $user);
    }
}`,
          },
        ],
      },
    ],
  },
  {
    slug: 'ap-administration-parc-fog',
    nom: 'AP — Administration de parc avec FOG',
    type: 'TP',
    periode: '2026',
    resume:
      'Mise en place d\'un serveur FOG pour enregistrer des postes, inventorier leur materiel et leurs logiciels, puis preparer le deploiement.',
    sousCompetences: ['B1.1', 'B1.4', 'B2.2', 'B5.2', 'B5.3'],
    contexte:
      'Administration d\'un parc de postes Windows depuis un serveur FOG installe sur Ubuntu : installation du serveur, enregistrement des hotes avec leurs adresses MAC et IP, puis inventaire du materiel, du stockage et des logiciels.\n\nDeploiement de logiciels et d\'images systeme pour reproduire une configuration sur des postes de test.',
    environnementTechno: ['FOG Project', 'Ubuntu Server', 'Windows 10', 'Interface Web', 'Inventaire materiel et logiciel', 'Deploiement d\'image'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/ap-administration-parc-fog/screen-new-host.png',
            caption: 'Capture FOG : enregistrement d\'un nouveau poste avec son nom et son adresse MAC.',
          },
          {
            type: 'image',
            src: '/realisations/ap-administration-parc-fog/screen-all-hosts.png',
            caption: 'Capture FOG : liste des postes inventoriés dans le parc.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Cycle de gestion du parc documente dans les comptes rendus FOG.',
            content:
              'Serveur FOG Ubuntu\n  -> enregistrement d\'un poste (nom, adresse MAC, adresse IP)\n  -> inventaire materiel et logiciel\n  -> deploiement de logiciels ou d\'une image systeme\n  -> verification du poste client',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Mise en service d\'un poste client et controle des resultats.',
            content:
              'Installation du service FOG\nConfiguration du client Windows\nLancement d\'une tache d\'inventaire\nVerification des logiciels detectes et de l\'image deployee',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-gestion-utilisateurs-linux',
    nom: 'TP — Gestion des utilisateurs Linux',
    type: 'TP',
    periode: '2026',
    resume:
      'Creation, modification et suppression d\'utilisateurs et de groupes sous Ubuntu, avec gestion du proprietaire et des permissions de fichiers.',
    sousCompetences: ['B1.3', 'B2.2', 'B5.2'],
    contexte:
      'Le compte rendu du TP met en pratique l\'administration des comptes locaux et des groupes sous Ubuntu. Les manipulations couvrent la creation d\'utilisateurs, l\'affectation a un groupe, le renommage et la suppression, puis la verification dans les fichiers systeme.\n\nLa seconde partie applique ces droits a un fichier : changement de proprietaire et de groupe, lecture des permissions et utilisation de chmod pour limiter les acces.',
    environnementTechno: ['Ubuntu / Linux', 'Shell', 'Utilisateurs et groupes', 'Permissions Unix', 'sudo'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-gestion-utilisateurs-linux/screen-users-linux.png',
            caption: 'Capture du terminal Ubuntu : verification du compte Linux apres sa creation.',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Commandes du compte rendu pour administrer les comptes et les permissions.',
            content:
              'sudo useradd etudiant1\nsudo groupadd formation\nsudo usermod -aG formation etudiant1\nsudo chown etudiant_renomme secret.txt\nsudo chgrp atelier secret.txt\nsudo chmod 750 secret.txt',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'bash',
            caption: 'Verification de l\'identite et des droits effectifs.',
            content:
              'whoami\ngroups etudiant_renomme\nls -l secret.txt\n\nLes tests permettent de controler l\'acces du proprietaire, du groupe et des autres utilisateurs.',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-partage-samba',
    nom: 'TP — Partage de fichiers avec Samba',
    type: 'TP',
    periode: '2026',
    resume:
      'Installation et configuration d\'un serveur Samba sous Ubuntu, avec partages ouverts et partages restreints a des utilisateurs.',
    sousCompetences: ['B1.3', 'B2.2', 'B5.2', 'B5.3'],
    contexte:
      'Mise en place d\'un service de partage de fichiers sur Ubuntu : installation et activation de Samba, configuration de smb.conf et creation de plusieurs espaces avec des regles d\'acces differentes.\n\nTest d\'un partage ouvert et d\'un partage associe a un utilisateur Samba, avec verification des droits d\'acces effectifs.',
    environnementTechno: ['Ubuntu / Linux', 'Samba', 'smb.conf', 'systemctl', 'Droits d\'acces'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-partage-samba/screen-samba-service.png',
            caption: 'Capture du terminal Ubuntu : activation du service Samba avec systemctl.',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Installation du service et preparation des comptes autorises.',
            content:
              'sudo apt install samba\nsudo systemctl enable smbd\nsudo systemctl restart smbd\nsudo adduser smbuser01\nsudo smbpasswd -a smbuser01',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Deux niveaux de partage testes dans le compte rendu.',
            content:
              'Partage simple : acces ouvert\nPartage utilisateur : lecture ou ecriture selon le compte\n\nChaque modification de smb.conf est suivie d\'un redemarrage du service et d\'un test d\'acces.',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-dhcp-windows-server',
    nom: 'TP — Serveur DHCP Windows Server',
    type: 'TP',
    periode: '2026',
    resume:
      'Installation et configuration du role DHCP, creation d\'une etendue, reservation d\'adresse et observation des echanges reseau.',
    sousCompetences: ['B1.1', 'B2.2', 'B5.1', 'B5.2'],
    contexte:
      'Le TP porte sur le deploiement d\'un service DHCP sous Windows Server. La configuration comprend l\'installation du role, la definition d\'une etendue, la reservation d\'une adresse IP et la verification du fonctionnement.\n\nLes journaux DHCP et l\'Observateur d\'evenements sont consultes. Une capture Wireshark des echanges DHCP complete les tests en reliant la configuration du serveur aux paquets observes sur le reseau.',
    environnementTechno: ['Windows Server', 'DHCP', 'Etendue IP', 'Reservations DHCP', 'Observateur d\'evenements', 'Wireshark'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-dhcp-windows-server/screen-dhcp-support.png',
            caption: 'Capture du support de TP : installation, etendue et reservation du serveur DHCP.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Elements de configuration documentes dans le compte rendu.',
            content:
              'Role DHCP Windows Server\nEtendue d\'adresses\nReservation d\'une adresse IP\nJournaux DHCP et Observateur d\'evenements',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Validation du service par observation des echanges.',
            content:
              'Client DHCP\n  -> demande d\'adresse\n  -> proposition du serveur\n  -> attribution\n  -> confirmation\n\nVerification realisee avec les journaux et une capture Wireshark.',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-serveur-iis-windows',
    nom: 'TP — Serveur IIS sous Windows Server',
    type: 'TP',
    periode: '2026',
    resume:
      'Installation et configuration d\'un serveur Web IIS avec reseau, DNS, site, repertoire virtuel et protection d\'un dossier.',
    sousCompetences: ['B1.1', 'B2.2', 'B5.1', 'B5.2'],
    contexte:
      'Ce TP met en œuvre un serveur Web Microsoft IIS dans un environnement Windows Server. Le compte rendu decrit l\'installation du role, la configuration reseau du serveur et du client, la mise en place du DNS puis la creation d\'un site Web.\n\nUn repertoire virtuel et un dossier protege sont ajoutes afin de tester une configuration Web plus complete qu\'une simple page par defaut.',
    environnementTechno: ['Windows Server', 'IIS', 'DNS', 'HTTP', 'Repertoire virtuel', 'Tests client / serveur'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-serveur-iis-windows/screen-iis-role.png',
            caption: 'Capture du compte rendu : role IIS et services Web selectionnes dans Windows Server.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Architecture de test du serveur IIS documentee dans le TP.',
            content:
              'Serveur Windows Server : service IIS + DNS\nClient Windows : poste de test\n\nLe nom du site est resolu par le DNS avant d\'etre teste depuis le client.',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Fonctionnalites IIS configurees et verifiees.',
            content:
              'Installation du role IIS\nCreation du site Web\nAjout du repertoire virtuel /test\nProtection du dossier /secret\nTest depuis le poste client',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-reseau-cisco-packet-tracer',
    nom: 'TP — Premiers pas avec Cisco Packet Tracer',
    type: 'TP',
    periode: '2026',
    resume:
      'Simulation d\'une infrastructure reseau avec Cisco Packet Tracer, adressage des equipements et validation de la communication.',
    sousCompetences: ['B1.1', 'B1.4', 'B2.2', 'B5.1'],
    contexte:
      'Construction d\'une topologie reseau de test dans Cisco Packet Tracer : connexion des equipements, adressage et verification avec les outils de simulation.\n\nModelisation de l\'infrastructure, application des configurations, observation des echanges et correction des erreurs de connectivite.',
    environnementTechno: ['Cisco Packet Tracer', 'TCP/IP', 'Adressage IP', 'Topologie reseau', 'Simulation de paquets'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-reseau-cisco-packet-tracer/screen-packet-tracer.png',
            caption: 'Capture Cisco Packet Tracer : topologie et manipulation guidee d\'un equipement reseau.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Maquette reseau construite dans le simulateur.',
            content:
              'Postes clients -> commutateur -> routeur\n\nAdressage des interfaces et des postes\nConfiguration enregistree dans le fichier Packet Tracer',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Verification de la connectivite dans le mode simulation.',
            content:
              'Configuration\n  -> envoi d\'un paquet de test\n  -> observation du chemin\n  -> verification de la livraison\n  -> correction si l\'echange echoue',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-sql-base-films',
    nom: 'TP — Base de donnees Films en SQL Server',
    type: 'TP',
    periode: '2026',
    resume:
      'Creation d\'une base de donnees de films, definition des relations et exploitation des donnees avec des requetes SQL.',
    sousCompetences: ['B1.1', 'B2.3', 'B5.1'],
    contexte:
      'Creation de la base BDFilms a partir d\'un jeu de donnees de films et d\'artistes. Les tables de genres, artistes, films et distribution sont reliees par des cles primaires et etrangeres.\n\nEcriture de requetes de selection, de jointure, de regroupement et de comptage, puis verification des resultats.',
    environnementTechno: ['SQL Server', 'T-SQL', 'SQL Server Management Studio', 'Modele relationnel', 'Jointures et GROUP BY'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-sql-base-films/screen-sql-model.png',
            caption: 'Capture du sujet SQL : modele relationnel BDFilms avec T_Artiste, T_Film, T_GENRE et T_JOUER.',
          },
          {
            type: 'code',
            language: 'sql',
            caption: 'Schema relationnel du TP BDFilms avec les noms de tables du script.',
            content:
              'CREATE DATABASE BDFilms;\n\nCREATE TABLE T_GENRE (...);\nCREATE TABLE T_Artiste (... ART_ANNEENAISS INTEGER);\nCREATE TABLE T_Film (... FIL_ANNEE INTEGER, GEN_ID INT);\nCREATE TABLE T_JOUER (ART_ID INT, FIL_ID INT, NOMROLE varchar(50));',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'sql',
            caption: 'Exploitation des relations entre films, genres et artistes.',
            content:
              'SELECT f.FIL_TITRE, g.GEN_LIBELLE\nFROM T_Film AS f\nINNER JOIN T_GENRE AS g ON g.GEN_ID = f.GEN_ID;\n\n-- Autres axes du TP : GROUP BY, COUNT et jointures avec T_JOUER',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-chiffrement-fichiers',
    nom: 'TP — Chiffrement de fichiers',
    type: 'TP',
    periode: '2026',
    resume:
      'Mise en pratique d\'une methode de chiffrement de fichiers et verification de la restitution dans un environnement de TP.',
    sousCompetences: ['B1.6', 'B2.2', 'B5.1'],
    contexte:
      'Protection de fichiers par chiffrement : identification du fichier source, application de la procedure et verification de la restitution du fichier initial.\n\nControle de l\'integrite des donnees apres chiffrement et restitution.',
    environnementTechno: ['Windows / Linux selon l\'atelier', 'Chiffrement de fichiers', 'Verification d\'integrite', 'Protection des donnees'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-chiffrement-fichiers/screen-bitlocker.png',
            caption: 'Capture du compte rendu : etat de protection et de chiffrement d\'un volume Windows.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Chaine de traitement documentee dans le TP de chiffrement.',
            content:
              'Fichier source\n  -> application de la procedure de chiffrement\n  -> fichier protege\n  -> procedure de restitution\n  -> verification du contenu obtenu',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Test de controle apres chiffrement et restitution.',
            content:
              'Comparer le fichier restitue au fichier source\nVerifier que le contenu attendu est lisible\nConserver les observations dans le compte rendu',
          },
        ],
      },
    ],
  },
  {
    slug: 'tp-analyse-pdf-malveillant',
    nom: 'TP — Analyse d\'un PDF malveillant en laboratoire',
    type: 'TP',
    periode: '2026',
    resume:
      'Etude encadree d\'un document PDF suspect, identification d\'indicateurs et redaction d\'un compte rendu d\'analyse.',
    sousCompetences: ['B1.6', 'B2.2', 'B5.1'],
    contexte:
      'Analyse d\'un PDF suspect dans un laboratoire pedagogique isole de l\'environnement de production : observation de la structure du document et recherche d\'indicateurs.\n\nTravail sur un echantillon de test sans diffusion du fichier, puis redaction d\'une synthese des constats.',
    environnementTechno: ['Laboratoire de securite', 'Analyse de fichiers PDF', 'Indicateurs de compromission', 'Compte rendu technique'],
    preuves: [
      {
        bloc: 'B1',
        obligatoire: true,
        preuves: [
          {
            type: 'image',
            src: '/realisations/tp-analyse-pdf-malveillant/screen-pdf-analysis.png',
            caption: 'Capture du compte rendu : analyse structurelle et recherche d\'indicateurs dans un PDF suspect.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Demarche d\'analyse appliquee sur un document de test.',
            content:
              'Echantillon PDF de laboratoire\n  -> observation des proprietes et composants\n  -> releve des indicateurs suspects\n  -> qualification du risque\n  -> synthese dans le compte rendu',
          },
        ],
      },
      {
        bloc: 'B2',
        preuves: [
          {
            type: 'code',
            language: 'text',
            caption: 'Validation de l\'analyse par une restitution structuree.',
            content:
              'Contexte et objectif\nObservations techniques\nIndicateurs identifies\nConclusion et precautions\n\nLe fichier suspect reste cantonne a l\'environnement de TP.',
          },
        ],
      },
    ],
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
  {
    slug: 'formatage-disque-windows',
    nom: 'Le Formatage de disque sous Windows',
    type: 'TP',
    resume: 'TP d’administration système consacré à la préparation et au formatage d’un disque sous Windows.',
    sousCompetences: ['B1.1', 'B2.2'],
  },
  {
    slug: 'installation-apache-linux',
    nom: 'Installation du Service Apache sur Linux',
    type: 'TP',
    resume: 'TP d’administration système consacré à l’installation et à la mise en service d’Apache sous Linux.',
    sousCompetences: ['B1.1', 'B5.2'],
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
