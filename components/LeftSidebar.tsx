"use client";

import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LeftSidebar() {
  const { dict } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeSection, setActiveSection] = useState("tentang");

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;
      mouseX.set(e.clientX - halfWidth);
      mouseY.set(e.clientY - halfHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight - 50) {
        if (sections.length > 0) {
          setActiveSection(sections[sections.length - 1].id);
        }
        return;
      }

      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.3) {
          currentSection = section.id;
          found = true;
          break;
        }
      }

      if (!found && sections.length > 0) {
        currentSection = sections[0].id;
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, rotateX: -90, y: 30 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 10 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const menuItems = [
    { id: "tentang", label: dict.sidebar.menu.about },
    { id: "pengalaman", label: dict.sidebar.menu.experience },
    { id: "project", label: dict.sidebar.menu.projects },
    { id: "tech-stack", label: dict.sidebar.menu.techStack },
    { id: "pendidikan", label: dict.sidebar.menu.education },
    { id: "sertifikat", label: dict.sidebar.menu.certifications },
    { id: "kegiatan", label: dict.sidebar.menu.activities },
    { id: "kontak", label: dict.sidebar.menu.contact },
  ];

  return (
    <motion.header
      style={{ rotateX, rotateY, z: 50 }}
      transformTemplate={({ rotateX, rotateY, z }) =>
        `perspective(1000px) rotateX(${rotateX}) rotateY(${rotateY}) translateZ(${z}px)`
      }
      className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20 relative z-50 origin-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="origin-center lg:overflow-y-auto lg:scrollbar-hide lg:pb-10"
      >
        <motion.h1
          variants={nameVariants}
          className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
        >
          Amisha Al Azis
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          className="mt-3 text-lg font-bold tracking-tight text-[#FF6B4A] sm:text-xl inline-block"
        >
          {dict.sidebar.role}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-xs leading-relaxed text-slate-600"
        >
          {dict.sidebar.description}
        </motion.p>


        <nav className="nav hidden lg:block mt-10">
          <ul className="w-max space-y-1.5">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.li variants={itemVariants} key={index}>
                  <a
                    className="group flex items-center py-2"
                    href={`#${item.id}`}
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 ${isActive ? "w-16 bg-[#FF6B4A]" : "w-8 bg-slate-300 group-hover:w-16 group-hover:bg-[#FF6B4A]"}`}
                    ></span>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"}`}
                    >
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
}
