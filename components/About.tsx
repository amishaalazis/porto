"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const pVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="tentang"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24 relative z-40"
    >
      <SectionHeading 
        title="About"
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
        <motion.p variants={pVariants}>
          I am a Frontend Engineer with Full-Stack experience specializing in
          internal business tools, CRM systems, and enterprise web applications.
          Over the past two years, I have worked on projects ranging from sales
          management platforms and booking systems to GIS applications and
          military digital archives. My primary stack includes Next.js,
          TypeScript, Laravel, and PostgreSQL, with a strong focus on scalable
          architectures, maintainable codebases, and intuitive user experiences.
          Beyond software development, I enjoy sharing technical knowledge
          through programming content creation and mentoring aspiring developers
          through teaching and community engagement.
        </motion.p>
      </motion.div>
    </section>
  );
}
