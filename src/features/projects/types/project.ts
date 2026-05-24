export type ProjectStatus = "dev" | "live" | "archived";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  images?: string[];
  link: string;
  github: string;
  featured: boolean;
  year?: string;
  status?: ProjectStatus;
}

export type ProjectFilter = "all" | "featured";
