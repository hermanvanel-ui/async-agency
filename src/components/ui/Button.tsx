import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-[10px] transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-to-r from-accent to-[#8B5CF6] text-white shadow-[0_4px_20px_rgba(108,92,231,0.3)] hover:shadow-[0_4px_30px_rgba(108,92,231,0.5)] hover:-translate-y-0.5",
        variant === "ghost" &&
          "border border-border text-text hover:border-accent hover:text-accent-l hover:bg-accent-bg",
        className
      )}
    >
      {children}
    </Link>
  );
}
