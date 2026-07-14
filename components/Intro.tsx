"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "800"] });

interface IntroTransitionProps {
  onComplete: () => void;
}

export function IntroTransition({ onComplete }: IntroTransitionProps) {
  const [isPresent, setIsPresent] = useState(true);
  const premiumEase = [0.76, 0, 0.24, 1] as const;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPresent(false);
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isPresent) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center pointer-events-auto">
      <motion.div
        className="absolute inset-0 bg-[#FF6B4A]"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, ease: premiumEase, delay: 2.2 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-[#FFF9F5] flex flex-col items-center justify-center"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, ease: premiumEase, delay: 2.0 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.6, ease: premiumEase, delay: 1.8 }}
          className="flex flex-col items-center"
        >
          {/* Main Name */}
          <div className="overflow-hidden pb-2 px-4 text-center">
            <motion.h1
              className={`${montserrat.className} text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.1 }}
            >
              Amisha Al Azis
            </motion.h1>
          </div>
          
          {/* Subtitle */}
          <div className="overflow-hidden mt-3 md:mt-5 pb-2 px-4">
            <motion.div
              className="flex items-center gap-2 sm:gap-4 justify-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.3 }}
            >
              <div className="h-px w-6 sm:w-8 md:w-16 bg-[#FF6B4A]" />
              <h2 className={`${montserrat.className} text-xs sm:text-sm md:text-lg font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#FF6B4A] uppercase whitespace-nowrap`}>
                Software Engineer
              </h2>
              <div className="h-px w-6 sm:w-8 md:w-16 bg-[#FF6B4A]" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

