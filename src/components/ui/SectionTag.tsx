"use client";

import { motion } from "framer-motion";

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mb-4"
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#0066FF]/10 text-[#3388FF] border border-[#0066FF]/20">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
        {children}
      </span>
    </motion.div>
  );
}
