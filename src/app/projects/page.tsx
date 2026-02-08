import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { DiagramBlock } from "@/components/sections/DiagramBlock";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Nos Projets",
  description:
    "Exemples concrets de systemes automatises construits par Async Agency : content pipeline, multi-account operations, lead qualification et monitoring.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Projets
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Async Agency fonctionne comme un laboratoire de systemes.
            Voici des exemples concrets de ce que nous construisons.
          </p>
        </div>
      </Section>

      {/* Projects */}
      {projects.map((project, index) => (
        <Section key={project.id} gray={index % 2 === 0}>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Info */}
            <div>
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 mb-3">
                Projet {index + 1}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Benefits */}
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Benefices mesurables
              </h3>
              <ul className="space-y-2">
                {project.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagram */}
            <Card className="lg:sticky lg:top-24">
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4 text-center">
                Architecture du systeme
              </h3>
              <DiagramBlock steps={project.steps} />
            </Card>
          </div>
        </Section>
      ))}
    </>
  );
}
