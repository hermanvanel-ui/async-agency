import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}

export function Card({ children, className, featured }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[20px] border p-6 md:p-8 transition-all duration-300 overflow-hidden",
        featured
          ? "border-accent/30 bg-gradient-to-br from-bg-card to-accent-bg glow-accent"
          : "border-border bg-bg-card hover:border-border-h hover:shadow-[0_0_40px_rgba(108,92,231,0.08)]",
        className
      )}
    >
      {/* Top gradient line */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-px",
        "bg-gradient-to-r from-transparent via-accent/30 to-transparent",
        featured ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        "transition-opacity duration-300"
      )} />
      {children}
    </div>
  );
}
