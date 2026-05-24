import AnimatedSection from "@/shared/animations/AnimatedSection";
import { Card } from "@/shared/components/ui/Card";

export function PersonalInfo() {
  return (
    <AnimatedSection delay={200}>
      <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">
        Quien soy?
      </h2>
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-4">
          <p className="text-base text-white/60 leading-relaxed">
            Soy un desarrollador web en busca de nuevas experiencias creando
            aplicaciones modernas y escalables. Me especializo en desarrollo
            FrontEnd pero tengo conocimientos en BackEnd y bases de datos.
          </p>
          <p className="text-base text-white/40 leading-relaxed">
            Cuando no estoy programando, me gusta contribuir a proyectos open
            source, leer sobre nuevas tecnologias y compartir conocimiento con
            la comunidad.
          </p>
        </div>
        <Card variant="glass" className="md:col-span-2 p-6">
          <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
            Datos personales
          </h3>
          <div className="space-y-3">
            {[
              { label: "Ubicacion", value: "Tucuman, Argentina" },
              { label: "Experiencia", value: "1+ anos" },
              {
                label: "Disponibilidad",
                value: "Disponible",
                highlight: true,
              },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center">
                <span className="text-sm text-white/40">{item.label}</span>
                <span
                  className={`text-sm font-medium ${
                    item.highlight ? "text-[#34c759]" : "text-white/80"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AnimatedSection>
  );
}
