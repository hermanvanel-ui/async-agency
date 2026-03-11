import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-white text-[0.6rem] font-bold font-mono">
              a.
            </div>
            <span className="font-semibold text-text text-sm">Async Agency</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {siteContent.footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.8rem] text-text-muted hover:text-accent-l transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copy */}
          <p className="text-xs text-text-muted font-mono">
            © {new Date().getFullYear()} Async Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
