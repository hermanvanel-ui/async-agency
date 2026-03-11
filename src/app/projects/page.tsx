import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/Motion";
import { DiagramBlock } from "@/components/sections/DiagramBlock";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Nos Projets",
  description:
    "Exemples concrets de systèmes automatisés construits par Async Agency.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp><SectionLabel>Cas concrets</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
              Nos Projets
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-text-dim leading-relaxed">
              Async Agency fonctionne comme un laboratoire de systèmes.
              Voici des exemples concrets de ce que nous construisons.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* Projects */}
      {projects.map((project, index) => (
        <Section key={project.id}>
          {index > 0 && (
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent -mt-20 mb-20 md:-mt-28 md:mb-28" />
          )}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Info */}
            <FadeUp>
              <div>
                <Badge variant="accent" className="mb-3">
                  Projet {index + 1}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                  {project.title}
                </h2>
                <p className="text-text-dim leading-relaxed mb-6">
                  {project.description}
                </p>

                <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-3">
                  Bénéfices mesurables
                </p>
                <ul className="space-y-2">
                  {project.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-dim">
                      <span className="text-green text-xs">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Diagram */}
            <FadeUp delay={0.2}>
              <Card className="lg:sticky lg:top-24">
                <p className="font-mono text-[0.65rem] font-bold text-text-muted tracking-widest uppercase mb-4 text-center">
                  Architecture du système
                </p>
                <DiagramBlock steps={project.steps} />
              </Card>
            </FadeUp>
          </div>
        </Section>
      ))}
    </>
  );
}
