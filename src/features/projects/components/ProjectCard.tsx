import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/shared/components/ui/Badge";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/features/projects/types/project";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const sortedTechnologies = [...project.technologies].sort();

  return (
    <button
      onClick={() => onSelect?.(project)}
      className="group relative w-full text-left bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:bg-white/[0.07] transition-all duration-300 hover-lift">
      <div className="relative h-48 bg-white/5 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-all duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 text-sm">Sin imagen</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-white/50 mt-1.5 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {sortedTechnologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mt-5 pt-4 border-t border-white/5">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 active:scale-[0.97]"
          >
            <ExternalLink size={14} />
            Demo
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-full border border-white/10 text-white/60 text-sm font-medium hover:text-white hover:border-white/20 transition-all duration-200 active:scale-[0.97]"
          >
            <GitHubIcon size={14} />
            Codigo
          </Link>
        </div>
      </div>
    </button>
  );
}
