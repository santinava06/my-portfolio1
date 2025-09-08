"use client";
import { memo } from "react";

interface ParticlesBackgroundProps {
  className?: string;
  id?: string;
}

const ParticlesBackground = memo(function ParticlesBackground({ 
  className = "fixed inset-0 pointer-events-none z-0",
  id = "tsparticles"
}: ParticlesBackgroundProps) {
  return (
    <div 
      id={id}
      className={className}
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
        `
      }}
    />
  );
});

export default ParticlesBackground;