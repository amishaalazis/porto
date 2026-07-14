"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { dict } = useLanguage();

  const pVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="tentang"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24 relative z-40"
    >
      <SectionHeading 
        title={dict.about.title}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="text-slate-600 leading-relaxed space-y-4"
      >
        {dict.about.paragraphs.map((paragraph, index) => (
          <motion.p key={index} variants={pVariants}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
