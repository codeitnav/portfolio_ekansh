import Hero from "@/components/Hero";
import AboutSection from "@/components/About"
import CertificationsSection from "@/components/Certifications"
import {FloatingNavDemo} from "@/components/Navbar"
import ThemeSwitch from "@/components/ThemeSwitch";
import SkillsSection from "@/components/Skills"
import ProjectsSection from "@/components/Projects";
import ExperienceSection from "@/components/Experience";
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ThemeSwitch />
        <FloatingNavDemo />
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />    
        <ProjectsSection />
        <Footer />  
      </div>
    </main>
  );
}
