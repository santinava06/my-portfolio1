"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  as?: "div" | "section" | "article";
}

const springEasing = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold, hasAnimated]);

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(16px) scale(0.98)",
        transition: `opacity 0.8s ${springEasing}, transform 0.8s ${springEasing}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
