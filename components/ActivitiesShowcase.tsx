'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const activities = [
  // ... (Data activities tetap sama)
  {
    title: 'Pemenang Hackathon Nasional',
    date: 'Januari 2025',
    image: '/assets/activities/hackathon_winner.jpg',
  },
  {
    title: 'Pembicara di Tech Workshop',
    date: 'Maret 2025',
    image: '/assets/activities/tech_workshop.jpg', 
  },
];

export default function ActivitiesShowcase() {
   // Animasi Masuk: Diagonal Bounce
   const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, x: -20, scale: 0.9 }, // Masuk dari kiri bawah
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1, 
      transition: { type: 'spring', stiffness: 60, damping: 8 } 
    }
  };

  return (
    <section id="kegiatan" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 relative z-40">
      <h3 className="text-xl font-bold text-slate-900 mb-8 lg:hidden uppercase tracking-widest">
        Kegiatan
      </h3>

      <motion.div 
         initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.25, delayChildren: 0.4 }} // Cascade lebih dramatis
        className="space-y-8"
      >
        {activities.map((activity, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            // Efek Hover 3D + Glow
            whileHover={{ 
              scale: 1.05, 
              y: -10, 
              rotateY: 3, 
              boxShadow: "0px 20px 40px rgba(255, 107, 74, 0.20)" 
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            className="group relative flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-[#FF6B4A]/5 overflow-hidden transition-shadow duration-300 hover:shadow-lg origin-left relative z-10"
          >
             <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 relative">
              <Image 
                src={activity.image} 
                alt={activity.title} 
                width={300} 
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
             <div className="z-10 pt-4 lg:pt-0 space-y-2 flex flex-col justify-center relative z-20">
                <h4 className="font-semibold leading-tight text-slate-900 text-lg group-hover:text-[#FF6B4A] transition-colors">
                  {activity.title}
                </h4>
                <p className="text-sm text-slate-600">
                  {activity.date}
                </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}