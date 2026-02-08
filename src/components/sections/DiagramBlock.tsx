import { cn } from "@/lib/utils";

interface DiagramStep {
  label: string;
  type: "input" | "agent" | "workflow" | "output" | "condition";
  detail: string;
}

interface DiagramBlockProps {
  steps: DiagramStep[];
}

const typeStyles: Record<DiagramStep["type"], { bg: string; border: string; label: string }> = {
  input: { bg: "bg-gray-50", border: "border-gray-300", label: "Input" },
  agent: { bg: "bg-blue-50", border: "border-blue-300", label: "Agent" },
  workflow: { bg: "bg-amber-50", border: "border-amber-300", label: "Workflow" },
  output: { bg: "bg-green-50", border: "border-green-300", label: "Output" },
  condition: { bg: "bg-purple-50", border: "border-purple-300", label: "Condition" },
};

export function DiagramBlock({ steps }: DiagramBlockProps) {
  return (
    <div className="flex flex-col items-center gap-0">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Block */}
          <div
            className={cn(
              "w-full max-w-md rounded-lg border-2 px-5 py-3 text-center",
              typeStyles[step.type].bg,
              typeStyles[step.type].border
            )}
          >
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
              {typeStyles[step.type].label}
            </div>
            <div className="text-sm font-semibold text-gray-900">{step.label}</div>
            <div className="text-xs text-gray-500 mt-0.5">{step.detail}</div>
          </div>

          {/* Arrow */}
          {index < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-4 bg-gray-300" />
              <svg className="w-3 h-3 text-gray-400" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10L6 9z" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
