import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/siteContent";

export function Hero() {
  const { hero } = siteContent.home;

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          Automation & AI Systems
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
          <Button href={hero.ctaSecondary.href} variant="secondary">
            {hero.ctaSecondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
