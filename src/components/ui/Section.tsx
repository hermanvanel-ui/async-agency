import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gray?: boolean;
}

export function Section({ children, className, id, gray }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        gray && "bg-gray-50",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}
