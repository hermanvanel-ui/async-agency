export interface ProjectStep {
  label: string;
  type: "input" | "agent" | "workflow" | "output" | "condition";
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  steps: ProjectStep[];
  benefits: string[];
}

export const projects: Project[] = [
  {
    id: "content-pipeline",
    title: "Content Pipeline System",
    description:
      "Systeme complet de production de contenu, de la recherche a la publication, entierement orchestre par des agents IA.",
    steps: [
      { label: "Brief + Guidelines", type: "input", detail: "Le client fournit ses directives" },
      { label: "Agent: Research", type: "agent", detail: "Collecte d'informations et veille" },
      { label: "Agent: Creation", type: "agent", detail: "Generation de contenu adapte" },
      { label: "Agent: Review", type: "agent", detail: "Validation qualite et ton" },
      { label: "Workflow: Publishing", type: "workflow", detail: "Planification multi-plateforme" },
      { label: "Dashboard Analytics", type: "output", detail: "Suivi des performances" },
    ],
    benefits: [
      "80% de temps gagne sur la production",
      "Coherence de ton garantie",
      "Scalable sans effort supplementaire",
    ],
  },
  {
    id: "multi-account",
    title: "Multi-Account Operations",
    description:
      "Gestion centralisee de plusieurs comptes et plateformes avec publication coordonnee et analytics unifies.",
    steps: [
      { label: "Content Calendar + Brand Guidelines", type: "input", detail: "Planning et regles de marque" },
      { label: "Agent: Scheduler", type: "agent", detail: "Planification optimale par plateforme" },
      { label: "Agent: Distributor", type: "agent", detail: "Publication multi-plateforme synchronisee" },
      { label: "Agent: Monitor", type: "agent", detail: "Suivi engagement et analytics" },
      { label: "Dashboard Centralise", type: "output", detail: "Vue unifiee + rapports automatiques" },
    ],
    benefits: [
      "Gestion unifiee de N comptes",
      "0 erreur de publication",
      "Rapports automatiques hebdomadaires",
    ],
  },
  {
    id: "lead-qualification",
    title: "Lead Qualification System",
    description:
      "Pipeline automatise de qualification et routage des leads entrants, du premier contact au suivi CRM.",
    steps: [
      { label: "Signaux entrants (forms, emails, DMs)", type: "input", detail: "Points de contact multiples" },
      { label: "Agent: Qualifier", type: "agent", detail: "Scoring & segmentation automatique" },
      { label: "Workflow: Routing", type: "workflow", detail: "Distribution vers la bonne equipe" },
      { label: "Agent: Follow-up", type: "agent", detail: "Relances automatiques personnalisees" },
      { label: "CRM enrichi + Conversion Tracking", type: "output", detail: "Suivi complet du pipeline" },
    ],
    benefits: [
      "Reponse en moins de 5 minutes",
      "Scoring objectif et coherent",
      "Aucun lead perdu ou oublie",
    ],
  },
  {
    id: "monitoring-alerting",
    title: "Monitoring & Alerting",
    description:
      "Systeme de surveillance intelligent qui detecte les anomalies, les opportunites et declenche des alertes contextuelles.",
    steps: [
      { label: "Sources: APIs, webhooks, donnees", type: "input", detail: "Flux de donnees multiples" },
      { label: "Agent: Analyzer", type: "agent", detail: "Detection de patterns et anomalies" },
      { label: "Workflow: Alerts", type: "workflow", detail: "Notifications intelligentes et filtrees" },
      { label: "Actions recommandees", type: "output", detail: "Suggestions actionables" },
    ],
    benefits: [
      "Detection proactive des problemes",
      "Alertes filtrees (pas de bruit)",
      "Historique complet pour analyse",
    ],
  },
];
