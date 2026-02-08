import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-colors",
        variant === "primary" && "bg-black text-white hover:bg-gray-800",
        variant === "secondary" && "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400",
        className
      )}
    >
      {children}
    </Link>
  );
}
