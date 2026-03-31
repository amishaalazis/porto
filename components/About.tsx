'use client';

import { motion } from 'framer-motion';

export default function About() {
  const pVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="tentang" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="text-slate-600 leading-relaxed space-y-4"
      >
        <motion.p variants={pVariants}>
          Frontend <strong>TypeScript</strong> Developer with a strong software engineering foundation. Blending full-stack experience to design and build interactive, seamless, and well-integrated user interfaces.
        </motion.p>
        <motion.p variants={pVariants}>
          Translating complex business logic into intuitive UIs. Drawing on my experience leading web development projects, I focus on creating detail-oriented, user-friendly TypeScript-based frontend solutions.
        </motion.p>
      </motion.div>
    </section>
  );
}