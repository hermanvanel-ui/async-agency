"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Market() {
  const { t } = useI18n();

  return (
    <section id="market" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag>{t.market.tag}</SectionTag>
        <SectionTitle title={t.market.title} highlight={t.market.titleHighlight} />

        {/* Market Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {t.market.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass rounded-2xl p-8 text-center group hover:border-[#0066FF]/30 transition-all"
            >
              <AnimatedCounter
                value={stat.value}
                label=""
                className="mb-2"
              />
              <p className="text-sm text-gray-400 mb-3">{stat.label}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {stat.growth}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-4">{t.market.positioning.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            {t.market.positioning.desc}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.market.positioning.advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-300">{adv}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
