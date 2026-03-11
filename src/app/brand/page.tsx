import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "La Marque",
  description:
    "Découvrez l'approche Async Agency : transformer les tâches manuelles en systèmes automatisés fiables et scalables.",
};

export default function BrandPage() {
  const { problem, approach, methodology, values } = siteContent.brandPage;

  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp><SectionLabel>Notre identité</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
              Qui nous sommes, pourquoi
              <br />
              nous existons.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-text-dim leading-relaxed">
              On ne vend pas du rêve. On construit des systèmes qui marchent.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-6" />

      {/* Problem / Solution */}
      <Section>
        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          <StaggerItem>
            <Card className="border-l-[3px] border-l-red">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">🔴</span>
                {problem.title}
              </h2>
              {problem.items.map((item, i) => (
                <p key={i} className="flex items-start gap-3 text-sm text-text-dim py-2">
                  <span className="w-2 h-2 rounded-full bg-red mt-1.5 shrink-0 shadow-[0_0_8px_rgba(255,107,107,0.3)]" />
                  {item}
                </p>
              ))}
            </Card>
          </StaggerItem>
          <StaggerItem>
            <Card className="border-l-[3px] border-l-green">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">🟢</span>
                {approach.title}
              </h2>
              {approach.items.map((item, i) => (
                <p key={i} className="flex items-start gap-3 text-sm text-text-dim py-2">
                  <span className="w-2 h-2 rounded-full bg-green mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,230,118,0.3)]" />
                  {item}
                </p>
              ))}
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Methodology */}
      <Section>
        <div className="text-center mb-12">
          <FadeUp><SectionLabel>Process</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
              {methodology.title}
            </h2>
            <p className="text-text-dim mt-2">
              Un process éprouvé en quatre étapes pour transformer vos opérations.
            </p>
          </FadeUp>
        </div>

        <div className="max-w-[640px] mx-auto">
          {methodology.steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.1}>
              <div className="flex gap-5 mb-8 last:mb-0">
                <div className="w-11 h-11 rounded-xl shrink-0 bg-gradient-to-br from-accent to-[#8B5CF6] flex items-center justify-center font-mono font-bold text-sm text-white shadow-[0_4px_15px_rgba(108,92,231,0.25)]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight mb-1">{step.title}</h3>
                  <p className="text-sm text-text-dim leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.details.map((d, di) => (
                      <span
                        key={di}
                        className="inline-flex px-2 py-0.5 text-xs font-medium rounded-md bg-bg-hover text-text-dim border border-border"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="text-center mb-12">
          <FadeUp><SectionLabel>ADN</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
              Nos valeurs
            </h2>
          </FadeUp>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <StaggerItem key={value.title}>
              <Card>
                <div className="text-2xl mb-3">
                  {i === 0 ? "💎" : i === 1 ? "🔒" : "🔄"}
                </div>
                <h3 className="text-lg font-bold mb-1">{value.title}</h3>
                <p className="font-mono text-[0.7rem] text-accent-l tracking-wide mb-3">
                  {value.tagline}
                </p>
                <p className="text-sm text-text-dim leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
