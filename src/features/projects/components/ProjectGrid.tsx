"use client";

import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/features/projects/types/project";

interface ProjectGridProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
}

export function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No hay proyectos que coincidan con el filtro seleccionado.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
      ))}
    </div>
  );
}
