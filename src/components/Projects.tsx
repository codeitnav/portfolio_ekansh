"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magicCard";

const ProjectsSection = () => {
  const { theme } = useTheme();
  return (
    <div id="projects" >
      <section className="text-black dark:text-white" id="projects">
        <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-8">
          <div className="text-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Projects
            </h2>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center mb-20 px-4">
        <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row justify-center">
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-lg sm:text-2xl md:text-4xl h-40 sm:h-60 md:h-96 w-full md:w-[30%]"
            gradientColor={theme === "dark" ? "#3A3A3A" : "#2C2C2C"}
          >
            Updating
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-lg sm:text-2xl md:text-4xl h-40 sm:h-60 md:h-96 w-full md:w-[30%]"
            gradientColor={theme === "dark" ? "#3A3A3A" : "#2C2C2C"}
          >
            Soon
          </MagicCard>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;