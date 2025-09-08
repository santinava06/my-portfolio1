"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
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
  GitHubIcon
} from "./icons";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }> | string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  category: "Frontend" | "Backend" | "Herramientas" | "Metodologías" | "Arquitecturas";
  description: string;
  color: string;
}

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: ReactIcon,
    level: "Avanzado",
    category: "Frontend",
    description: "Desarrollo de aplicaciones web interactivas y componentes reutilizables",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Next.js",
    icon: NextJSIcon,
    level: "Avanzado",
    category: "Frontend",
    description: "Framework full-stack con SSR, SSG y optimizaciones de rendimiento",
    color: "from-black to-gray-800"
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    level: "Intermedio",
    category: "Frontend",
    description: "JavaScript tipado para desarrollo más seguro y mantenible",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    level: "Avanzado",
    category: "Frontend",
    description: "Lenguaje de programación para desarrollo web dinámico",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "HTML",
    icon: HTMLIcon,
    level: "Avanzado",
    category: "Frontend",
    description: "Estructura semántica y accesible para aplicaciones web",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "CSS",
    icon: CSSIcon,
    level: "Avanzado",
    category: "Frontend",
    description: "Estilos y animaciones para interfaces modernas",
    color: "from-blue-400 to-purple-500"
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    level: "Avanzado",
    category: "Frontend",
    description: "Framework CSS utility-first para desarrollo rápido",
    color: "from-cyan-400 to-blue-500"
  },
  // Backend
  {
    name: "Node.js",
    icon: NodeJSIcon,
    level: "Intermedio",
    category: "Backend",
    description: "Runtime de JavaScript para desarrollo backend",
    color: "from-green-500 to-green-700"
  },
  {
    name: "Express",
    icon: "🚂",
    level: "Intermedio",
    category: "Backend",
    description: "Framework web minimalista para Node.js",
    color: "from-gray-600 to-gray-800"
  },
  // Herramientas
  {
    name: "Git",
    icon: GitIcon,
    level: "Avanzado",
    category: "Herramientas",
    description: "Control de versiones y colaboración en equipo",
    color: "from-orange-600 to-red-600"
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    level: "Avanzado",
    category: "Herramientas",
    description: "Plataforma de desarrollo colaborativo y deployment",
    color: "from-gray-800 to-black"
  },
  {
    name: "Vercel",
    icon: VercelIcon,
    level: "Intermedio",
    category: "Herramientas",
    description: "Plataforma de deployment y hosting para aplicaciones web",
    color: "from-black to-gray-700"
  },
  // Metodologías
  {
    name: "Scrum",
    icon: "🔄",
    level: "Intermedio",
    category: "Metodologías",
    description: "Metodología ágil con sprints, daily standups y retrospectivas",
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Kanban",
    icon: "📋",
    level: "Intermedio",
    category: "Metodologías",
    description: "Gestión visual del flujo de trabajo y limitación de WIP",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Agile",
    icon: "⚡",
    level: "Intermedio",
    category: "Metodologías",
    description: "Desarrollo iterativo e incremental con feedback continuo",
    color: "from-green-500 to-emerald-600"
  },
  // Arquitecturas
  {
    name: "Monolito",
    icon: "🏛️",
    level: "Intermedio",
    category: "Arquitecturas",
    description: "Aplicaciones estructuradas en un solo bloque de código, ideal para proyectos pequeños o medianos.",
    color: "from-gray-700 to-gray-900"
  },
  {
    name: "3 Capas",
    icon: "🥪",
    level: "Intermedio",
    category: "Arquitecturas",
    description: "Separación en capa de presentación, lógica de negocio y datos para mayor mantenibilidad.",
    color: "from-yellow-700 to-yellow-900"
  },
  {
    name: "RESTful",
    icon: "🔗",
    level: "Intermedio",
    category: "Arquitecturas",
    description: "Diseño de APIs siguiendo el estándar REST para interoperabilidad y escalabilidad.",
    color: "from-blue-700 to-blue-900"
  },
  {
    name: "Microservicios",
    icon: "🧩",
    level: "Intermedio",
    category: "Arquitecturas",
    description: "División de la aplicación en servicios independientes y desplegables por separado.",
    color: "from-green-700 to-green-900"
  }
];

const categories = ["Frontend", "Backend", "Herramientas", "Metodologías", "Arquitecturas"];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredSkills = selectedCategory === "Todos" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="min-h-screen pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Skills & Tecnologías
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tecnologías que domino, arquitecturas y metodologías que aplico en mis proyectos
          </p>
        </AnimatedSection>

        {/* Filtros */}
        <AnimatedSection animation="slide-in-up" delay={200} className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("Todos")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === "Todos"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection animation="slide-in-up" delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {typeof skill.icon === 'string' ? (
                          <span className="text-2xl">{skill.icon}</span>
                        ) : (
                          <skill.icon size={24} className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                      {skill.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 