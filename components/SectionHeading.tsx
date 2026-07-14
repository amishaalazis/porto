"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  icon: React.ReactNode;
}

export default function SectionHeading({ title, icon }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-8 md:mb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B4A]/20 to-[#FF6B4A]/5 text-[#FF6B4A] shadow-[0_0_20px_rgba(255,107,74,0.15)] border border-[#FF6B4A]/20 backdrop-blur-sm"
        >
          <div className="relative z-10 w-6 h-6">
            {icon}
          </div>
          <div className="absolute inset-0 rounded-2xl bg-[#FF6B4A]/20 blur-xl -z-10 animate-pulse"></div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        className="flex items-center gap-4 flex-1"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h3>
        <div className="h-[2px] rounded-full bg-gradient-to-r from-[#FF6B4A]/40 via-[#FF6B4A]/10 to-transparent flex-1 max-w-[200px]"></div>
      </motion.div>
    </div>
  );
}
