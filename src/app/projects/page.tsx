"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/features/projects/data/projects";
import { ProjectGrid } from "@/features/projects/components/ProjectGrid";
import { ProjectModal } from "@/features/projects/components/ProjectModal";
import { useProjectFilters } from "@/features/projects/hooks/useProjectFilters";
import { cn } from "@/lib/cn";
import type { ProjectFilter, Project } from "@/features/projects/types/project";

const filters: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "featured", label: "Destacados" },
];

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [closing, setClosing] = useState(false);
  const { filter, setFilter, filteredProjects } = useProjectFilters(projects);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setClosing(false);
    }, 250);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="pt-24 pb-20 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-reveal">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Proyectos
          </h1>
          <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
            Una coleccion de proyectos que he desarrollado, mostrando mis
            habilidades y experiencia
          </p>
        </div>

        <div className="flex justify-center mb-10 animate-reveal" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex gap-1 p-1 rounded-2xl bg-white/5">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "px-5 py-1.5 text-sm font-medium rounded-xl transition-all duration-200",
                  filter === f.value
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:text-white/70",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[200px]">
          {!mounted ? (
            <div className="flex justify-center pt-12">
              <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            </div>
          ) : (
            <div className="animate-reveal" style={{ animationDelay: "0.2s" }}>
              <ProjectGrid
                projects={filteredProjects}
                onSelectProject={setSelectedProject}
              />
            </div>
          )}
        </div>

        <div className="text-center mt-20 animate-reveal">
          <h2 className="text-xl font-semibold text-white">
            Tienes un proyecto en mente?
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Me encantaria escuchar sobre tu proyecto y ayudarte a hacerlo realidad.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 h-10 px-6 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-all duration-200 active:scale-[0.97]"
          >
            Hablemos
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          closing={closing}
          onClose={handleClose}
        />
      )}
    </main>
  );
}
