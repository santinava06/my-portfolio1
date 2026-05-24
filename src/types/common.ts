export type SubmitStatus = "idle" | "success" | "error";

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export interface SeoMetadata {
  title: string;
  description: string;
}
