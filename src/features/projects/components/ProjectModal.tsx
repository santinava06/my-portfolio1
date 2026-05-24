"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/shared/components/ui/Badge";
import { GitHubIcon } from "@/components/icons";
import type { Project, ProjectStatus } from "@/features/projects/types/project";

interface ProjectModalProps {
  project: Project;
  closing: boolean;
  onClose: () => void;
}

const statusConfig: Record<ProjectStatus, { label: string; color: string }> = {
  live: { label: "En vivo", color: "text-[#34c759]" },
  dev: { label: "En desarrollo", color: "text-[#2997ff]" },
  archived: { label: "Archivado", color: "text-white/40" },
};

export function ProjectModal({ project, closing, onClose }: ProjectModalProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [
    project.image,
    ...(project.images ?? []).filter((image) => image !== project.image),
  ].filter(Boolean);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setImgIndex((i) => (i > 0 ? i - 1 : images.length - 1));
      if (e.key === "ArrowRight") setImgIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    },
    [onClose, images.length],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  useEffect(() => {
    setImgIndex(0);
  }, [project.id]);

  const status = project.status ? statusConfig[project.status] : null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 ${
        closing ? "pointer-events-none" : ""
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm ${
          closing ? "animate-fade-out" : "animate-fade-in"
        }`}
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-black/90 border border-white/10 rounded-3xl shadow-2xl ${
          closing ? "animate-scale-out" : "animate-scale-in"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-90"
        >
          <X size={16} />
        </button>

        <div className="relative bg-white/5 overflow-hidden">
          <div className="relative aspect-[16/10] sm:aspect-video">
            <Image
              src={images[imgIndex]}
              alt={`${project.title} - ${imgIndex + 1}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          {images.length > 1 && (
            <>
              <button
                onClick={() => setImgIndex((i) => (i > 0 ? i - 1 : images.length - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 active:scale-90"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setImgIndex((i) => (i < images.length - 1 ? i + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 active:scale-90"
              >
                <ChevronRight size={18} />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-white/10 bg-black/55 px-3 py-2 backdrop-blur-sm">
                <div className="flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === imgIndex ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-white/50 font-medium tabular-nums">
                  {imgIndex + 1}/{images.length}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              {project.year && (
                <span className="text-sm text-white/30 font-medium">{project.year}</span>
              )}
              {status && (
                <span className={`text-xs font-medium ${status.color}`}>
                  {status.label}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-white/50 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {[...project.technologies].sort().map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-all duration-200 active:scale-[0.97]"
            >
              <ExternalLink size={15} />
              Ver demo
            </Link>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-full border border-white/10 text-white/60 text-sm font-medium hover:text-white hover:border-white/20 transition-all duration-200 active:scale-[0.97]"
            >
              <GitHubIcon size={15} />
              Codigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
