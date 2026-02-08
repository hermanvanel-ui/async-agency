"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useI18n } from "@/i18n/context";
import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";

const FloatingLogosScene = dynamic(
  () => import("@/components/three/FloatingLogos").then((m) => m.FloatingLogosScene),
  { ssr: false }
);

const categoryColors = [
  "from-[#10B981] to-[#06B6D4]",
  "from-[#F97316] to-[#EAB308]",
  "from-[#0066FF] to-[#8B5CF6]",
  "from-[#EC4899] to-[#8B5CF6]",
];

const featureIcons = [
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>,
];

export function Technology() {
  const { t } = useI18n();

  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTag>{t.tech.tag}</SectionTag>
        <SectionTitle
          title={t.tech.title}
          highlight={t.tech.titleHighlight}
          subtitle={t.tech.subtitle}
        />

        {/* 3D Floating Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <FloatingLogosScene />
        </motion.div>

        {/* Tech Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-16">
          {t.tech.categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-xl p-5"
            >
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColors[index]}`} />
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, ti) => (
                  <span
                    key={ti}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.tech.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 text-[#3388FF] flex items-center justify-center mx-auto mb-4">
                {featureIcons[index]}
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
