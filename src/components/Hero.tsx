import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 text-center relative">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20 animate-pulse-slow"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Contenedor principal con glassmorphism */}
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <AnimatedSection animation="fade-in" delay={200}>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-sans">
              <span className="text-white">Hola, soy{" "}</span>
              <span className="text-blue-400 dark:text-blue-300 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-pulse-slow">
                Santiago Navarro
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-up" delay={400}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-sans">
              Soy desarrollador web especializado en React, Node.Js y Tailwind CSS. 
              Creo experiencias digitales modernas y funcionales.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/projects" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Ver Proyectos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/contact" 
                className="group px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Contactar
              </Link>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={800}>
            <div className="flex justify-center space-x-6 text-gray-300">
              <span className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Disponible para proyectos
              </span>
            </div>
          </AnimatedSection>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-blue-400/20 rounded-full blur-lg animate-float-slow"></div>
      </div>
    </section>
  );
} 