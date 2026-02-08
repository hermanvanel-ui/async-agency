"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-2xl md:text-3xl font-bold gradient-text">{value}</div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </motion.div>
  );
}

export function Vision() {
  const { t } = useI18n();

  return (
    <section id="vision" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionTag>{t.vision.tag}</SectionTag>
        <SectionTitle title={t.vision.title} highlight={t.vision.titleHighlight} />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-orange-500/50" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-300">{t.vision.problem.title}</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">{t.vision.problem.desc}</p>
            <div className="grid grid-cols-3 gap-4">
              {t.vision.problem.stats.map((stat, i) => (
                <StatCard key={i} value={stat.value} label={stat.label} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066FF]/50 to-[#06B6D4]/50" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#3388FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3388FF]">{t.vision.solution.title}</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">{t.vision.solution.desc}</p>
            <div className="grid grid-cols-3 gap-4">
              {t.vision.solution.stats.map((stat, i) => (
                <StatCard key={i} value={stat.value} label={stat.label} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Arrow between */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8 w-12 h-12 items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center glow-primary">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
