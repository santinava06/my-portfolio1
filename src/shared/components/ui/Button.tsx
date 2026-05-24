"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0071e3] text-white hover:bg-[#0077ed] active:bg-[#006edb] shadow-sm hover:shadow-md",
  secondary:
    "bg-white/10 dark:bg-white/10 text-white hover:bg-white/20 dark:hover:bg-white/20 active:bg-white/30",
  outline:
    "border border-white/20 text-white/80 hover:text-white hover:border-white/40 active:border-white/60",
  ghost:
    "text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-sm rounded-full gap-1.5",
  md: "h-10 px-6 text-sm rounded-full gap-2",
  lg: "h-12 px-8 text-base rounded-full gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium",
          "transition-all duration-200 ease-out",
          "active:scale-[0.97]",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,113,227,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children && <span>{children}</span>}
        {rightIcon && !isLoading && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
