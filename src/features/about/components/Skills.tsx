"use client";

import { useState } from "react";
import { skills, skillCategories } from "@/features/about/data/skills-data";
import type { SkillCategory } from "@/features/about/data/skills";
import { cn } from "@/lib/cn";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "Todos">("Todos");

  const filteredSkills =
    selectedCategory === "Todos"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Skills & Tecnologias
        </h2>
        <p className="mt-3 text-sm text-white/50 max-w-md mx-auto">
          Tecnologias que domino, arquitecturas y metodologias que aplico en mis proyectos
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {(["Todos", ...skillCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
              selectedCategory === cat
                ? "bg-white/10 text-white"
                : "text-white/40 hover:text-white/70 hover:bg-white/5",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group relative p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all duration-200 hover-lift"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0 text-xl">
                {skill.emoji}
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                <p className="text-xs text-white/40 mt-0.5">
                  {skill.category}
                </p>
              </div>
            </div>
            <div
              className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none",
                `bg-gradient-to-r ${skill.color}`,
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
