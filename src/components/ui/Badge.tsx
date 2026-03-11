import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "green" | "cyan" | "orange";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold font-mono",
        variant === "default" && "bg-bg-hover text-text-dim border border-border",
        variant === "accent" && "bg-accent-bg text-accent-l border border-accent/20",
        variant === "green" && "bg-green-bg text-green border border-green/20",
        variant === "cyan" && "bg-cyan-bg text-cyan border border-cyan/20",
        variant === "orange" && "bg-orange-bg text-orange border border-orange/20",
        className
      )}
    >
      {children}
    </span>
  );
}
