import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article";
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

const maxWidthStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[90rem]",
};

export function Container({
  as: Tag = "div",
  maxWidth = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto px-4 sm:px-8 lg:px-12",
        maxWidthStyles[maxWidth],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
