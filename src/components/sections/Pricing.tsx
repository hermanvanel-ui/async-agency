"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionTag>{t.pricing.tag}</SectionTag>
        <SectionTitle title={t.pricing.title} highlight={t.pricing.titleHighlight} />

        <div className="grid md:grid-cols-3 gap-6">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`rounded-2xl p-8 relative overflow-hidden ${
                plan.popular
                  ? "bg-gradient-to-b from-[#0066FF]/20 to-[#8B5CF6]/10 border-2 border-[#0066FF]/40"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0066FF] to-[#8B5CF6] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                  POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {plan.price.startsWith("S") || plan.price.startsWith("C") ? "" : "€"}
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#0066FF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-medium text-sm transition-all ${
                  plan.popular
                    ? "bg-[#0066FF] text-white hover:bg-[#0066FF]/90 glow-primary"
                    : "border border-[#374151] text-gray-300 hover:border-[#0066FF]/50 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
