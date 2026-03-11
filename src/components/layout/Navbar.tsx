"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-border">
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-white text-xs font-bold font-mono shadow-[0_0_20px_rgba(108,92,231,0.3)]">
            a.
          </div>
          <span className="font-semibold text-text hidden sm:block tracking-tight">
            Async Agency
          </span>
          <span className="text-text-muted text-[0.65rem] font-mono hidden lg:block">
            // systems
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-[0.8rem] font-medium rounded-lg transition-all duration-200",
                pathname === item.href
                  ? "text-accent-l bg-accent-bg"
                  : "text-text-dim hover:text-text hover:bg-bg-hover"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <Link
          href="/services"
          className="hidden md:inline-flex px-5 py-2 text-[0.8rem] font-semibold rounded-lg bg-gradient-to-r from-accent to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(108,92,231,0.2)] hover:shadow-[0_0_30px_rgba(108,92,231,0.4)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Nous contacter →
        </Link>

        {/* Burger mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={cn(
              "w-5 h-0.5 bg-text block transition-transform duration-200",
              mobileOpen && "translate-y-[4px] rotate-45"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-text block transition-opacity duration-200",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-text block transition-transform duration-200",
              mobileOpen && "-translate-y-[4px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-card border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {siteContent.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-3 py-2.5 text-sm rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-accent-l bg-accent-bg"
                      : "text-text-dim hover:text-text"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-accent to-[#8B5CF6] text-white text-center"
              >
                Nous contacter →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
