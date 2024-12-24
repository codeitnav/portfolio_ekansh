"use client";
import React, { useEffect, useState } from "react";
import { FloatingNav } from "./ui/Floating-navbar";
import { IconHome, IconMessage, IconUser, IconBriefcase, IconCode, IconCertificate, IconFolder } from "@tabler/icons-react";
import { useTheme } from "next-themes"; 

export function FloatingNavDemo() {
  const { resolvedTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && resolvedTheme === 'dark'; 
  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Certifications",
      link: "#certifications",
      icon: <IconCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconFolder className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#footer",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  if (!mounted) return null;

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} isDarkMode={isDarkMode} /> 
    </div>
  );
}
