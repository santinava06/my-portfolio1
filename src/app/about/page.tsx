import { AboutHero } from "@/features/about/components/AboutHero";
import { PersonalInfo } from "@/features/about/components/PersonalInfo";
import { ExperienceSection } from "@/features/about/components/ExperienceSection";
import { EducationSection } from "@/features/about/components/EducationSection";
import Skills from "@/features/about/components/Skills";

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-24">
        <AboutHero />
        <PersonalInfo />
        <div className="grid md:grid-cols-2 gap-16">
          <ExperienceSection />
          <EducationSection />
        </div>
        <Skills />
      </div>
    </main>
  );
}
