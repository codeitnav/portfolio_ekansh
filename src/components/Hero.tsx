"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from 'next/image';
import CV_button from "./CV_Button";
import profile from "../../public/ekansh.jpg";

const Hero = () => {
  return (
    <section className="relative pb-20 pt-36 h-screen flex items-center justify-center">
      {/* Spotlights */}
      <Spotlight className="-top-40 -left-10 sm:-left-24 md:-left-32 md:-top-20 h-[80vh] sm:h-[90vh]" fill="white" />
      <Spotlight className="h-[60vh] sm:h-[70vh] w-[45vw] sm:w-[50vw] top-10 sm:top-14 md:top-10" fill="purple" />
      <Spotlight className="left-80 top-28 h-[60vh] sm:h-[70vh] w-[45vw] sm:w-[50vw]" fill="blue" />

      {/* Background with radial gradient */}
      <div className="h-screen w-full dark:bg-black-100 bg-white absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col sm:flex-row justify-center relative my-20 z-10">
        <div className="max-w-[89vw] sm:max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mb-12 sm:mb-0 sm:mr-16">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-center text-black dark:text-white max-w-80">
            Hello,
          </p>

          <TextGenerateEffect
            words="I am Ekansh Dubey"
            className="text-center text-[30px] sm:text-[35px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm sm:text-base md:text-lg lg:text-2xl">
            An Electrical Engineering Undergrad based in Delhi.
          </p>

          <a href="/assests/my_resume.pdf" target="_blank" rel="noopener noreferrer">
            <CV_button
              title="Résumé"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="flex justify-center sm:ml-12 md:ml-16 lg:ml-20">
          <Image 
            src={profile} 
            alt="ProfilePic" 
            width={350} 
            height={350} 
            className="rounded-full mx-10 sm:mx-12 md:mx-16 lg:mx-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
