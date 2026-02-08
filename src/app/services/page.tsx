import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { services, faq } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Offres",
  description:
    "Trois offres d'automatisation adaptees a votre maturite : Workflow Setup, AI Agents Pack, Complete Operations System.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services & Offres
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Trois offres pour trois niveaux de maturite.
            Choisissez celle qui correspond a vos besoins actuels.
          </p>
        </div>
      </Section>

      {/* Service Plans */}
      <Section gray>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} highlighted={service.highlighted}>
              {service.highlighted && (
                <Badge variant="accent" className="mb-4">Recommande</Badge>
              )}
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {service.name}
              </h2>
              <p className="text-sm text-gray-400 mb-1">
                Pour : {service.target}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverables */}
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Livrables
              </h3>
              <ul className="space-y-2 mb-6">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="text-xs text-gray-400">Delai</div>
                  <div className="text-sm font-medium text-gray-900">{service.timeline}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Tarif</div>
                  <div className="text-sm font-medium text-gray-900">{service.price}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Questions frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <Card key={index}>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {item.question}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">
            Une question specifique ? Un besoin particulier ?
          </p>
          <Button href="mailto:contact@async-agency.com">
            Nous contacter
          </Button>
        </div>
      </Section>
    </>
  );
}
