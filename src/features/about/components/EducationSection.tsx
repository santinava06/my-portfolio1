import AnimatedSection from "@/shared/animations/AnimatedSection";
import { education } from "@/features/about/data/experience";

export function EducationSection() {
  return (
    <AnimatedSection delay={300}>
      <h2 className="text-2xl font-semibold tracking-tight text-white mb-8">
        Educación
      </h2>
      <div className="relative">
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-green-400/30 to-blue-400/10" />
        <div className="space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="group relative pl-8">
              <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-green-400 to-blue-400 ring-2 ring-black" />
              <div>
                <p className="text-sm text-green-400 font-medium">
                  {edu.institution}
                </p>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {edu.title}
                </h3>
                <p className="text-sm text-white/40 mt-1">{edu.period}</p>
                <p className="text-sm text-white/50 mt-2 leading-relaxed max-w-xl">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
