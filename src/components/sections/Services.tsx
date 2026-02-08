"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons: Record<string, React.ReactNode> = {
  social: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m10 2V2M5 8h14M5 8a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2M5 8h14M9 16h.01M12 16h.01M15 16h.01M9 12h.01M12 12h.01M15 12h.01" />
    </svg>
  ),
  bot: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  workflow: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  analytics: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

const gradients = [
  "from-[#0066FF] to-[#06B6D4]",
  "from-[#8B5CF6] to-[#EC4899]",
  "from-[#F97316] to-[#EAB308]",
  "from-[#10B981] to-[#06B6D4]",
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag>{t.services.tag}</SectionTag>
        <SectionTitle title={t.services.title} highlight={t.services.titleHighlight} />

        <div className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient border top */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-5 text-white`}>
                {icons[service.icon]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                {service.desc}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 text-[#0066FF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover glow */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity blur-3xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
