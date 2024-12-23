"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import jio from "../../public/Reliance_Jio_Logo.svg";
import sd from "../../public/SD_logo.png";
import du from "../../public/Delhi-University-Logo.png";

const ExperienceSection = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={jio}
            alt="Reliance Jio"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg font-bold">
              Reliance Jio <br></br>Project Intern
            </h2>
            <h3 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
              Duration: June 2024 - July 2024
            </h3>
            <p className="text-black dark:text-white text-xs sm:text-sm md:text-base mt-2">
              Gained valuable experience about Business-to-Business dealings
              and negotiation. Assisted in project management, monitored
              progress, and ensured compliance with safety and quality
              standards.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={sd}
            alt="Startup Template"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg font-bold">
              SD Constructions<br></br>Administrative Assistant
            </h2>
            <h3 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
              Duration: November 2023 - April 2024
            </h3>
            <p className="text-black dark:text-white text-xs sm:text-sm md:text-base mt-2">
              Project Coordination: Assisted in organizing project timelines,
              documentation, and communications.
              <br />
              Data Management: Managed spreadsheets and invoicing.
            </p>
          </div>
          <Image
            src={du}
            alt="Delhi University Logo"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex flex-col flex-1">
            <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg font-bold">
              Delhi University<br/>Student
            </h2>
            <h3 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
              Duration: 2023 - 2027
            </h3>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg">
            Senior Secondary
          </h2>
          <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg">
            Oriental Public School
          </h2>
          <h2 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
            2021-22
          </h2>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg">
            Higher Secondary
          </h2>
          <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg">
            Oriental Public School
          </h2>
          <h2 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
            2019-20
          </h2>
        </div>
      ),
    },
  ];

  return (
    <div className="py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-12" id="experience" >
      <section className="text-black dark:text-white" >
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work Experience and Education
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base max-w-md">
              Here&apos;s a timeline of my journey.
            </p>
          </div>
        </div>
      </section>
      <Timeline data={data} />
    </div>
  );
}

export default ExperienceSection;
