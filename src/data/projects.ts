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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/portfolio.png",
    link: "https://my-portfolio1-two-beta.vercel.app/",
    github: "https://github.com/santinava06/my-portfolio1",
    featured: false,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Plataforma de comercio electrónico completa con carrito de compras.",
    longDescription: "Aplicación full-stack de e-commerce con autenticación de usuarios, gestión de productos, carrito de compras y pasarela de pagos integrada.",
    technologies: ["React", "Vite", "CSS", "Node.js"],
    image: "/images/ecommerce.png",
    link: "https://santi-commerce.vercel.app/",
    github: "https://github.com/santinava06/Santi-Commerce",
    featured: true,
  },
  {
    id: "Brukt",
    title: "Finanzas compartidas",
    description: "Aplicación para gestionar gastos individuales y compartidos.",
    longDescription: "Aplicacion para gestionar gastos inviduales o compartidos.",
    technologies: ["Vite", "React", "Node.js"], 
    image: "/images/brukt.png",
    link: "https://brukt-frontend.vercel.app", 
    github: "https://github.com/santinava06/BruktPf",
    featured: true,
  }
];
