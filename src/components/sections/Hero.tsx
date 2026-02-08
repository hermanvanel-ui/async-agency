"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useI18n } from "@/i18n/context";

const NeuralNetworkScene = dynamic(
  () => import("@/components/three/NeuralNetwork").then((m) => m.NeuralNetworkScene),
  { ssr: false }
);

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralNetworkScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-transparent to-[#030712] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-[#0066FF]/10 text-[#3388FF] border border-[#0066FF]/20">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            a.SYNC Agency — AI-Powered Automation
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          {t.hero.title}
          <br />
          <span className="gradient-text">{t.hero.titleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#vision"
            className="px-8 py-3.5 rounded-full bg-[#0066FF] text-white font-medium hover:bg-[#0066FF]/90 transition-all hover:scale-105 glow-primary"
          >
            {t.hero.cta}
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full border border-[#374151] text-gray-300 font-medium hover:border-[#0066FF]/50 hover:text-white transition-all"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold gradient-text">85%</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">{t.hero.stat1}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold gradient-text">3x</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">{t.hero.stat2}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold gradient-text">98%</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">{t.hero.stat3}</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#0066FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
