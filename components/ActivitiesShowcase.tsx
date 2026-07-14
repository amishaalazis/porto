"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";

const activities = [
  {
    title: {
      en: "Volunteer Teacher",
      id: "Guru Relawan",
    },
    organization: "Saung Diajar",
    date: {
      en: "2024 — Present",
      id: "2024 — Sekarang",
    },
    image: "/saung.JPG",

    description: {
      en: "Contributing as a volunteer educator in a social community initiative focused on improving access to education for children and local communities in Bandung.",
      id: "Berkontribusi sebagai pendidik relawan dalam inisiatif komunitas sosial yang berfokus pada peningkatan akses pendidikan bagi anak-anak dan masyarakat lokal di Bandung.",
    },

    highlights: {
      en: [
        "Provided educational support and mentoring sessions for students.",
        "Participated in community-based educational programs.",
        "Collaborated with volunteers to organize learning activities and educational events.",
        "Supported initiatives promoting equal access to education.",
      ],
      id: [
        "Memberikan dukungan pendidikan dan sesi bimbingan untuk siswa.",
        "Berpartisipasi dalam program pendidikan berbasis masyarakat.",
        "Berkolaborasi dengan relawan untuk menyelenggarakan kegiatan belajar dan acara pendidikan.",
        "Mendukung inisiatif yang mempromosikan akses yang sama terhadap pendidikan.",
      ],
    },
  },

  {
    title: {
      en: "Programming Content Creator",
      id: "Kreator Konten Pemrograman",
    },
    organization: "Personal Brand",
    date: {
      en: "2024 — Present",
      id: "2024 — Sekarang",
    },
    image: "/cewe-coding.png",

    description: {
      en: "Creating educational and entertainment-focused programming content related to software engineering, developer culture, and modern web development.",
      id: "Membuat konten pemrograman yang berfokus pada pendidikan dan hiburan yang berkaitan dengan rekayasa perangkat lunak, budaya developer, dan pengembangan web modern.",
    },

    highlights: {
      en: [
        "Produced short-form technical content for developers and students.",
        "Simplified complex technical concepts into accessible learning materials.",
        "Collaborated with technology and hosting companies.",
        "Built engagement within the developer community.",
      ],
      id: [
        "Memproduksi konten teknis berdurasi pendek untuk developer dan siswa.",
        "Menyederhanakan konsep teknis yang kompleks menjadi materi pembelajaran yang mudah diakses.",
        "Berkolaborasi dengan perusahaan teknologi dan hosting.",
        "Membangun keterlibatan dalam komunitas developer.",
      ],
    },
  },

  {
    title: {
      en: "General Treasurer",
      id: "Bendahara Umum",
    },
    organization: "Student Organization",
    date: {
      en: "2021 — 2023",
      id: "2021 — 2023",
    },
    image: "/himpunan.jpeg",

    description: {
      en: "Managed budgeting, financial administration, and reporting activities for student programs and organizational events.",
      id: "Mengelola anggaran, administrasi keuangan, dan kegiatan pelaporan untuk program kemahasiswaan dan acara organisasi.",
    },

    highlights: {
      en: [
        "Prepared financial reports and budgeting plans.",
        "Managed organizational expenditures and cash flow.",
        "Collaborated with multiple divisions for event execution.",
      ],
      id: [
        "Menyiapkan laporan keuangan dan rencana anggaran.",
        "Mengelola pengeluaran organisasi dan arus kas.",
        "Berkolaborasi dengan berbagai divisi untuk pelaksanaan acara.",
      ],
    },
  },

  {
    title: {
      en: "Faculty Representative for Outstanding Student Program",
      id: "Perwakilan Fakultas untuk Program Mahasiswa Berprestasi",
    },
    organization: "Faculty of Engineering",
    date: {
      en: "2021",
      id: "2021",
    },
    image: "/mhs2.jpeg",

    description: {
      en: "Selected as the Faculty of Engineering representative for the university-level Outstanding Student selection program.",
      id: "Terpilih sebagai perwakilan Fakultas Teknik untuk program pemilihan Mahasiswa Berprestasi tingkat universitas.",
    },

    highlights: {
      en: [
        "Represented the faculty at the university selection stage.",
        "Evaluated based on academic achievement, leadership, and organizational contributions.",
      ],
      id: [
        "Mewakili fakultas pada tahap seleksi universitas.",
        "Dievaluasi berdasarkan prestasi akademik, kepemimpinan, dan kontribusi organisasi.",
      ],
    },
  },

  {
    title: {
      en: "Laboratory Assistant & Coordinator",
      id: "Asisten Laboratorium & Koordinator",
    },
    organization: "Pasundan University",
    date: {
      en: "2021 — 2023",
      id: "2021 — 2023",
    },
    image: "/LAB.png",

    description: {
      en: "Assisted practical sessions in Java Programming, Object-Oriented Programming, Database Systems, and Game Programming courses while coordinating assistant activities.",
      id: "Membantu sesi praktikum dalam mata kuliah Pemrograman Java, Pemrograman Berorientasi Objek, Sistem Basis Data, dan Pemrograman Game sembari mengoordinasikan kegiatan asisten.",
    },

    highlights: {
      en: [
        "Provided mentoring and technical guidance to students.",
        "Supported laboratory operations and practical sessions.",
        "Coordinated assistant schedules and learning activities.",
      ],
      id: [
        "Memberikan bimbingan dan panduan teknis kepada mahasiswa.",
        "Mendukung operasional laboratorium dan sesi praktikum.",
        "Mengoordinasikan jadwal asisten dan kegiatan pembelajaran.",
      ],
    },
  },
];

export default function ActivitiesShowcase() {
  const { language, dict } = useLanguage();
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, x: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 8 },
    },
  };

  return (
    <section id="aktivitas" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24">
      <SectionHeading 
        title={dict.activities.title}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.25, delayChildren: 0.4 }}
        className="space-y-8"
      >
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotateY: 3,
              boxShadow: "0px 20px 40px rgba(255, 107, 74, 0.20)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="group relative flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-[#FF6B4A]/5 overflow-hidden transition-shadow duration-300 hover:shadow-lg origin-left z-10"
          >
            <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 relative shrink-0">
              <Image
                src={activity.image}
                alt={activity.title[language]}
                width={300}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="relative z-20 flex-1 p-6 md:p-8 flex flex-col justify-center gap-4 group/content">
              {/* Title & Organization */}
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover/content:text-[#FF6B4A] transition-colors">
                  {activity.title[language]}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 text-sm font-medium text-slate-500">
                  <span className="text-slate-700">{activity.organization}</span>
                  <span className="hidden sm:block text-slate-300">•</span>
                  <span className="text-[#FF6B4A]/80 tracking-wide">
                    {activity.date[language]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                {activity.description[language]}
              </p>

              {/* Highlights List */}
              {activity.highlights[language] && activity.highlights[language].length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {activity.highlights[language].map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-[13px] text-slate-600">
                      <span className="mr-2 mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF6B4A]/60"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
