'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Sistem Informasi Geografis Tata Ruang',
    description: 'Aplikasi pemetaan interaktif yang mengintegrasikan data spasial dari ArcGIS untuk memvisualisasikan zonasi wilayah secara real-time.',
    tags: ['Next.js', 'ArcGIS', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Platform Manajemen',
    description: 'Sistem backend dan dashboard admin untuk mengelola ribuan pendaftar beasiswa dengan alur seleksi multi-tahap.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="project" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-8 lg:hidden uppercase tracking-widest">
        Project
      </h3>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.2 }}
        className="group/list space-y-12"
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </motion.div>
    </section>
  );
}