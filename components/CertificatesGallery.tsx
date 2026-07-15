'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './SectionHeading';

const certifications = [
  {
    title: {
      en: "TOEFL ITP",
      id: "TOEFL ITP",
    },
    issuer: "ETS",
    issued: "Jul 2025",
    expires: "Jul 2027",
    category: {
      en: "Language Certification",
      id: "Sertifikasi Bahasa",
    },
  },

  {
    title: {
      en: "English Language Proficiency Test",
      id: "English Language Proficiency Test",
    },
    issuer: "Institut Teknologi Bandung",
    issued: "Feb 2024",
    expires: "Feb 2027",
    category: {
      en: "Language Certification",
      id: "Sertifikasi Bahasa",
    },
  },

  {
    title: {
      en: "TPA OTO Bappenas",
      id: "TPA OTO Bappenas",
    },
    issuer: "Bappenas",
    issued: "2024",
    category: {
      en: "Academic Assessment",
      id: "Penilaian Akademik",
    },
  },

  {
    title: {
      en: "2nd Place Innovation Idea Competition",
      id: "Juara 2 Kompetisi Ide Inovasi",
    },
    issuer: "PT Lintas Cakra Cipta",
    issued: "2025",
    image: "/ser-ju2.webp",
    category: {
      en: "Award",
      id: "Penghargaan",
    },
  },

  {
    title: {
      en: "University Outstanding Student Representative",
      id: "Perwakilan Mahasiswa Berprestasi Universitas",
    },
    issuer: "Faculty of Engineering, Pasundan University",
    issued: "2023",
    image: "/mhs.jpeg",
    category: {
      en: "Academic Achievement",
      id: "Prestasi Akademik",
    },
  },
];

export default function CertificatesGallery() {
  const { language, dict } = useLanguage();
  // State untuk menyimpan URL gambar yang sedang di-zoom
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Animasi Masuk: Diagonal Bounce
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, x: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 60, damping: 8 }
    }
  };

  return (
    <section id="sertifikat" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24 relative">
      <SectionHeading 
        title={dict.certifications.title}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        }
      />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        className="grid grid-cols-1 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10, 
              rotateX: 5, 
              boxShadow: "0px 20px 40px rgba(255, 107, 74, 0.25)" 
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            onClick={() => cert.image ? setSelectedImage(cert.image) : undefined}
            className={`group relative overflow-hidden rounded-2xl bg-[#FF6B4A]/5 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-sm transition-shadow duration-300 hover:shadow-lg origin-bottom z-10 ${cert.image ? 'cursor-zoom-in' : 'cursor-default'}`}
          >
            {cert.image && (
              <div className="w-full sm:w-1/3 aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 relative shrink-0">
                <Image 
                  src={cert.image} 
                  alt={cert.title[language]} 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                 {/* Overlay cahaya halus saat hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B4A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )}
            
            <div className={`${cert.image ? 'w-full sm:w-2/3' : 'w-full'} flex flex-col justify-center space-y-2 z-20 relative pointer-events-none`}>
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-lg leading-tight text-slate-900 group-hover:text-[#FF6B4A] transition-colors">
                  {cert.title[language]}
                </h4>
                {/* Tanda panah diagonal kecil muncul saat hover, indikator bisa di-klik */}
                {cert.image && (
                  <motion.div 
                    initial={{ opacity: 0, x: -5, y: 5 }}
                    whileHover={{ opacity: 1, x: 0, y: 0 }}
                    className="text-[#FF6B4A] hidden sm:block"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-slate-500">
                <span className="text-slate-700">{cert.issuer}</span>
                <span className="hidden sm:inline-block text-slate-300">•</span>
                <span className="text-[#FF6B4A]/80 tracking-wide">
                  {cert.issued} {cert.expires ? `- ${cert.expires}` : ''}
                </span>
              </div>
              
              {cert.category && (
                <div className="mt-2 inline-flex self-start items-center rounded-full bg-[#FF6B4A]/10 px-3 py-1 text-xs font-semibold leading-5 text-[#FF6B4A]">
                  {cert.category[language]}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- MODAL ZOOM GAMBAR --- */}
      <AnimatePresence>
        {selectedImage && mounted && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika area gambar diklik
            >
              {/* Menggunakan komponen Image dari Next.js untuk menghilangkan warning */}
              <div className="relative w-full h-[70vh] sm:h-[85vh]">
                <Image
                  src={selectedImage}
                  alt="Preview zoom sertifikat"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-[#FF6B4A] text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </section>
  );
}