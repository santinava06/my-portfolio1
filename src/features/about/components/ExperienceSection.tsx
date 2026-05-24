import AnimatedSection from "@/shared/animations/AnimatedSection";
import { experiences } from "@/features/about/data/experience";

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 100 + 200}>
      <div className="group relative pl-8">
        <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 ring-2 ring-black" />
        <div>
          <p className="text-sm text-blue-400 font-medium">{exp.company}</p>
          <h3 className="text-lg font-semibold text-white mt-1">
            {exp.title}
          </h3>
          <p className="text-sm text-white/40 mt-1">{exp.period}</p>
          <p className="text-sm text-white/50 mt-2 leading-relaxed max-w-xl">
            {exp.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-white mb-8">
        Experiencia
      </h2>
      <div className="relative">
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-400/30 to-purple-400/10" />
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
