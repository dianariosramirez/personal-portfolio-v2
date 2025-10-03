import { ContactSection } from "@/components/Sections/ContactSection";
import { EducationSection } from "@/components/Sections/EducationSection";
import { ExperienceSection } from "@/components/Sections/ExperienceSection";
import { PrincipalSection } from "@/components/Sections/PrincipalSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { SkillsSection } from "@/components/Sections/SkillsSection";

export default function HomePage() {
  return (
    <div>
      <section id='sobre-mi' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <PrincipalSection />
      </section>
      <section id='proyectos' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <ProjectsSection />
      </section>
      <section id='experiencia' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <ExperienceSection />
      </section>
      <section id='educacion' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <EducationSection />
      </section>
      <section id='skills' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <SkillsSection />
      </section>
      <section id='contacto' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <ContactSection />
      </section>
    </div>
  );
}