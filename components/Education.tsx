"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    degree: {
      en: "Master's Degree in Computer Science (Data Science)",
      id: "Magister Ilmu Komputer (Data Science)",
    },
    institution: "Telkom University",
    date: {
      en: "2026 — Present",
      id: "2026 — Sekarang",
    },
    description: {
      en: [
        "Currently pursuing a Master's degree in Computer Science with a specialization in Data Science.",
        "Studying machine learning, statistical analysis, data engineering, and advanced data management techniques.",
        "Expanding expertise in data-driven decision making, artificial intelligence, and scalable software systems.",
      ],
      id: [
        "Saat ini sedang menempuh pendidikan S2 Ilmu Komputer dengan spesialisasi Data Science.",
        "Mempelajari machine learning, analisis statistik, rekayasa data, dan teknik manajemen data tingkat lanjut.",
        "Memperluas keahlian dalam pengambilan keputusan berbasis data, kecerdasan buatan, dan sistem perangkat lunak yang terukur.",
      ],
    },
    tags: [
      "Data Science",
      "Machine Learning",
      "Artificial Intelligence",
      "Postgraduate",
    ],
  },

  {
    degree: {
      en: "Bachelor's Degree in Informatics Engineering",
      id: "Sarjana Teknik Informatika",
    },
    institution: "Pasundan University",
    date: {
      en: "2019 — 2023",
      id: "2019 — 2023",
    },
    description: {
      en: [
        "Graduated with a GPA of 3.45/4.00 while actively participating in academic and organizational activities.",
        "Served as General Treasurer of the student organization from 2021 to 2023.",
        "Represented the Faculty of Engineering in the university-level Outstanding Student selection program.",
        "Contributed as a laboratory assistant for Java Programming, Object-Oriented Programming, Database Systems, and Game Programming courses.",
      ],
      id: [
        "Lulus dengan IPK 3.45/4.00 sambil aktif berpartisipasi dalam kegiatan akademik dan organisasi.",
        "Menjabat sebagai Bendahara Umum himpunan mahasiswa dari tahun 2021 hingga 2023.",
        "Mewakili Fakultas Teknik dalam program pemilihan Mahasiswa Berprestasi tingkat universitas.",
        "Berkontribusi sebagai asisten laboratorium untuk mata kuliah Pemrograman Java, Pemrograman Berorientasi Objek, Sistem Basis Data, dan Pemrograman Game.",
      ],
    },
    tags: [
      "GPA 3.45/4.00",
      "Laboratory Assistant",
      "Leadership",
      "Student Organization",
    ],
  },
];

export default function Education() {
  const { language, dict } = useLanguage();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 10 },
    },
  };

  return (
    <section
      id="pendidikan"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24 relative z-40"
    >
      <SectionHeading 
        title={dict.education.title}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        }
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-l border-slate-200 ml-3 md:ml-0"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 10 }}
            className="group relative mb-12 pl-8 transition-all duration-300"
          >
            {/* Titik Timeline Bercahaya */}
            <span className="absolute -left-[9px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 ring-4 ring-[#FFF9F5] transition-colors duration-300 group-hover:bg-[#FF6B4A] group-hover:shadow-[0_0_10px_rgba(255,107,74,0.8)]"></span>

            {/* Kotak Konten dengan Efek Glassmorphism saat Hover */}
            <div className="relative p-5 rounded-2xl transition-all duration-300 hover:bg-[#FF6B4A]/5 hover:shadow-[0_8px_30px_rgb(255,107,74,0.12)]">
              <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#FF6B4A] transition-colors">
                {edu.degree[language]}
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 text-sm font-medium text-slate-500">
                <span className="text-slate-700">{edu.institution}</span>
                <span className="hidden sm:block text-slate-300">•</span>
                <span className="text-[#FF6B4A]/80 tracking-wide">
                  {edu.date[language]}
                </span>
              </div>
              <div className="mt-3 text-sm leading-relaxed text-slate-600 space-y-2">
                {edu.description[language].map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>

              {/* Tags / Teknologi yang digunakan */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {edu.tags.map((tag, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="flex items-center rounded-full bg-[#FF6B4A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF6B4A] shadow-sm"
                  >
                    {tag}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
