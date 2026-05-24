import type { Project } from "@/features/projects/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Personal",
    description:
      "Portfolio profesional construido para presentar proyectos, experiencia y contacto con una experiencia moderna.",
    longDescription:
      "Portfolio personal desarrollado con Next.js, TypeScript y Tailwind CSS para centralizar mi presentacion profesional, proyectos, informacion personal y canales de contacto. La aplicacion usa arquitectura organizada por features, componentes reutilizables, navegacion responsive, modo claro/oscuro, animaciones suaves, modales de detalle para proyectos y una experiencia visual consistente orientada a mostrar trabajo real de forma clara y accesible.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Zustand"],
    image: "/images/portfolio.png",
    images: ["/images/portfolio.png", "/images/portfolio.png", "/images/portfolio.png"],
    link: "https://my-portfolio1-two-beta.vercel.app/",
    github: "https://github.com/santinava06/my-portfolio1",
    featured: false,
    year: "2025",
    status: "live",
  },
  {
    id: "ecommerce",
    title: "Santi-Commerce",
    description:
      "E-commerce SPA frontend-only que simula un flujo completo de compra con carrito, checkout y tracking.",
    longDescription:
      "Santi-Commerce es una demo de e-commerce construida como SPA frontend-only con React y Vite. Simula la experiencia completa de una tienda online: home, catalogo con filtros, busqueda con navegacion por teclado, carrito persistente, cupones, envio, checkout en cuatro pasos, confirmacion de orden, tracking simulado, login demo, perfil de usuario, direcciones, metodos de pago, historial de ordenes y notificaciones toast. La app no usa backend ni base de datos; el estado se gestiona con Context, useReducer, custom hooks y localStorage.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "React Router", "Context API"],
    image: "/images/ecommerce.png",
    images: ["/images/ecommerce.png", "/images/ecommerce.png", "/images/ecommerce.png"],
    link: "https://santi-commerce.vercel.app/",
    github: "https://github.com/santinava06/Santi-Commerce",
    featured: true,
    year: "2024",
    status: "live",
  },
  {
    id: "brukt",
    title: "Brukt",
    description:
      "Aplicacion full-stack para gestionar gastos personales, grupos compartidos y deudas entre miembros.",
    longDescription:
      "Brukt es una aplicacion web de finanzas personales y compartidas que permite registrar gastos individuales, crear grupos, invitar miembros, cargar gastos compartidos y gestionar deudas entre usuarios. El frontend en React + Vite se comunica con una API Node.js/Express desplegada en Render, usando Sequelize como ORM y PostgreSQL en Supabase. Incluye autenticacion JWT, roles de usuario y admin, recuperacion de contrasena por email, CRUD de gastos, reportes, gestion de miembros, pagos de deudas y calculo de saldos dentro de cada grupo.",
    technologies: ["React", "Vite", "Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "Material UI"],
    image: "/images/brukt.png",
    images: ["/images/brukt.png", "/images/brukt.png", "/images/brukt.png"],
    link: "https://brukt-frontend.vercel.app",
    github: "https://github.com/santinava06/BruktPf",
    featured: true,
    year: "2024",
    status: "live",
  },
  {
    id: "landing-gimnasio",
    title: "Landing Gym",
    description:
      "Landing page responsive para presentar servicios, planes, entrenadores y captar consultas para un gimnasio.",
    longDescription:
      "Landing Gym es un sitio web de una sola pagina para gimnasios, desarrollado con React, Vite y Tailwind CSS. La experiencia organiza la propuesta comercial en secciones claras: navegacion, hero, servicios, planes, llamada a la accion, entrenadores, formulario de contacto y footer. El objetivo es presentar la oferta del gimnasio de forma profesional, facilitar la exploracion de planes y convertir visitantes en potenciales clientes. Incluye animaciones con Framer Motion, componentes reutilizables e integracion de iconos con React Icons.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Icons"],
    image: "/images/gimnasio.png",
    images: ["/images/gimnasio.png", "/images/gimnasio.png", "/images/gimnasio.png"],
    link: "https://landing-gym-seven.vercel.app/",
    github: "https://github.com/santinava06/Landing-Gym",
    featured: true,
    year: "2025",
    status: "live",
  },
  {
    id: "dashboard-gimnasio",
    title: "GymControl Dashboard",
    description:
      "Aplicacion multiplataforma para gestionar miembros, horarios, suscripciones y alertas de un gimnasio.",
    longDescription:
      "GymControl Dashboard es una aplicacion profesional de gestion integral para gimnasios, construida para funcionar tanto en web como en escritorio con Tauri 2. Permite administrar estudiantes o miembros, controlar horarios y turnos, hacer seguimiento de suscripciones, detectar vencimientos y proteger las rutas mediante autenticacion. La arquitectura separa UI, hooks, repositorios y persistencia, usando localStorage en desarrollo web y SQLite local en desktop para una experiencia offline y multiplataforma.",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Tauri 2", "SQLite"],
    image: "/images/gymDashboard.png",
    images: ["/images/gymDashboard.png", "/images/gymDashboard.png", "/images/gymDashboard.png"],
    link: "https://gym-dashboard-opal.vercel.app/",
    github: "https://github.com/santinava06/gym-dashboard",
    featured: true,
    year: "2025",
    status: "live",
  },
  {
    id: "wsp-reminder",
    title: "WhatsApp Reminders",
    description:
      "Plataforma para enviar y programar recordatorios masivos a grupos de WhatsApp desde el navegador.",
    longDescription:
      "WhatsApp Reminders es una aplicacion full-stack para automatizar comunicaciones masivas a grupos de WhatsApp. El backend usa Node.js, Express y Baileys, evitando dependencias de Chrome o Puppeteer, mientras que el frontend en React permite iniciar sesion, vincular WhatsApp por QR, listar grupos, enviar mensajes individuales, multiples o masivos, adjuntar imagenes, configurar delays, cancelar envios en vivo y reintentar fallidos. Incluye scheduler persistente en JSON, historial local y de servidor, autenticacion por Bearer token y panel admin con usuarios, sesiones, programados, estadisticas y desconexion remota.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Baileys"],
    image: "/images/WspReminderPort.png",
    images: ["/images/WspReminderPort.png", "/images/WspReminderPort.png", "/images/WspReminderPort.png"],
    link: "https://wspreminder.vercel.app/",
    github: "https://github.com/santinava06/WspReminder",
    featured: true,
    year: "2025",
    status: "live",
  },
];
