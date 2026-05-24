import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "glass" | "elevated";
}

const variantStyles = {
  default: "bg-white/5 border border-white/5",
  glass:
    "bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10",
  elevated:
    "bg-white/10 dark:bg-white/10 border border-white/10 shadow-lg shadow-black/5",
};

export function Card({
  className,
  hover = true,
  variant = "default",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 ease-out",
        variantStyles[variant],
        hover && "hover:bg-white/[0.07] active:bg-white/[0.03] hover-lift",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
