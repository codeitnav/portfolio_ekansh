"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import cImg from "../../public/C_img.png";
import python from "../../public/python.png";
import excel from "../../public/excel.png";
import bi from "../../public/powerBi.png";
import html from "../../public/html.png";
import css from "../../public/css.png";

const SkillsSection = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <section className="text-black dark:text-white" id="skills">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
              Skills
            </h2>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[90%] md:max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 md:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base flex flex-col gap-4 overflow-auto dark:text-neutral-400 h-40 pb-10"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col items-center md:flex-row justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-all"
          >
            <div className="flex gap-4 items-center flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-24 w-24 md:h-14 md:w-14 rounded-lg object-cover"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    description: "Intermediate",
    title: "C",
    src: cImg,
    ctaText: "More",
    ctaLink: "#",
    content: () => (
      <p>
        I have a solid understanding of the language&apos;s syntax and core concepts, including data types, control structures, functions, and pointers. I have applied my knowledge to develop efficient algorithms and data structures, enhancing my problem-solving skills.
      </p>
    ),
  },
  {
    description: "Proficient",
    title: "Python",
    src: python,
    ctaText: "More",
    ctaLink: "#",
    content: () => (
      <p>
        Proficient in Python,I&apos;m leveraging its versatility for various applications, including data analysis and automation. My experience includes writing clean, efficient code and utilizing Python&apos;s extensive libraries, such as Matplotlib and NumPy. With Matplotlib, I create a wide range of static, animated, and interactive visualizations that effectively communicate data trends and patterns, while my strong command of NumPy allows me to perform mathematical operations on large datasets, facilitating efficient data manipulation and statistical analysis.
      </p>
    ),
  },
  {
    description: "Proficient",
    title: "Microsoft Excel",
    src: excel,
    ctaText: "More",
    content: () => (
      <p>
        I am skilled in Microsoft Excel, utilizing its powerful features for data analysis, visualization, and reporting. My expertise includes creating complex formulas, pivot tables, and charts to summarize and present data effectively.
      </p>
    ),
  },
  {
    description: "Proficient",
    title: "Power BI",
    src: bi,
    ctaText: "More",
    content: () => (
      <p>
        I have experience using Power BI to create interactive dashboards and reports that provide valuable insights into business performance. My skills include data modeling, DAX (Data Analysis Expressions) for calculations, and designing visually appealing reports that facilitate data-driven decision-making.
      </p>
    ),
  },
  {
    description: "Proficient",
    title: "HTML 5",
    src: html,
    ctaText: "More",
    content: () => (
      <p>
        I focus on writing clean, accessible code and ensuring compatibility across different browsers and devices. My work prioritizes SEO and accessibility for a user-friendly experience.
      </p>
    ),
  },
  {
    description: "Proficient",
    title: "CSS",
    src: css,
    ctaText: "More",
    content: () => (
      <p>
        I specialize in creating visually appealing designs, animations, and transitions while ensuring cross-browser compatibility and optimized performance.
      </p>
    ),
  },
];

export default SkillsSection;
