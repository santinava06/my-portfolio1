import AnimatedSection from "../../components/AnimatedSection";
import Skills from "@/components/Skills";

export default function AboutPage() {
  const experience = [
    {
      title: "Buscando primera experiencia en mundo IT",
      company: "Universidad",
      period: "2022 - Presente",
      description: "Desarrollando de aplicaciones web con React, Next.js, Node.js, SQL y MongoDB"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <AnimatedSection animation="fade-in" className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Sobre Mí</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Desarrollador web apasionado por crear experiencias digitales excepcionales
        </p>
      </AnimatedSection>

      {/* About Me Section */}
      <AnimatedSection animation="slide-in-left" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">¿Quién soy?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Soy un desarrollador web en busca de nuevas experiencias creando aplicaciones modernas y escalables. 
              Me especializo en desarrollo FrontEnd pero tengo conocimientos en BackEnd y bases de datos.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Cuando no estoy programando, me gusta contribuir a proyectos open source, 
              leer sobre nuevas tecnologías y compartir conocimiento con la comunidad.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 hover-lift transition-smooth">
            <h3 className="text-xl font-semibold mb-4">Datos personales</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Ubicación:</span>
                <span className="text-gray-600 dark:text-gray-400">Tucuman, Argentina</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Experiencia:</span>
                <span className="text-gray-600 dark:text-gray-400">1+ años</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Disponibilidad:</span>
                <span className="text-green-600 dark:text-green-400">Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection animation="fade-in" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Experiencia</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <AnimatedSection 
              key={index} 
              animation="slide-in-left" 
              delay={index * 200}
              className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 hover-lift transition-smooth"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection animation="scale-in">
        <h2 className="text-3xl font-bold mb-8">Educación</h2>
        <div className="border-l-4 border-green-600 dark:border-green-400 pl-6 hover-lift transition-smooth">
          <h3 className="text-xl font-semibold mb-2">Desarrollo y calidad de Software</h3>
          <p className="text-green-600 dark:text-green-400 font-medium mb-2">
            Universidad del Norte Santo Tomas de Aquino • 2022 - 2025
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Especialización en desarrollo de software, bases de datos, metodologias agiles, etc.          </p>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <Skills />
    </div>
  );
} 