import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Steps } from "@/components/sections/Steps";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "La Marque",
  description:
    "Decouvrez l'approche Async Agency : transformer les taches manuelles en systemes automatises fiables et scalables.",
};

export default function BrandPage() {
  const { problem, approach, methodology, values } = siteContent.brandPage;

  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            La Marque
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Qui nous sommes, pourquoi nous existons, et comment nous travaillons.
          </p>
        </div>
      </Section>

      {/* Problem / Solution */}
      <Section gray>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{problem.title}</h2>
            </div>
            <ul className="space-y-3">
              {problem.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Approach */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{approach.title}</h2>
            </div>
            <ul className="space-y-3">
              {approach.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Methodology */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {methodology.title}
          </h2>
          <p className="text-gray-500">
            Un process eprouve en quatre etapes pour transformer vos operations.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Steps steps={methodology.steps} />
        </div>
      </Section>

      {/* Values */}
      <Section gray>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Nos valeurs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {value.title}
              </h3>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                {value.tagline}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
