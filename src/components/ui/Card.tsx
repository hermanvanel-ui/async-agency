import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function Card({ children, className, highlighted }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 md:p-8 transition-colors",
        highlighted
          ? "border-black bg-white shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300",
        className
      )}
    >
      {children}
    </div>
  );
}
