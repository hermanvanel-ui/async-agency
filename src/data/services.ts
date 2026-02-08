export interface ServicePlan {
  id: string;
  name: string;
  target: string;
  description: string;
  deliverables: string[];
  timeline: string;
  price: string;
  highlighted: boolean;
}

export const services: ServicePlan[] = [
  {
    id: "workflow-setup",
    name: "Workflow Automation Setup",
    target: "Entrepreneurs, petites equipes (1-5 personnes)",
    description:
      "Mise en place de workflows automatises pour eliminer vos taches repetitives les plus chronophages.",
    deliverables: [
      "1 a 3 workflows automatises",
      "Documentation complete",
      "Formation utilisateur",
      "Support 14 jours post-livraison",
    ],
    timeline: "2-4 semaines",
    price: "Sur devis",
    highlighted: false,
  },
  {
    id: "ai-agents",
    name: "AI Agents Pack",
    target: "Entreprises avec process recurrents",
    description:
      "Deploiement d'agents IA specialises pour automatiser vos operations recurrentes avec monitoring integre.",
    deliverables: [
      "3 a 5 agents IA specialises",
      "Dashboard de monitoring",
      "Documentation technique",
      "Support 30 jours",
    ],
    timeline: "4-8 semaines",
    price: "Sur devis",
    highlighted: true,
  },
  {
    id: "complete-system",
    name: "Complete Operations System",
    target: "Organisations multi-equipes",
    description:
      "Architecture complete integrant agents, workflows et dashboards pour transformer vos operations.",
    deliverables: [
      "Architecture systeme complete",
      "Agents + Workflows + Dashboards",
      "Formation equipe + documentation",
      "Maintenance 90 jours",
    ],
    timeline: "8-12 semaines",
    price: "Sur devis",
    highlighted: false,
  },
];

export const faq = [
  {
    question: "Quels outils utilisez-vous ?",
    answer:
      "Nous travaillons principalement avec n8n, Make et des APIs custom pour l'orchestration, combines avec des modeles IA comme Claude et GPT-4. Le choix final depend de vos besoins, votre stack existante et votre budget.",
  },
  {
    question: "Puis-je garder le controle sur les automatisations ?",
    answer:
      "Absolument. Chaque systeme inclut un dashboard de monitoring, des logs complets et un kill switch. Vous gardez une visibilite totale et pouvez intervenir a tout moment.",
  },
  {
    question: "Que se passe-t-il si un agent echoue ?",
    answer:
      "Tous nos agents sont conpus avec des mecanismes de fallback. En cas d'erreur, l'agent s'arrete proprement, log l'incident et vous envoie une notification. Aucune action critique n'est executee sans validation.",
  },
  {
    question: "Comment mesurez-vous le ROI ?",
    answer:
      "Nous definissons ensemble des KPIs clairs avant le demarrage : temps economise, erreurs evitees, vitesse d'execution. Chaque dashboard inclut ces metriques pour un suivi objectif.",
  },
];
