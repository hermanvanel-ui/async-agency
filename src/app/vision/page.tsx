import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Vision & Business Model",
  description:
    "Trajectoire réaliste d'Async Agency : fondations, standardisation, scalabilité.",
};

const phaseColors = ["accent", "cyan", "green"] as const;
const phaseBadgeVariant = ["accent", "cyan", "green"] as const;

export default function VisionPage() {
  const { phases, businessModel, financials } = siteContent.vision;

  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp><SectionLabel>Stratégie</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
              Vision & Trajectoire
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-text-dim leading-relaxed">
              Une feuille de route réaliste, construite étape par étape.
              Pas de promesses creuses, des objectifs mesurables.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* Roadmap Timeline */}
      <Section>
        <div className="text-center mb-12">
          <FadeUp><SectionLabel>Roadmap</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
              Trois phases pour construire
              <br />
              une entreprise solide
            </h2>
          </FadeUp>
        </div>

        <div className="max-w-[700px] mx-auto relative pl-10 md:pl-12">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-[17px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-cyan to-green rounded-full" />

          {phases.map((phase, i) => (
            <FadeUp key={phase.number} delay={i * 0.15}>
              <div className="relative mb-10 last:mb-0">
                {/* Dot */}
                <div
                  className={`absolute -left-10 md:-left-12 top-1 w-8 h-8 rounded-full bg-bg border-2 flex items-center justify-center font-mono text-xs font-bold z-10 ${
                    i === 0
                      ? "border-accent text-accent-l shadow-[0_0_15px_rgba(108,92,231,0.3)]"
                      : i === 1
                        ? "border-cyan text-cyan shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                        : "border-green text-green shadow-[0_0_15px_rgba(0,230,118,0.3)]"
                  }`}
                >
                  {phase.number}
                </div>

                {/* Header */}
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <h3 className="text-xl font-bold tracking-tight">{phase.title}</h3>
                  <Badge variant={phaseBadgeVariant[i]}>{phase.period}</Badge>
                </div>

                {/* Card content */}
                <Card>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                        Objectifs
                      </p>
                      {phase.objectives.map((obj, oi) => (
                        <p key={oi} className="text-sm text-text-dim py-1 flex items-center gap-2">
                          <span className="text-accent-l text-xs">▸</span>
                          {obj}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                        Métriques clés
                      </p>
                      {phase.metrics.map((metric, mi) => (
                        <p key={mi} className="text-sm text-text-dim py-1 flex items-center gap-2">
                          <span className="text-cyan text-xs">◆</span>
                          {metric}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* Business Model */}
      <Section>
        <div className="text-center mb-12">
          <FadeUp><SectionLabel>Modèle économique</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
              Business Model
            </h2>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          <StaggerItem>
            <Card>
              <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                Segments clients
              </p>
              {businessModel.segments.map((s, i) => (
                <p key={i} className="text-sm text-text-dim py-1 flex items-center gap-2">
                  <span className="w-[5px] h-[5px] rounded-full bg-accent shrink-0" />
                  {s}
                </p>
              ))}
            </Card>
          </StaggerItem>
          <StaggerItem>
            <Card>
              <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                Proposition de valeur
              </p>
              <p className="text-sm text-text-dim leading-relaxed">
                <span className="text-accent-l font-semibold">Temps gagné</span> +{" "}
                <span className="text-cyan font-semibold">scalabilité</span> +{" "}
                <span className="text-green font-semibold">fiabilité</span>
              </p>
              <div className="mt-4">
                <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                  Canaux
                </p>
                {businessModel.channels.map((c, i) => (
                  <p key={i} className="text-sm text-text-dim py-1 flex items-center gap-2">
                    <span className="w-[5px] h-[5px] rounded-full bg-accent shrink-0" />
                    {c}
                  </p>
                ))}
              </div>
            </Card>
          </StaggerItem>
          <StaggerItem>
            <Card>
              <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                Sources de revenus
              </p>
              {businessModel.revenue.map((r, i) => (
                <p key={i} className="text-sm text-text-dim py-1 flex items-center gap-2">
                  <span className={`w-[5px] h-[5px] rounded-full shrink-0 ${
                    i === 0 ? "bg-green" : i === 1 ? "bg-cyan" : "bg-orange"
                  }`} />
                  {r}
                </p>
              ))}
              <div className="mt-4">
                <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                  Ressources clés
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {businessModel.resources.map((r, i) => (
                    <span key={i} className="inline-flex px-2 py-0.5 text-xs font-medium rounded-md bg-bg-hover text-text-dim border border-border">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Financial */}
      <Section>
        <div className="text-center mb-12">
          <FadeUp><SectionLabel>Projections</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
              Objectifs financiers
            </h2>
            <p className="text-text-dim mt-2">Une approche prudente et réaliste.</p>
          </FadeUp>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {financials.map((item, i) => (
            <StaggerItem key={item.phase}>
              <Card featured={i === 1} className="text-center">
                <Badge variant={phaseBadgeVariant[i]} className="mb-3">
                  {item.phase}
                </Badge>
                <p className="text-base font-bold">{item.goal}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
