"use client";
import { useState, useEffect } from "react";
import { projects, Project } from "../../data/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.featured);

  const ProjectCard = ({ project }: { project: Project; index: number }) => {
    // Ensure technologies array is stable and sorted consistently
    const sortedTechnologies = [...project.technologies].sort();
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover-lift transition-smooth">
         <div className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          ) : (
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Sin imagen
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {sortedTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full transition-smooth hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black dark:bg-white text-white dark:text-black text-center py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-smooth"
            >
              Ver Demo
            </Link>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 dark:border-gray-600 text-center py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-smooth"
            >
              Código
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Mis Proyectos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una colección de proyectos que he desarrollado, mostrando mis habilidades y experiencia
          </p>
        </div>
        <div className="flex justify-center">
          <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-8 w-32 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Mis Proyectos</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Una colección de proyectos que he desarrollado, mostrando mis habilidades y experiencia
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md font-medium transition-smooth ${
              filter === "all"
                ? "bg-white dark:bg-gray-700 text-black dark:text-white shadow"
                : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-4 py-2 rounded-md font-medium transition-smooth ${
              filter === "featured"
                ? "bg-white dark:bg-gray-700 text-black dark:text-white shadow"
                : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Destacados
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No hay proyectos que coincidan con el filtro seleccionado.
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Me encantaría escuchar sobre tu proyecto y ayudarte a hacerlo realidad.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-smooth hover-lift"
        >
          Hablemos
        </Link>
      </div>
    </div>
  );
} 