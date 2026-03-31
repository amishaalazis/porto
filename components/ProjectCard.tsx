'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string; 
}

export default function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
        className="group relative grid items-start pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      >
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition duration-300 lg:-inset-x-6 lg:block lg:group-hover:bg-[#FF6B4A]/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,107,74,0.1)] lg:group-hover:drop-shadow-sm"></div>

        {/* --- BAGIAN GAMBAR --- */}
        <div className="z-10 sm:order-1 sm:col-span-2 mt-1">
          <motion.div
            whileHover={{ scale: 1.02, rotateZ: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group/img relative aspect-[4/3] w-full overflow-hidden rounded-lg cursor-zoom-in border border-slate-200/50 shadow-sm transition-all hover:shadow-md"
          >
            <div className="absolute inset-0 bg-slate-900/5 group-hover/img:bg-transparent transition-colors z-10 pointer-events-none" />
            <img
              src={image}
              alt={`${title} preview`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-110"
            />
          </motion.div>
        </div>

        {/* --- BAGIAN TEKS --- */}
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3 className="font-bold leading-tight text-slate-900 group-hover:text-[#FF6B4A] transition-colors text-lg">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate-600">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center rounded-full bg-[#FF6B4A]/10 px-3 py-1 text-xs font-semibold leading-5 text-[#FF6B4A] cursor-default">
                  {tag}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* --- MODAL ZOOM GAMBAR (Tetap sama) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image}
                alt={`Zoomed preview of ${title}`}
                className="w-full h-full object-contain max-h-[90vh]"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-[#FF6B4A] text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}