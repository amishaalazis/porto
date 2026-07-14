"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion, Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experienceData = [
  {
    title: {
      en: "Frontend Engineer",
      id: "Frontend Engineer",
    },
    company: "PT Lintas Cakra Cipta",
    date: {
      en: "Oct 2025 — Present",
      id: "Okt 2025 — Sekarang",
    },
    description: {
      en: [
        "Develop and maintain business-critical web applications using Next.js and TypeScript, ranging from corporate websites and booking platforms to enterprise CRM solutions.",
        "Led frontend implementation of an internal Salesforce platform featuring KPI tracking, sales pipeline management, quotation and offering approvals, customer management, transaction reporting, and revenue analytics.",
        "Built multi-level approval workflows, role-based access control using Better Auth, dashboard visualizations, geolocation-based field activity tracking, image uploads, and Excel export functionality.",
        "Designed reusable UI systems including layouts, typography, cards, buttons, and utility components to improve consistency and scalability across multiple products.",
        "Focused on Server Actions, SSR, performance optimization, responsive design, and maintainable frontend architecture.",
      ],
      id: [
        "Mengembangkan dan memelihara aplikasi web yang penting bagi bisnis menggunakan Next.js dan TypeScript, mulai dari situs korporat dan platform pemesanan hingga solusi CRM enterprise.",
        "Memimpin implementasi frontend platform Salesforce internal yang menampilkan pelacakan KPI, manajemen pipeline penjualan, persetujuan penawaran (quotation), manajemen pelanggan, pelaporan transaksi, dan analitik pendapatan.",
        "Membangun alur persetujuan bertingkat, kontrol akses berbasis peran menggunakan Better Auth, visualisasi dasbor, pelacakan aktivitas lapangan berbasis geolokasi, unggahan gambar, dan fungsionalitas ekspor Excel.",
        "Merancang sistem UI yang dapat digunakan kembali termasuk tata letak, tipografi, kartu, tombol, dan komponen utilitas untuk meningkatkan konsistensi dan skalabilitas di berbagai produk.",
        "Berfokus pada Server Actions, SSR, optimasi performa, desain responsif, dan arsitektur frontend yang mudah dikelola.",
      ],
    },
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Better Auth",
      "Server Actions",
      "SSR",
    ],
  },
  {
    title: {
      en: "Full-Stack Developer",
      id: "Full-Stack Developer",
    },
    company: "PT Dwi Purwa Teknologi",
    date: {
      en: "Mar 2024 — Sept 2025",
      id: "Mar 2024 — Sept 2025",
    },
    description: {
      en: [
        "Developed enterprise applications and government systems using Laravel and PostgreSQL, focusing on data-intensive business processes and long-term operational systems.",
        "Contributed to a military GIS platform utilizing ArcGIS libraries for geospatial visualization, operational mapping, and strategic information display.",
        "Built command center dashboard modules displaying weather information, business intelligence metrics, heatmaps, and organizational insights.",
        "Developed a digital archive system for military psychological assessments, psychograms, achievements, certificates, and personnel records dating back to the 1980s.",
        "Participated in database design, business requirement analysis, and technical documentation for enterprise software projects.",
      ],
      id: [
        "Mengembangkan aplikasi enterprise dan sistem pemerintahan menggunakan Laravel dan PostgreSQL, berfokus pada proses bisnis padat data dan sistem operasional jangka panjang.",
        "Berkontribusi pada platform GIS militer menggunakan pustaka ArcGIS untuk visualisasi geospasial, pemetaan operasional, dan tampilan informasi strategis.",
        "Membangun modul dasbor command center yang menampilkan informasi cuaca, metrik intelijen bisnis, heatmap, dan wawasan organisasi.",
        "Mengembangkan sistem arsip digital untuk penilaian psikologis militer, psikogram, pencapaian, sertifikat, dan catatan personel sejak tahun 1980-an.",
        "Berpartisipasi dalam desain database, analisis kebutuhan bisnis, dan dokumentasi teknis untuk proyek perangkat lunak enterprise.",
      ],
    },
    tags: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "ArcGIS",
      "GIS",
      "Enterprise Application",
      "Government Project",
    ],
  },
  {
    title: {
      en: "Freelance Web Developer",
      id: "Freelance Web Developer",
    },
    company: "Remote",
    date: {
      en: "2023 — Present",
      id: "2023 — Sekarang",
    },
    description: {
      en: [
        "Delivered custom web solutions for clients including corporate websites, booking systems, dashboards, and geospatial applications.",
        "Worked closely with clients throughout the development lifecycle from requirement gathering and UI implementation to deployment and maintenance.",
        "Focused on creating responsive interfaces, improving SEO performance, and building maintainable frontend architectures.",
      ],
      id: [
        "Mengirimkan solusi web kustom untuk klien termasuk situs web korporat, sistem pemesanan, dasbor, dan aplikasi geospasial.",
        "Bekerja sama dengan klien di seluruh siklus pengembangan mulai dari pengumpulan kebutuhan dan implementasi UI hingga penerapan dan pemeliharaan.",
        "Berfokus pada pembuatan antarmuka responsif, peningkatan performa SEO, dan pembangunan arsitektur frontend yang dapat dikelola.",
      ],
    },
    tags: [
      "Next.js",
      "Laravel",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "SEO",
    ],
  },
  {
    title: {
      en: "Technical Content Creator",
      id: "Kreator Konten Teknis",
    },
    company: "@cewekcoding",
    date: {
      en: "Jan 2026 — Present",
      id: "Jan 2026 — Sekarang",
    },
    description: {
      en: [
        "Founded and grew a programming-focused educational platform with over 2,800 followers by creating content around software development, developer culture, and engineering best practices.",
        "Produced educational content covering web development, JavaScript ecosystems, career growth, and real-world software engineering experiences through short-form media.",
        "Focused on simplifying complex technical concepts into accessible and engaging content for students, junior developers, and aspiring engineers.",
      ],
      id: [
        "Mendirikan dan mengembangkan platform edukasi berfokus pemrograman dengan lebih dari 2.800 pengikut dengan membuat konten seputar pengembangan perangkat lunak, budaya developer, dan praktik terbaik rekayasa.",
        "Memproduksi konten edukasi yang mencakup web development, ekosistem JavaScript, pertumbuhan karier, dan pengalaman rekayasa perangkat lunak dunia nyata melalui media berdurasi pendek.",
        "Berfokus pada penyederhanaan konsep teknis yang kompleks menjadi konten yang dapat diakses dan menarik bagi siswa, developer junior, dan calon insinyur.",
      ],
    },
    tags: [
    "Technical Writing",
    'Content Creation',
    'Developer Advocacy',
    'Programming Education',
    'Community Building',
    'Personal Branding'
  ],
},
  {
    title: {
      en: "AI Content Creator",
      id: "Kreator Konten AI",
    },
    company: "BLACKBOX AI",
    date: {
      en: "May 2026",
      id: "Mei 2026",
    },
    description: {
      en: [
        "Collaborated with the BLACKBOX AI team in producing educational content focused on AI-powered development workflows and developer productivity tools.",
        "Created technical content demonstrating practical use cases of AI-assisted programming, software development acceleration, and modern engineering practices for broader developer audiences.",
        "Contributed to increasing awareness and adoption of AI tools within the software engineering community through engaging and accessible content formats.",
      ],
      id: [
        "Berkolaborasi dengan tim BLACKBOX AI dalam memproduksi konten edukasi yang berfokus pada alur kerja pengembangan bertenaga AI dan alat produktivitas developer.",
        "Membuat konten teknis yang mendemonstrasikan kasus penggunaan praktis dari pemrograman berbantuan AI, akselerasi pengembangan perangkat lunak, dan praktik rekayasa modern untuk audiens developer yang lebih luas.",
        "Berkontribusi pada peningkatan kesadaran dan adopsi alat AI dalam komunitas rekayasa perangkat lunak melalui format konten yang menarik dan mudah diakses.",
      ],
    },
    tags: [
      "Artificial Intelligence",
      "Content Creation",
      "Developer Productivity",
      "Technical Communication",
      "AI Tools",
    ],
  },
  {
    title: {
      en: "Coordinator of Game Programming Laboratory Assistants",
      id: "Koordinator Asisten Laboratorium Game Programming",
    },
    company: "Pasundan University",
    date: {
      en: "Feb 2023 — May 2023",
      id: "Feb 2023 — Mei 2023",
    },
    description: {
      en: [
        "Led and coordinated a team of laboratory assistants for the Game Programming course, ensuring effective learning experiences and smooth laboratory operations.",
        "Provided mentorship and technical guidance on game development concepts, Unity projects, and programming best practices while acting as a bridge between lecturers and students.",
      ],
      id: [
        "Memimpin dan mengoordinasikan tim asisten laboratorium untuk mata kuliah Game Programming, memastikan pengalaman belajar yang efektif dan kelancaran operasi laboratorium.",
        "Memberikan bimbingan dan arahan teknis tentang konsep pengembangan game, proyek Unity, dan praktik terbaik pemrograman sembari bertindak sebagai jembatan antara dosen dan mahasiswa.",
      ],
    },
    tags: ["Leadership", "Mentoring", "Team Management", "Unity", "Education"],
  },
  {
    title: {
      en: "Java, Object-Oriented Programming & Database Laboratory Assistant",
      id: "Asisten Laboratorium Java, OOP & Database",
    },
    company: "Pasundan University",
    date: {
      en: "Jan 2021 — Jan 2023",
      id: "Jan 2021 — Jan 2023",
    },
    description: {
      en: [
        "Assisted undergraduate students in programming fundamentals, Java development, object-oriented programming principles, and relational database concepts.",
        "Facilitated laboratory sessions, practical examinations, and mentoring activities while helping students strengthen their problem-solving and software engineering skills.",
      ],
      id: [
        "Membantu mahasiswa sarjana dalam dasar-dasar pemrograman, pengembangan Java, prinsip pemrograman berorientasi objek (OOP), dan konsep database relasional.",
        "Memfasilitasi sesi laboratorium, ujian praktikum, dan kegiatan bimbingan sembari membantu mahasiswa memperkuat keterampilan pemecahan masalah dan rekayasa perangkat lunak.",
      ],
    },
    tags: ["Java", "SQL", "Database", "Teaching", "Mentoring", "Education"],
  },
];

export default function Experience() {
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
      id="pengalaman"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24 relative z-40"
    >
      <SectionHeading 
        title={dict.experience.title}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
        {experienceData.map((exp, index) => (
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
                {exp.title[language]}
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 text-sm font-medium text-slate-500">
                <span className="text-slate-700">{exp.company}</span>
                <span className="hidden sm:block text-slate-300">•</span>
                <span className="text-[#FF6B4A]/80 tracking-wide">
                  {exp.date[language]}
                </span>
              </div>
              <div className="mt-3 text-sm leading-relaxed text-slate-600 space-y-3">
                {exp.description[language].map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>

              {/* Tags / Teknologi yang digunakan */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
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
