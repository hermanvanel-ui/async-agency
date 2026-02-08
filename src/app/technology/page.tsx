import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiagramBlock } from "@/components/sections/DiagramBlock";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Technologie",
  description:
    "Comprendre nos technologies : agents IA, workflows automatises, stack technique et securite. Explique simplement.",
};

export default function TechnologyPage() {
  const { agentExplanation, workflowExplanation, stack, security } =
    siteContent.technology;

  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologie
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Comment ca marche, explique simplement.
            Pas de jargon inutile, juste les concepts qui comptent.
          </p>
        </div>
      </Section>

      {/* Agent Explanation */}
      <Section gray>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {agentExplanation.title}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            {agentExplanation.definition}
          </p>

          {/* Example */}
          <Card className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Exemple concret : {agentExplanation.example.name}
            </h3>
            <div className="space-y-3">
              {agentExplanation.example.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600 pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Avantages vs. humain
              </h3>
              <ul className="space-y-2">
                {agentExplanation.comparison.advantages.map((a, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Badge variant="green">&check;</Badge>
                    {a}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limites a connaitre
              </h3>
              <ul className="space-y-2">
                {agentExplanation.comparison.limitations.map((l, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Badge>&times;</Badge>
                    {l}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Workflow Explanation */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {workflowExplanation.title}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            {workflowExplanation.definition}
          </p>

          <Card>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4 text-center">
              Exemple : {workflowExplanation.example.name}
            </h3>
            <DiagramBlock
              steps={workflowExplanation.example.steps.map((s) => ({
                label: s.step,
                detail: s.detail,
                type:
                  s.step === "Trigger"
                    ? "input"
                    : s.step === "Condition"
                      ? "condition"
                      : s.step.includes("Log")
                        ? "output"
                        : "workflow",
              }))}
            />
          </Card>
        </div>
      </Section>

      {/* Stack */}
      <Section gray>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Stack technique
            </h2>
            <p className="text-gray-500">
              Les outils que nous utilisons, et pourquoi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {stack.map((item) => (
              <Card key={item.category}>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {item.category}
                </h3>
                <p className="text-xs text-gray-400 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Security */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Securite & Conformite
            </h2>
            <p className="text-gray-500">
              La fiabilite n&apos;est pas optionnelle. Voici nos engagements.
            </p>
          </div>

          <Card>
            <div className="grid sm:grid-cols-2 gap-4">
              {security.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
