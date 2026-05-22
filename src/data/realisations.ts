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
