import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { services, faq } from "@/data/services";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "Services & Offres",
  description:
    "Trois offres d'automatisation adaptées à votre maturité : Workflow Setup, AI Agents Pack, Complete Operations System.",
};

const serviceIcons = ["⚡", "🤖", "🏗️"];
const serviceColors = ["accent", "cyan", "orange"] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp><SectionLabel>Nos offres</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
              Services & Offres
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-text-dim leading-relaxed">
              Trois offres pour trois niveaux de maturité. Choisissez celle qui correspond à vos besoins actuels.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* Service Plans */}
      <Section className="pt-0">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <StaggerItem key={service.id}>
              <Card featured={service.highlighted} className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-xs font-bold text-text-muted">
                    0{i + 1}
                  </span>
                  {service.highlighted && <Badge variant="accent">Recommandé</Badge>}
                </div>

                <div
                  className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-xl mb-5 border ${
                    i === 0
                      ? "bg-accent-bg border-accent/20"
                      : i === 1
                        ? "bg-cyan-bg border-cyan/20"
                        : "bg-orange-bg border-orange/20"
                  }`}
                >
                  {serviceIcons[i]}
                </div>

                <h2 className="text-xl font-bold tracking-tight mb-1">
                  {service.name}
                </h2>
                <p className="text-xs text-text-muted italic mb-1">
                  Pour : {service.target}
                </p>
                <p className="text-sm text-text-dim leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6 flex-1">
                  <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                    Livrables
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, di) => (
                      <li key={di} className="flex items-center gap-2 text-sm text-text-dim">
                        <span className="text-green text-xs">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div>
                    <p className="font-mono text-[0.6rem] text-text-muted uppercase tracking-wide">Délai</p>
                    <p className="text-sm font-semibold mt-0.5">{service.timeline}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[0.6rem] text-text-muted uppercase tracking-wide">Tarif</p>
                    <p className="text-sm font-semibold mt-0.5">{service.price}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-12">
          <FadeUp><SectionLabel>FAQ</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
              Questions fréquentes
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <div className="max-w-[700px] mx-auto">
            <FaqAccordion items={faq} />
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-text-dim mb-4">
              Une question spécifique ? Un besoin particulier ?
            </p>
            <Button href="mailto:contact@async-agency.com">
              Nous contacter →
            </Button>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
