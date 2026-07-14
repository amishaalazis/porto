'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

const certifications = [
  {
    title: "TOEFL ITP",
    issuer: "ETS",
    issued: "Jul 2025",
    expires: "Jul 2027",
    image: "/assets/certifications/toefl-itp.webp",
    category: "Language Certification",
  },

  {
    title: "English Language Proficiency Test",
    issuer: "Institut Teknologi Bandung",
    issued: "Feb 2024",
    expires: "Feb 2027",
    credentialId: "1623/IT.B05.6/DL.09/Srtfk/2025",
    image: "/assets/certifications/elpt-itb.webp",
    category: "Language Certification",
  },

  {
    title: "TPA OTO Bappenas",
    issuer: "Bappenas",
    issued: "2024",
    image: "/assets/certifications/tpa-bappenas.webp",
    category: "Academic Assessment",
  },

  {
    title: "2nd Place Innovation Idea Competition",
    issuer: "PT Lintas Cakra Cipta",
    issued: "2025",
    image: "/assets/certifications/innovation-award.webp",
    category: "Award",
  },

  {
    title: "University Outstanding Student Representative",
    issuer: "Faculty of Engineering, Pasundan University",
    issued: "2023",
    image: "/assets/certifications/outstanding-student.webp",
    category: "Academic Achievement",
  },
];

export default function CertificatesGallery() {
  // State untuk menyimpan URL gambar yang sedang di-zoom
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      <h3 className="text-xl font-bold text-slate-900 mb-8 lg:hidden uppercase tracking-widest">
        Sertifikat
      </h3>

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
            onClick={() => setSelectedImage(cert.image)}
            className="group relative overflow-hidden rounded-2xl bg-[#FF6B4A]/5 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-sm transition-shadow duration-300 hover:shadow-lg origin-bottom z-10 cursor-zoom-in"
          >
            <div className="w-full sm:w-1/3 aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 relative shrink-0">
              <Image 
                src={cert.image} 
                alt={cert.title} 
                width={400} 
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
               {/* Overlay cahaya halus saat hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B4A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            
            <div className="w-full sm:w-2/3 flex flex-col justify-center space-y-2 z-20 relative pointer-events-none">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-lg leading-tight text-slate-900 group-hover:text-[#FF6B4A] transition-colors">
                  {cert.title}
                </h4>
              </div>
              
              <div className="flex flex-col gap-1.5 text-sm text-slate-600">
                <span className="font-medium text-slate-700">{cert.issuer}</span>
                
                {cert.issued && (
                  <span className="text-[13px] text-slate-500">
                    {cert.issued} {cert.expires ? `• Expires: ${cert.expires}` : ""}
                  </span>
                )}
                
                {cert.credentialId && (
                  <span className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded w-fit border border-slate-200">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
              
              {cert.category && (
                <div className="pt-1.5">
                  <span className="inline-flex items-center rounded-full bg-[#FF6B4A]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF6B4A]">
                    {cert.category}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- MODAL ZOOM GAMBAR --- */}
      <AnimatePresence>
        {selectedImage && (
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}