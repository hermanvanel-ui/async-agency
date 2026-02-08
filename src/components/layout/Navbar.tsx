"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white text-xs font-bold">
            a.
          </div>
          <span className="font-semibold text-gray-900 hidden sm:block">
            Async Agency
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm rounded-lg transition-colors",
                pathname === item.href
                  ? "text-black font-medium bg-gray-100"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <Link
          href="/services"
          className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Nous contacter
        </Link>

        {/* Burger mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={cn(
              "w-5 h-0.5 bg-gray-900 block transition-transform",
              mobileOpen && "translate-y-[4px] rotate-45"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-gray-900 block transition-opacity",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-gray-900 block transition-transform",
              mobileOpen && "-translate-y-[4px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <div className="flex flex-col gap-1">
            {siteContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-sm rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-black font-medium bg-gray-100"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-black text-white text-center"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
