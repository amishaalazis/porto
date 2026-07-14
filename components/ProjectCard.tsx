'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  role?: string;
  company?: string;
  year?: string;
  description: string;
  highlights?: string[];
  tags: string[];
  image: string; 
  github?: string | null;
  demo?: string | null;
}

export default function ProjectCard({ 
  title, 
  role,
  company,
  year,
  description, 
  highlights,
  tags, 
  image,
  github,
  demo
}: ProjectCardProps) {
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
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-110"
            />
          </motion.div>
        </div>

        {/* --- BAGIAN TEKS --- */}
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3 className="font-bold leading-tight text-slate-900 group-hover:text-[#FF6B4A] transition-colors text-lg">
            {title}
          </h3>

          {(role || company || year) && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1.5 text-sm font-medium text-slate-500">
              {role && <span className="text-slate-700">{role}</span>}
              {role && (company || year) && <span className="hidden sm:block text-slate-300">•</span>}
              {company && <span className="text-slate-600">{company}</span>}
              {company && year && <span className="hidden sm:block text-slate-300">•</span>}
              {year && <span className="text-[#FF6B4A]/80 tracking-wide">{year}</span>}
            </div>
          )}

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <ul className="mt-3 space-y-2">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600 leading-relaxed">
                  <span className="mr-2 mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF6B4A]/60"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {(github || demo) && (
            <div className="mt-5 flex flex-wrap gap-4">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-[#FF6B4A] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Source Code
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-[#FF6B4A] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          )}

          <ul className="mt-5 flex flex-wrap gap-2">
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
              <div className="relative w-full h-[70vh] sm:h-[85vh]">
                <Image
                  src={image}
                  alt={`Zoomed preview of ${title}`}
                  fill
                  className="object-contain"
                />
              </div>
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