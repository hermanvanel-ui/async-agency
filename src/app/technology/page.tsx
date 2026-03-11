import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Technologie",
  description:
    "Comprendre nos technologies : agents IA, workflows automatisés, stack technique et sécurité.",
};

export default function TechnologyPage() {
  const { agentExplanation, workflowExplanation, stack, security } =
    siteContent.technology;

  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp><SectionLabel>Under the hood</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
              Technologie
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-text-dim leading-relaxed">
              Comment ça marche, expliqué simplement. Pas de jargon inutile, juste les concepts qui comptent.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* Agent IA */}
      <Section>
        <div className="max-w-[900px] mx-auto">
          <FadeUp><SectionLabel>Concept clé</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight mb-4">
              {agentExplanation.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-text-dim leading-relaxed mb-8 max-w-[600px]">
              {agentExplanation.definition}
            </p>
          </FadeUp>

          {/* Example flow */}
          <FadeUp delay={0.3}>
            <Card className="mb-8">
              <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-5">
                Exemple : {agentExplanation.example.name}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {agentExplanation.example.steps.map((step, i) => (
                  <div key={i} className="contents">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-bg-hover border border-border text-sm font-medium">
                      <span className="w-6 h-6 rounded-md bg-accent-bg text-accent-l flex items-center justify-center font-mono text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-text">{step}</span>
                    </div>
                    {i < agentExplanation.example.steps.length - 1 && (
                      <span className="text-text-muted text-xs hidden sm:block">→</span>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </FadeUp>

          {/* Comparison */}
          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            <StaggerItem>
              <Card className="border-l-[3px] border-l-green">
                <h3 className="text-sm font-bold text-green mb-4 flex items-center gap-2">
                  ✓ Avantages vs. humain
                </h3>
                {agentExplanation.comparison.advantages.map((a, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm text-text-dim py-1.5">
                    <Badge variant="green">✓</Badge>
                    {a}
                  </p>
                ))}
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-l-[3px] border-l-text-muted">
                <h3 className="text-sm font-bold text-text-dim mb-4 flex items-center gap-2">
                  ⓘ Limites à connaître
                </h3>
                {agentExplanation.comparison.limitations.map((l, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm text-text-dim py-1.5">
                    <span className="text-text-muted text-xs">✕</span>
                    {l}
                  </p>
                ))}
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* Stack */}
      <Section>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <FadeUp><SectionLabel>Outils</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
                Stack technique
              </h2>
              <p className="text-text-dim mt-2">Les outils que nous utilisons, et pourquoi.</p>
            </FadeUp>
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {stack.map((item) => (
              <StaggerItem key={item.category}>
                <Card>
                  <h3 className="font-bold tracking-tight mb-1">{item.category}</h3>
                  <p className="text-xs text-text-muted mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-sm font-medium bg-bg-hover border border-border text-text"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Security */}
      <Section>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <FadeUp><SectionLabel>Sécurité</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
                Sécurité & Conformité
              </h2>
              <p className="text-text-dim mt-2">La fiabilité n&apos;est pas optionnelle.</p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Card>
              <div className="grid sm:grid-cols-2 gap-1">
                {security.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2">
                    <span className="text-sm mt-0.5">🛡️</span>
                    <span className="text-sm text-text-dim">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
