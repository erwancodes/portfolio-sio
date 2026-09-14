export interface StageCodeExcerpt {
  projectSlug: string;
  title: string;
  source: string;
  language: string;
  code: string;
}

export interface StageExperience {
  id: string;
  eyebrow: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  missions: string[];
  projectSlugs?: string[];
  codeExcerpts?: StageCodeExcerpt[];
  note?: string;
}

export const stages: StageExperience[] = [
  {
    id: 'premiere-annee',
    eyebrow: '01 · Stage de première année',
    title: 'Développement au service informatique',
    organization: 'Ville des Andelys',
    location: 'Les Andelys, France',
    period: 'Juin — Juillet 2026',
    summary:
      'Une immersion au sein du service informatique de la Ville des Andelys, autour de plusieurs applications métier et de besoins concrets de dématérialisation.',
    missions: [
      'Analyser les besoins des utilisateurs et traduire ces besoins en fonctionnalités.',
      'Développer, tester et améliorer des applications Web internes.',
      'Documenter les choix techniques, les parcours et les règles de gestion.',
    ],
    projectSlugs: [
      'stage-gestion-cles-andelys',
      'stage-gestion-entretiens-professionnels',
      'stage-gestion-budget-andelys',
    ],
    codeExcerpts: [
      {
        projectSlug: 'stage-gestion-cles-andelys',
        title: 'Journaliser une remise ou un retour',
        source: 'Gestion_clés/src/server/keys.server.ts',
        language: 'TypeScript',
        code: `async function recordAudit(client, input) {
  const agent = (input.agent ?? '').trim().slice(0, 120)
    || 'Agent non identifie'

  await client.auditLog.create({
    data: {
      action: input.action,
      entite: input.entite,
      cible: input.cible.slice(0, 200),
      details: input.details?.slice(0, 500) || null,
      agent,
    },
  })
}`,
      },
      {
        projectSlug: 'stage-gestion-entretiens-professionnels',
        title: 'Faire progresser le workflow',
        source: 'Gestion des Entretiens Professionnels/src/Service/WorkflowService.php',
        language: 'PHP',
        code: `public function prochainStatut(Fiche $fiche): ?FicheStatut
{
    $ordre = FicheStatut::ordre();
    $position = $fiche->getStatut()->position();

    for ($i = $position + 1, $n = count($ordre); $i < $n; ++$i) {
        $candidat = $ordre[$i];
        if (FicheStatut::VISA_N3 === $candidat
            && !$fiche->isN3Applicable()) {
            continue;
        }
        return $candidat;
    }

    return null;
}`,
      },
      {
        projectSlug: 'stage-gestion-budget-andelys',
        title: 'Préparer la liste budgétaire',
        source: 'Gestion_Budget_LesAndelys/src/Controller/LigneBudgetaireController.php',
        language: 'PHP',
        code: `$qb = $repo->createQueryBuilder('l')
    ->leftJoin('l.section', 's')->addSelect('s')
    ->leftJoin('l.montants', 'm')->addSelect('m')
    ->orderBy('l.updatedAt', 'DESC');

if ($statut = $request->query->get('statut')) {
    $qb->andWhere('l.statut = :statut')
       ->setParameter('statut', $statut);
}`,
      },
    ],
  },
  {
    id: 'ldlc',
    eyebrow: '02 · Expérience en entreprise',
    title: 'Conseil et maintenance informatique',
    organization: 'LDLC Rouen',
    location: 'Rouen, France',
    period: 'Janvier — Février 2025',
    summary:
      'Une première expérience en magasin informatique, centrée sur l’accompagnement des clients et la préparation de matériels.',
    missions: [
      'Conseiller les clients et présenter des solutions adaptées.',
      'Monter, configurer et dépanner des ordinateurs.',
      'Découvrir les contraintes d’un environnement professionnel orienté service.',
    ],
    note: 'Cette expérience a été réalisée avant mon entrée en BTS SIO.',
  },
];
