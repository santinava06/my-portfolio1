"use client";
import { 
  ReactIcon, 
  NextJSIcon, 
  TypeScriptIcon, 
  JavaScriptIcon, 
  NodeJSIcon, 
  TailwindIcon,
  HTMLIcon,
  CSSIcon,
  GitIcon,
  VercelIcon,
  GitHubIcon,
  LinkedInIcon,
  EmailIcon
} from "./icons";

const icons = [
  { name: "React", component: ReactIcon, color: "#61DAFB" },
  { name: "Next.js", component: NextJSIcon, color: "#000000" },
  { name: "TypeScript", component: TypeScriptIcon, color: "#3178C6" },
  { name: "JavaScript", component: JavaScriptIcon, color: "#F7DF1E" },
  { name: "Node.js", component: NodeJSIcon, color: "#339933" },
  { name: "Tailwind CSS", component: TailwindIcon, color: "#06B6D4" },
  { name: "HTML", component: HTMLIcon, color: "#E34F26" },
  { name: "CSS", component: CSSIcon, color: "#1572B6" },
  { name: "Git", component: GitIcon, color: "#F05032" },
  { name: "Vercel", component: VercelIcon, color: "#000000" },
  { name: "GitHub", component: GitHubIcon, color: "#181717" },
  { name: "LinkedIn", component: LinkedInIcon, color: "#0077B5" },
  { name: "Email", component: EmailIcon, color: "#EA4335" },
];

export default function IconShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
      {icons.map((icon) => (
        <div
          key={icon.name}
          className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
        >
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <icon.component size={32} />
          </div>
          <span className="text-sm text-gray-300 text-center">{icon.name}</span>
        </div>
      ))}
    </div>
  );
}
