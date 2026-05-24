export type SkillLevel = "Principiante" | "Intermedio" | "Avanzado";
export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Herramientas"
  | "Metodologías"
  | "Arquitecturas";

export interface Skill {
  name: string;
  emoji: string;
  level: SkillLevel;
  category: SkillCategory;
  description: string;
  color: string;
}
