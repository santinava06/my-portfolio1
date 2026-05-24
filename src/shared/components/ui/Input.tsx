"use client";

import { forwardRef, type InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const hasValue = typeof props.value === "string" && props.value.length > 0;
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="space-y-1.5">
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            className={cn(
              "peer w-full h-12 px-4 pt-3",
              "bg-white/5 dark:bg-white/5",
              "border rounded-xl text-base text-white",
              "placeholder:text-transparent",
              "transition-all duration-200 ease-out",
              "focus:outline-none",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              error
                ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-white/10 focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20",
              className,
            )}
            placeholder={label || props.placeholder}
            {...props}
          />
          {label && (
            <label
              htmlFor={inputId}
              className={cn(
                "absolute left-4 transition-all duration-200 ease-out pointer-events-none",
                "text-gray-400",
                focused || hasValue
                  ? "top-1.5 text-xs"
                  : "top-3.5 text-base",
                error ? "text-red-400" : "",
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <p className="text-red-400 text-xs px-1 animate-reveal-fast">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
