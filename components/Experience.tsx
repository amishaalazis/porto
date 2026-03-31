'use client';

import { motion, Variants } from 'framer-motion';

const experienceData = [
  {
    title: 'Frontend Developer',
    company: 'PT Lintas Cakra Cipta',
    date: 'Oct 2025 — Present',
    description: 'A Frontend Developer focused on developing responsive, scalable, and secure user interfaces (UI) using the TypeScript and React/Next.js ecosystem. Responsible for the end-to-end frontend development cycle, from designing visual data architectures and building internal design systems to implementing complex business logic in enterprise-level applications and public platforms.',
    tags: ['Typescript', 'Web Developer', 'Frontend Developer'],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'PT Dwi Purwa Teknologi',
    date: 'March 2024 - Sept 2025',
    description: 'Designed, developed, and maintained resilient back-end systems using the Laravel framework, optimizing direct connections with PostgreSQL for data-intensive applications, Managed and optimized PostgreSQL database architecture (schemas, queries, indexing) to ensure high performance and stability for applications handling high-volume data, GIS Application Development: Spearheaded the development of specialized applications, including a Defense Operations System and Signal Coverage Web App, utilizing ArcGIS for crucial geospatial data visualization and analysis.',
    tags: ['Laravel', 'PostgreSQL', 'ArcGIS', 'PHP'],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Remote',
    date: '2023 — Present',
    description: 'Worked on various web development projects from clients, including geographic information systems that visualize data.',
    tags: ['Laravel', 'JavaScript', 'PHP', 'Data Visualization'],
  },
  {
    title: 'Coordinator of game programming course lab assistants',
    company: 'Pasundan University',
    date: 'Feb 2023 — May 2023',
    description: 'Led and coordinated a team of 10 lab assistants for the Game Programming course, ensuring smooth laboratory operations and providing technical guidance to students on game development tools and programming concepts.',
    tags: ['Leadership', 'Team Management', 'Technical Support'],
  },
 {
  title: 'Java, Object-Oriented Programming & Database Laboratory Assistant',
  company: 'Pasundan University',
  date: 'Jan 2021 — Jan 2023',
  description: 'Managed and mentored a team of 10 lab assistants, optimizing laboratory workflows and providing hands-on technical guidance in game development and programming.',
  tags: ['Leadership', 'Education', 'Technical Support'],
}
];

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 10 },
    },
  };

  return (
    <section id="pengalaman" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 relative z-40">
      <h3 className="text-xl font-bold text-slate-900 mb-8 lg:hidden uppercase tracking-widest">
        Pengalaman
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-l border-slate-200 ml-3 md:ml-0"
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 10 }}
            className="group relative mb-12 pl-8 transition-all duration-300"
          >
            {/* Titik Timeline Bercahaya */}
            <span className="absolute -left-[9px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 ring-4 ring-[#FFF9F5] transition-colors duration-300 group-hover:bg-[#FF6B4A] group-hover:shadow-[0_0_10px_rgba(255,107,74,0.8)]"></span>

            {/* Kotak Konten dengan Efek Glassmorphism saat Hover */}
            <div className="relative p-5 rounded-2xl transition-all duration-300 hover:bg-[#FF6B4A]/5 hover:shadow-[0_8px_30px_rgb(255,107,74,0.12)]">
              <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#FF6B4A] transition-colors">
                {exp.title}
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 text-sm font-medium text-slate-500">
                <span className="text-slate-700">{exp.company}</span>
                <span className="hidden sm:block text-slate-300">•</span>
                <span className="text-[#FF6B4A]/80 tracking-wide">{exp.date}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {exp.description}
              </p>
              
              {/* Tags / Teknologi yang digunakan */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="flex items-center rounded-full bg-[#FF6B4A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF6B4A] shadow-sm"
                  >
                    {tag}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}