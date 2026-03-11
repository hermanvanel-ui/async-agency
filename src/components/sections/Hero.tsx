"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/siteContent";

export function Hero() {
  const { hero, stats } = siteContent.home;

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-accent opacity-[0.12] blur-[120px] -top-[200px] -left-[100px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-cyan opacity-[0.10] blur-[120px] -bottom-[100px] -right-[50px]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-red opacity-[0.06] blur-[100px] top-1/2 left-[60%]"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(108,92,231,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(108,92,231,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-1 pr-4 py-1 rounded-full border border-border bg-bg-card/80 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_var(--green)] animate-pulse" />
          <span className="text-xs font-medium text-text-dim font-mono">
            Automation & AI Systems
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] mb-6"
        >
          On transforme le
          <br />
          <span className="gradient-text">chaos en systèmes.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-text-dim leading-relaxed max-w-[580px] mx-auto mb-10"
        >
          {hero.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label} →
          </Button>
          <Button href={hero.ctaSecondary.href} variant="ghost">
            {hero.ctaSecondary.label}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center mt-16 pt-12 border-t border-border"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div
                className={`text-3xl md:text-4xl font-extrabold tracking-tight font-mono ${
                  i === 0 ? "text-accent-l" : i === 1 ? "text-cyan" : "text-green"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
