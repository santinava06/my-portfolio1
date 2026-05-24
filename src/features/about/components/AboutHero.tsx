import AnimatedSection from "@/shared/animations/AnimatedSection";

export function AboutHero() {
  return (
    <AnimatedSection className="text-center" delay={100}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Sobre mi
        </span>
      </h1>
      <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
        Desarrollador web apasionado por crear experiencias digitales
        excepcionales, con foco en calidad, performance y diseno elegante.
      </p>
    </AnimatedSection>
  );
}
