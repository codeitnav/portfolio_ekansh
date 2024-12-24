"use client";
import Image from "next/image";
import about_img from "../../public/about_img.png";

const AboutSection = () => {
  return (
    <section className="text-black dark:text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="flex flex-col space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
              About Me
            </h2>
            <p className="text-base sm:text-lg lg:text-xl dark:text-white">
              I&apos;m a second-year engineering student deeply passionate about
              data analysis and machine learning. Dedicated to mastering the
              dynamic field, I actively translate theoretical knowledge into
              practical solutions.
              <br />
              <br />
              My primary focus is on data analytics, aiming to apply it to real
              world data to make a change. Aspiring to be a data analyst in the
              tech industry, I seek connections with professionals who share a
              passion for data and technology.
              <br />
              <br />
              Let&apos;s collaborate and push the boundaries of what&apos;s
              possible in this exciting journey!
            </p>
          </div>
          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={about_img}
              alt="About Me"
              width={400}
              height={400}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
