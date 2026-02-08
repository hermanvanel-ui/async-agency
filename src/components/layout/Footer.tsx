import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-black flex items-center justify-center text-white text-xs font-bold">
                a.
              </div>
              <span className="font-semibold text-gray-900">Async Agency</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Automation & AI Systems.
              <br />
              Systemes automatises pour votre croissance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Navigation</h4>
            <div className="flex flex-col gap-2">
              {siteContent.footer.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact</h4>
            <p className="text-sm text-gray-500">
              {siteContent.footer.contact.email}
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Reponse sous 24h.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Async Agency. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
}
