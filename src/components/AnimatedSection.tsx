"use client";
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "slide-in-up" | "slide-in-down" | "scale-in" | "bounce-in" | "stagger";
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function AnimatedSection({ 
  children, 
  animation = "fade-in", 
  delay = 0, 
  className = "",
  threshold = 0.1 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      const currentRef = ref.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (!isVisible) {
      switch (animation) {
        case "fade-in":
          return `${baseClasses} opacity-0`;
        case "slide-in-left":
          return `${baseClasses} opacity-0 transform -translate-x-full`;
        case "slide-in-right":
          return `${baseClasses} opacity-0 transform translate-x-full`;
        case "slide-in-up":
          return `${baseClasses} opacity-0 transform translate-y-full`;
        case "slide-in-down":
          return `${baseClasses} opacity-0 transform -translate-y-full`;
        case "scale-in":
          return `${baseClasses} opacity-0 transform scale-75`;
        case "bounce-in":
          return `${baseClasses} opacity-0 transform scale-50`;
        case "stagger":
          return `${baseClasses} opacity-0 transform translate-y-8`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    switch (animation) {
      case "fade-in":
        return `${baseClasses} opacity-100`;
      case "slide-in-left":
        return `${baseClasses} opacity-100 transform translate-x-0`;
      case "slide-in-right":
        return `${baseClasses} opacity-100 transform translate-x-0`;
      case "slide-in-up":
        return `${baseClasses} opacity-100 transform translate-y-0`;
      case "slide-in-down":
        return `${baseClasses} opacity-100 transform translate-y-0`;
      case "scale-in":
        return `${baseClasses} opacity-100 transform scale-100`;
      case "bounce-in":
        return `${baseClasses} opacity-100 transform scale-100 animate-bounce`;
      case "stagger":
        return `${baseClasses} opacity-100 transform translate-y-0`;
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity"
      }}
    >
      {children}
    </div>
  );
} 