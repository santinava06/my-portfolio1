"use client";
import { useEffect, useState } from "react";

interface ParticlesBackgroundProps {
  className?: string;
  id?: string;
}

export default function ParticlesBackground({ 
  className = "fixed inset-0 pointer-events-none z-0",
  id = "tsparticles"
}: ParticlesBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render the div, but conditionally apply styles to prevent hydration mismatch
  return (
    <div 
      id={mounted ? id : undefined}
      className={mounted ? className : "fixed inset-0 pointer-events-none z-0"}
      style={mounted ? {
        background: `
          radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
        `
      } : {}}
    />
  );
}