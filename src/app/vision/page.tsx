import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Vision & Business Model",
  description:
    "Trajectoire realiste d'Async Agency : fondations, standardisation, scalabilite. Business model et objectifs financiers.",
};

export default function VisionPage() {
  const { phases, businessModel, financials } = siteContent.vision;

  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vision & Trajectoire
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Une feuille de route realiste, construite etape par etape.
            Pas de promesses creuses, des objectifs mesurables.
          </p>
        </div>
      </Section>

      {/* Phases */}
      <Section gray>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Roadmap
          </h2>
          <p className="text-gray-500">
            Trois phases pour construire une entreprise solide.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {phases.map((phase) => (
            <Card key={phase.number}>
              <div className="flex items-start gap-5">
                {/* Phase number */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-lg font-bold">
                  {phase.number}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {phase.title}
                    </h3>
                    <Badge>{phase.period}</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    {/* Objectives */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                        Objectifs
                      </h4>
                      <ul className="space-y-2">
                        {phase.objectives.map((obj, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                        Metriques cles
                      </h4>
                      <ul className="space-y-2">
                        {phase.metrics.map((metric, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Business Model Canvas */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Business Model
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Segments clients
              </h3>
              <ul className="space-y-1.5">
                {businessModel.segments.map((s, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Proposition de valeur
              </h3>
              <p className="text-sm text-gray-600">{businessModel.proposition}</p>
            </Card>

            <Card>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Canaux
              </h3>
              <ul className="space-y-1.5">
                {businessModel.channels.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Sources de revenus
              </h3>
              <ul className="space-y-1.5">
                {businessModel.revenue.map((r, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="sm:col-span-2">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Ressources cles
              </h3>
              <div className="flex flex-wrap gap-2">
                {businessModel.resources.map((r, i) => (
                  <Badge key={i}>{r}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Financial Objectives */}
      <Section gray>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Objectifs financiers
            </h2>
            <p className="text-gray-500">
              Une approche prudente et realiste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {financials.map((item) => (
              <Card key={item.phase}>
                <div className="text-center">
                  <Badge variant="accent" className="mb-3">{item.phase}</Badge>
                  <p className="text-base font-semibold text-gray-900">
                    {item.goal}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
