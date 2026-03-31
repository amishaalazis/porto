'use client';

import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Efek Latar Belakang Glowing (Eye-catching) */}
      <div className="absolute top-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.2)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Badge Intro */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <span className="px-4 py-2 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
            Portfolio 2026
          </span>
        </motion.div>

        {/* Heading Utama dengan Gradasi Teks */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">[Nama Kamu]</span>
          <span className="block mt-2 text-4xl md:text-6xl text-slate-700 dark:text-slate-300">
            Web Developer
          </span>
        </motion.h1>

        {/* Deskripsi Profesional */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Saya merancang dan membangun pengalaman digital yang interaktif dan berkinerja tinggi. Berpengalaman mengembangkan aplikasi web modern menggunakan ekosistem seperti <strong className="font-semibold text-slate-900 dark:text-slate-200">React, Next.js, dan Laravel</strong>, serta implementasi fitur visualisasi data.
        </motion.p>

        {/* Tombol Aksi (Call to Action) */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-3 text-white transition-all duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-1 font-semibold">
            Jelajahi Project
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-3 transition-all duration-300 border-2 rounded-full border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 font-semibold">
            Hubungi Saya
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}