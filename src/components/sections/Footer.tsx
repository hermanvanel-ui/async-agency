"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/[0.05] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center font-bold text-sm text-white">
              a.
            </div>
            <div>
              <span className="font-bold">a.<span className="gradient-text">SYNC</span></span>
              <span className="text-xs text-gray-500 ml-2">{t.footer.tagline}</span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            &copy; {new Date().getFullYear()} a.SYNC Agency. {t.footer.rights}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
