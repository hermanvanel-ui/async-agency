interface Step {
  number: number;
  title: string;
  description: string;
  details: string[];
}

interface StepsProps {
  steps: Step[];
}

export function Steps({ steps }: StepsProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.number} className="relative flex gap-6">
            {/* Number circle */}
            <div className="shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold z-10">
              {step.number}
            </div>

            {/* Content */}
            <div className="flex-1 pb-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                {step.description}
              </p>
              <ul className="space-y-1">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
