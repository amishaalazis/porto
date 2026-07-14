"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";

const techStack = [
  {
    category: {
      en: "Frontend",
      id: "Frontend",
    },
    skills: [
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "SSR",
      "Responsive Design",
      "SEO Optimization",
    ],
  },

  {
    category: {
      en: "Backend",
      id: "Backend",
    },
    skills: [
      "Laravel",
      "PHP",
      "REST APIs",
      "Server Actions",
      "Better Auth",
      "Authentication",
      "Authorization",
      "RBAC",
      "File Upload Handling",
    ],
  },

  {
    category: {
      en: "Database & Infrastructure",
      id: "Database & Infrastruktur",
    },
    skills: ["PostgreSQL", "MySQL", "Supabase", "Neon", "Vercel"],
  },

  {
    category: {
      en: "GIS & Analytics",
      id: "GIS & Analitik",
    },
    skills: [
      "ArcGIS",
      "Geospatial Visualization",
      "Dashboard Analytics",
      "Data Visualization",
    ],
  },

  {
    category: {
      en: "Tools & Collaboration",
      id: "Alat & Kolaborasi",
    },
    skills: ["Git", "GitHub", "Apidog", "Figma", "Discord"],
  },
];

export default function TechStack() {
  const { language, dict } = useLanguage();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 12 },
    },
  };

  return (
    <section
      id="tech-stack"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
    >
      <SectionHeading 
        title={dict.techStack.title}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        }
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        {techStack.map((stack, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative p-5 rounded-2xl transition-all duration-300 hover:bg-[#FF6B4A]/5 hover:shadow-[0_8px_30px_rgb(255,107,74,0.12)]"
          >
            <h3 className="mb-4 font-bold text-lg text-slate-900 group-hover:text-[#FF6B4A] transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]/60"></span>
              {stack.category[language]}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {stack.skills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="flex items-center rounded-full bg-[#FF6B4A]/10 px-3 py-1 text-xs font-semibold leading-5 text-[#FF6B4A] shadow-sm cursor-default"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
