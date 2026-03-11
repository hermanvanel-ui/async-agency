import { cn } from "@/lib/utils";

interface DiagramStep {
  label: string;
  type: "input" | "agent" | "workflow" | "output" | "condition";
  detail: string;
}

interface DiagramBlockProps {
  steps: DiagramStep[];
}

const typeStyles: Record<DiagramStep["type"], { bg: string; border: string; label: string; dot: string }> = {
  input:     { bg: "bg-bg-hover",    border: "border-border-h",  label: "Input",     dot: "bg-text-dim" },
  agent:     { bg: "bg-accent-bg",   border: "border-accent/20", label: "Agent",     dot: "bg-accent-l" },
  workflow:  { bg: "bg-orange-bg",   border: "border-orange/20", label: "Workflow",  dot: "bg-orange" },
  output:    { bg: "bg-green-bg",    border: "border-green/20",  label: "Output",    dot: "bg-green" },
  condition: { bg: "bg-cyan-bg",     border: "border-cyan/20",   label: "Condition", dot: "bg-cyan" },
};

export function DiagramBlock({ steps }: DiagramBlockProps) {
  return (
    <div className="flex flex-col items-center gap-0">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={cn(
              "w-full max-w-md rounded-xl border-2 px-5 py-3 text-center",
              typeStyles[step.type].bg,
              typeStyles[step.type].border
            )}
          >
            <div className="flex items-center justify-center gap-1.5 mb-0.5">
              <span className={cn("w-1.5 h-1.5 rounded-full", typeStyles[step.type].dot)} />
              <span className="text-[0.65rem] font-mono font-bold text-text-muted uppercase tracking-wide">
                {typeStyles[step.type].label}
              </span>
            </div>
            <div className="text-sm font-semibold text-text">{step.label}</div>
            <div className="text-xs text-text-dim mt-0.5">{step.detail}</div>
          </div>

          {index < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-4 bg-border" />
              <svg className="w-3 h-3 text-text-muted" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10L6 9z" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
