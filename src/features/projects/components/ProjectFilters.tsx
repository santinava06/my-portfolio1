"use client";

import { cn } from "@/lib/cn";
import type { ProjectFilter } from "@/features/projects/types/project";

interface ProjectFiltersProps {
  filter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

const filters: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "featured", label: "Destacados" },
];

export function ProjectFilters({ filter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={cn(
              "px-4 py-2 rounded-md font-medium transition-smooth",
              filter === f.value
                ? "bg-white dark:bg-gray-700 text-black dark:text-white shadow"
                : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
