import { Card } from "@/components/ui/Card";

interface Feature {
  title: string;
  description: string;
  features?: string[];
  icon: React.ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridClass =
    columns === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className={gridClass}>
      {features.map((feature, index) => (
        <Card key={index}>
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4 text-gray-700">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {feature.description}
          </p>
          {feature.features && (
            <ul className="mt-4 space-y-1.5">
              {feature.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </div>
  );
}
