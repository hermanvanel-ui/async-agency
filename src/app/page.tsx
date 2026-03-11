import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { siteContent } from "@/data/siteContent";

const pillarConfig = [
  { icon: "⚡", color: "accent" },
  { icon: "🤖", color: "cyan" },
  { icon: "📊", color: "orange" },
] as const;

export default function Home() {
  const { pillars } = siteContent.home;

  return (
    <>
      <Hero />

      {/* Pillars */}
      <Section>
        <div className="text-center mb-12">
          <FadeUp>
            <SectionLabel>Ce que nous construisons</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight leading-tight mb-4">
              Trois piliers pour scaler
              <br />
              vos opérations
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-text-dim text-lg max-w-xl mx-auto">
              Transformer vos opérations manuelles en systèmes fiables, documentés et scalables.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <StaggerItem key={pillar.title}>
              <Card featured={i === 1}>
                <div
                  className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-xl mb-5 border ${
                    i === 0
                      ? "bg-accent-bg border-accent/20"
                      : i === 1
                        ? "bg-cyan-bg border-cyan/20"
                        : "bg-orange-bg border-orange/20"
                  }`}
                >
                  {pillarConfig[i].icon}
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-dim leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2 text-sm text-text-dim"
                    >
                      <span className="text-green text-xs">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
