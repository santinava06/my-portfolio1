export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Personal",
    description: "Mi portfolio personal hecho con Next.js y Tailwind CSS.",
    longDescription: "Un portfolio moderno y responsive construido con Next.js 14, TypeScript y Tailwind CSS. Incluye modo oscuro, navegación responsive y animaciones suaves.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/images/portfolio.jpg",
    link: "https://miportfolio.com",
    github: "https://github.com/tuusuario/portfolio",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras.",
    longDescription: "Aplicación full-stack de e-commerce con autenticación de usuarios, gestión de productos, carrito de compras y pasarela de pagos integrada.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/images/ecommerce.jpg",
    link: "https://ecommerce-demo.com",
    github: "https://github.com/tuusuario/ecommerce",
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description: "Aplicación para gestionar tareas diarias con drag & drop.",
    longDescription: "Aplicación de gestión de tareas con interfaz drag & drop, categorización, fechas límite y notificaciones. Incluye sincronización en tiempo real.",
    technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    image: "/images/task-manager.jpg",
    link: "https://task-manager-demo.com",
    github: "https://github.com/tuusuario/task-manager",
    featured: false,
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "Dashboard del clima con datos en tiempo real.",
    longDescription: "Aplicación del clima que muestra pronósticos detallados, mapas interactivos y alertas meteorológicas usando APIs externas.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
    image: "/images/weather-app.jpg",
    link: "https://weather-demo.com",
    github: "https://github.com/tuusuario/weather-app",
    featured: false,
  },
]; 