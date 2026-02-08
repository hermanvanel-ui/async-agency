import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "green";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium",
        variant === "default" && "bg-gray-100 text-gray-700",
        variant === "accent" && "bg-blue-50 text-blue-700",
        variant === "green" && "bg-green-50 text-green-700",
        className
      )}
    >
      {children}
    </span>
  );
}
