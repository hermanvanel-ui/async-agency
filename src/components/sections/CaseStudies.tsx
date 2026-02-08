"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CaseStudies() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  return (
    <section id="cases" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag>{t.cases.tag}</SectionTag>
        <SectionTitle title={t.cases.title} highlight={t.cases.titleHighlight} />

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {t.cases.items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === index
                  ? "bg-[#0066FF] text-white glow-primary"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>

        {/* Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-8 md:p-10"
          >
            {(() => {
              const item = t.cases.items[active];
              return (
                <>
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">{item.company}</h3>
                      <span className="text-sm text-[#3388FF]">{item.industry}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Challenge
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#3388FF] mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Solution
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {item.results.map((result, ri) => (
                      <motion.div
                        key={ri}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: ri * 0.1 }}
                        className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                      >
                        <div className="text-xl md:text-2xl font-bold gradient-text">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{result.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="border-l-2 border-[#0066FF] pl-6">
                    <p className="text-gray-300 italic text-sm leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      — CEO, {item.company}
                    </p>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
