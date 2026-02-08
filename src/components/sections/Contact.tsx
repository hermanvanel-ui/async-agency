"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contact() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionTag>{t.contact.tag}</SectionTag>
        <SectionTitle
          title={t.contact.title}
          highlight={t.contact.titleHighlight}
          subtitle={t.contact.subtitle}
        />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block">{t.contact.form.name}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm focus:outline-none focus:border-[#0066FF]/50 transition-colors placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block">{t.contact.form.email}</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm focus:outline-none focus:border-[#0066FF]/50 transition-colors placeholder-gray-600"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block">{t.contact.form.company}</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm focus:outline-none focus:border-[#0066FF]/50 transition-colors placeholder-gray-600"
                placeholder="Company Inc."
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block">{t.contact.form.message}</label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm focus:outline-none focus:border-[#0066FF]/50 transition-colors resize-none placeholder-gray-600"
                placeholder="..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {submitted ? "Sent!" : t.contact.form.submit}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <div className="glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#3388FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <p className="font-medium text-sm">{t.contact.info.email}</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 mb-1">Demo</p>
              <p className="font-medium text-sm">{t.contact.info.demo}</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 mb-1">Response</p>
              <p className="font-medium text-sm">{t.contact.info.response}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
