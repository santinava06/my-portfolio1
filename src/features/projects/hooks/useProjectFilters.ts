"use client";

import { useState, useMemo } from "react";
import type { Project, ProjectFilter } from "@/features/projects/types/project";

export function useProjectFilters(projects: Project[]) {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filteredProjects = useMemo(
    () =>
      filter === "all" ? projects : projects.filter((p) => p.featured),
    [projects, filter],
  );

  return { filter, setFilter, filteredProjects };
}
