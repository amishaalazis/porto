'use client';

import { useState, useEffect } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import FloatingSocial from '@/components/FloatingSocial'; 
import About from '@/components/About';
import Projects from '@/components/Projects';
import CertificatesGallery from '@/components/CertificatesGallery';
import ActivitiesShowcase from '@/components/ActivitiesShowcase';
import Experience from '@/components/Experience';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFF9F5] text-slate-800 selection:bg-[#FF6B4A]/20 selection:text-[#FF6B4A] font-sans">
      
      <FloatingSocial />

      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 74, 0.08), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-40">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          <LeftSidebar />
          
          <main className="pt-40 lg:w-1/2 lg:pt-40 lg:pb-24 space-y-24 mt-8 lg:mt-0">
            <About />
            <Experience />
            <Projects />
            <CertificatesGallery />
            <ActivitiesShowcase />
          </main>
          
        </div>
      </div>
    </div>
  );
}