export const siteContent = {
  brand: {
    name: "Async Agency",
    tagline: "Automation & AI Systems",
    description:
      "Nous construisons des systemes automatises qui transforment le chaos en clarte et font gagner du temps a votre business.",
  },

  home: {
    hero: {
      title: "Async Agency",
      subtitle: "Automation & AI Systems",
      description:
        "Nous construisons des systemes automatises qui transforment le chaos en clarte et font gagner du temps a votre business.",
      ctaPrimary: { label: "Decouvrir nos services", href: "/services" },
      ctaSecondary: { label: "Comment ca marche ?", href: "/technology" },
    },
    pillars: [
      {
        title: "Workflows Intelligents",
        description:
          "Automatisation des taches repetitives et orchestration multi-outils pour eliminer les operations manuelles.",
        features: [
          "Automatisation des taches repetitives",
          "Orchestration multi-outils",
        ],
        icon: "workflow",
      },
      {
        title: "Agents IA Specialises",
        description:
          "Assistants autonomes par fonction qui executent, surveillent et optimisent vos operations 24h/24.",
        features: [
          "Assistants autonomes par fonction",
          "Monitoring & execution 24/7",
        ],
        icon: "bot",
      },
      {
        title: "Systemes & Operations",
        description:
          "Dashboards, analytics et process documentes pour une vision claire et une scalabilite reelle.",
        features: [
          "Dashboards & analytics",
          "Process documentes & scalables",
        ],
        icon: "system",
      },
    ],
    stats: [
      { value: "120+", label: "Heures economisees / mois (client type)" },
      { value: "50+", label: "Process standardises" },
      { value: "30+", label: "Integrations supportees" },
    ],
  },

  brandPage: {
    problem: {
      title: "Le probleme que nous resolvons",
      items: [
        "Taches manuelles chronophages qui grignottent vos journees",
        "Processus non documentes, dependants de personnes cles",
        "Croissance limitee par le temps disponible",
        "Chaos organisationnel qui freine la prise de decision",
      ],
    },
    approach: {
      title: "Notre approche",
      items: [
        "Transformer les taches en systemes reproductibles",
        "Documenter les process pour les rendre transmissibles",
        "Automatiser tout ce qui peut l'etre",
        "Monitorer et ameliorer en continu",
      ],
    },
    methodology: {
      title: "Notre methodologie",
      steps: [
        {
          number: 1,
          title: "Audit & Cartographie",
          description:
            "Analyse complete de vos taches actuelles, identification des goulots d'etranglement et priorisation par retour sur investissement.",
          details: [
            "Analyse des taches actuelles",
            "Identification des goulots",
            "Priorisation ROI",
          ],
        },
        {
          number: 2,
          title: "Design du Systeme",
          description:
            "Conception de l'architecture workflow, choix des outils adaptes et plan d'integration detaille.",
          details: [
            "Architecture workflow",
            "Choix des outils",
            "Plan d'integration",
          ],
        },
        {
          number: 3,
          title: "Implementation & Automatisation",
          description:
            "Setup technique, configuration des agents IA, tests et validation avant mise en production.",
          details: [
            "Setup technique",
            "Configuration agents IA",
            "Tests & validation",
          ],
        },
        {
          number: 4,
          title: "Monitoring & Optimisation",
          description:
            "Mise en place de dashboards de suivi, alertes automatiques et iterations continues.",
          details: [
            "Dashboards de suivi",
            "Alertes automatiques",
            "Iterations continues",
          ],
        },
      ],
    },
    values: [
      {
        title: "Clarte",
        tagline: "Systems over chaos",
        description:
          "Chaque systeme que nous construisons transforme la complexite en process lisibles et actionnables.",
      },
      {
        title: "Fiabilite",
        tagline: "Process documentes & testes",
        description:
          "Nos automatisations sont testees, documentees et conpues pour fonctionner sans surveillance constante.",
      },
      {
        title: "Evolution",
        tagline: "Amelioration continue",
        description:
          "Un bon systeme n'est jamais fini. Nous iterons, mesurons et optimisons en permanence.",
      },
    ],
  },

  technology: {
    agentExplanation: {
      title: "Qu'est-ce qu'un Agent IA ?",
      definition:
        "Un agent IA est un assistant numerique specialise qui execute une tache precise de maniere autonome. Il suit des regles definies, traite des donnees et prend des decisions simples sans intervention humaine.",
      example: {
        name: 'Agent "Content Reviewer"',
        steps: [
          "Recoit un texte a analyser",
          "Verifie le ton, la grammaire, le respect des guidelines",
          "Approuve OU suggere des corrections",
          "Log l'activite dans un dashboard",
        ],
      },
      comparison: {
        advantages: [
          "Disponible 24/7",
          "0 erreur de process",
          "Scalable instantanement",
        ],
        limitations: [
          "Pas de creativite emotionnelle",
          "Necessite supervision initiale",
          "Limites aux regles definies",
        ],
      },
    },
    workflowExplanation: {
      title: "Qu'est-ce qu'un Workflow ?",
      definition:
        "Une suite d'etapes automatisees qui s'enchainent selon des regles definies. Comme une recette de cuisine, mais pour vos operations business.",
      example: {
        name: "Pipeline de publication",
        steps: [
          { step: "Trigger", detail: "Nouveau fichier dans Google Drive" },
          { step: "Action", detail: "Extraire texte + metadonnees" },
          { step: "Condition", detail: "Si > 500 mots -> envoyer a review" },
          { step: "Action", detail: "Notifier equipe sur Slack" },
          { step: "Action", detail: "Planifier publication si approuve" },
          { step: "Action", detail: "Logger dans dashboard" },
        ],
      },
    },
    stack: [
      {
        category: "Orchestration",
        tools: ["n8n", "Make", "Zapier"],
        description: "Outils pour connecter et automatiser vos applications entre elles.",
      },
      {
        category: "Modeles IA",
        tools: ["Claude", "GPT-4", "Modeles specialises"],
        description: "Intelligence artificielle pour comprendre, generer et decider.",
      },
      {
        category: "Donnees",
        tools: ["Airtable", "Google Sheets", "PostgreSQL"],
        description: "Stockage et organisation de vos donnees business.",
      },
      {
        category: "Monitoring",
        tools: ["Dashboards custom", "Alertes", "Logs"],
        description: "Suivi en temps reel de vos systemes automatises.",
      },
    ],
    security: [
      "Logs complets de toutes les actions",
      "Kill switch sur chaque agent",
      "Validation humaine sur actions critiques",
      "Respect RGPD & conditions des plateformes",
      "Rate limiting intelligent",
      "Fallback automatique en cas d'erreur",
    ],
  },

  vision: {
    phases: [
      {
        number: 1,
        title: "Fondations",
        period: "Mois 1-6",
        objectives: [
          "Systemes internes operationnels",
          "3-5 premiers clients pilotes",
          "Process documentes & testes",
          "Feedback loop etabli",
        ],
        metrics: [
          "Temps economise client (heures/mois)",
          "Fiabilite systemes (uptime %)",
          "Satisfaction client (NPS)",
        ],
      },
      {
        number: 2,
        title: "Standardisation",
        period: "Mois 6-18",
        objectives: [
          "Offres packagees & reproductibles",
          "15-20 clients actifs",
          "Templates de workflows",
          "Cas d'usage documentes",
        ],
        metrics: [
          "Time-to-value (jours setup)",
          "Retention clients (%)",
          "Process automatises (#)",
        ],
      },
      {
        number: 3,
        title: "Scalabilite",
        period: "Mois 18+",
        objectives: [
          "Plateforme self-service",
          "Agents IA en catalogue",
          "Integrations standardisees",
          "Communaute d'utilisateurs",
        ],
        metrics: [
          "ARR (Annual Recurring Revenue)",
          "Churn rate",
          "Expansion revenue",
        ],
      },
    ],
    businessModel: {
      segments: ["PME digitales", "Agences marketing", "E-commerce", "SaaS B2B"],
      proposition: "Temps gagne + scalabilite + fiabilite",
      channels: ["Vente directe", "Partenariats", "Contenu & SEO"],
      revenue: ["Setup fees", "Retainers mensuels", "Support & maintenance"],
      resources: ["Expertise technique", "Templates & workflows", "IP proprietary"],
    },
    financials: [
      { phase: "Phase 1", goal: "Rentabilite operationnelle" },
      { phase: "Phase 2", goal: "Croissance maitrisee" },
      { phase: "Phase 3", goal: "Scalabilite" },
    ],
  },

  footer: {
    links: [
      { label: "Accueil", href: "/" },
      { label: "La Marque", href: "/brand" },
      { label: "Projets", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "Technologie", href: "/technology" },
      { label: "Vision", href: "/vision" },
    ],
    contact: {
      email: "contact@async-agency.com",
    },
  },

  nav: [
    { label: "Accueil", href: "/" },
    { label: "La Marque", href: "/brand" },
    { label: "Projets", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Technologie", href: "/technology" },
    { label: "Vision", href: "/vision" },
  ],
};
