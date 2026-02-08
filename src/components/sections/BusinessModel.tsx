"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";

const canvasIcons = {
  segments: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  value: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  channels: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  revenue: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

const canvasColors = [
  { bg: "bg-[#0066FF]/5", border: "border-[#0066FF]/20", text: "text-[#3388FF]", icon: "bg-[#0066FF]/10" },
  { bg: "bg-[#8B5CF6]/5", border: "border-[#8B5CF6]/20", text: "text-[#A78BFA]", icon: "bg-[#8B5CF6]/10" },
  { bg: "bg-[#06B6D4]/5", border: "border-[#06B6D4]/20", text: "text-[#22D3EE]", icon: "bg-[#06B6D4]/10" },
  { bg: "bg-[#10B981]/5", border: "border-[#10B981]/20", text: "text-[#34D399]", icon: "bg-[#10B981]/10" },
];

export function BusinessModel() {
  const { t } = useI18n();

  const canvasData = [
    { key: "segments" as const, ...t.business.canvas.segments },
    { key: "value" as const, ...t.business.canvas.value },
    { key: "channels" as const, ...t.business.canvas.channels },
    { key: "revenue" as const, ...t.business.canvas.revenue },
  ];

  return (
    <section id="business" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag>{t.business.tag}</SectionTag>
        <SectionTitle title={t.business.title} highlight={t.business.titleHighlight} />

        {/* Business Canvas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {canvasData.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-6 border ${canvasColors[index].bg} ${canvasColors[index].border} group cursor-default`}
            >
              <div className={`w-10 h-10 rounded-xl ${canvasColors[index].icon} flex items-center justify-center ${canvasColors[index].text} mb-4`}>
                {canvasIcons[item.key]}
              </div>
              <h4 className={`text-sm font-semibold ${canvasColors[index].text} mb-3`}>
                {item.title}
              </h4>
              <ul className="space-y-2">
                {item.items.map((line, li) => (
                  <li key={li} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${canvasColors[index].text.replace("text-", "bg-")}`} />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Roadmap */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          {t.business.roadmap.title}
        </motion.h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-[#0066FF] via-[#8B5CF6] to-[#06B6D4] hidden md:block" />

          <div className="grid gap-8 md:gap-12">
            {t.business.roadmap.phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-4 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass rounded-xl p-6 inline-block">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#0066FF] bg-[#0066FF]/10 px-2 py-0.5 rounded-full">
                        {phase.phase}
                      </span>
                      <span className="text-xs text-gray-500">{phase.period}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{phase.title}</h4>
                    <ul className="space-y-1">
                      {phase.items.map((item, ii) => (
                        <li key={ii} className="text-sm text-gray-400 flex items-center gap-2">
                          <svg className="w-3 h-3 text-[#0066FF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] shrink-0 glow-primary" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
