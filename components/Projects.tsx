"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const projectData = [
  {
    title: "Internal Salesforce Platform",
    category: {
      en: "Enterprise Internal Tool",
      id: "Alat Internal Perusahaan",
    },
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    client: "Internal Business Operations",
    period: { en: "2025 - Present", id: "2025 - Sekarang" },

    description: {
      en: "An internal CRM and sales management platform designed to centralize business operations, sales activities, customer management, and revenue reporting across multiple teams.",
      id: "Platform CRM dan manajemen penjualan internal yang dirancang untuk memusatkan operasi bisnis, aktivitas penjualan, manajemen pelanggan, dan pelaporan pendapatan di berbagai tim.",
    },

    contributions: [
      "Frontend architecture design and implementation",
      "Role-based access control implementation using Better Auth",
      "Dashboard development and analytics visualization",
      "Approval workflow implementation",
      "Reusable component and design system development",
      "Server Actions implementation",
    ],

    highlights: [
      "Implemented role-based access control for Sales, Supervisors, Managers, and Administrators.",
      "Developed multi-level approval workflows for quotations and offerings.",
      "Built analytics dashboards including revenue reporting, sales leaderboards, target versus actual metrics, and team performance insights.",
      "Implemented field activity tracking with geolocation validation and image uploads.",
      "Added Excel export functionality for visits, transactions, and activity reports.",
      "Designed reusable UI systems and shared components for scalable development.",
    ],

    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Better Auth",
      "Tailwind CSS",
      "Server Actions",
      "SSR",
    ],

    image: "/porto-sales.png",

    teamSize: { en: "2 Developers", id: "2 Developer" },
    live: false,
    github: null,
    demo: null,
  },

  {
    title: "Casanela Villa Booking Platform",
    category: { en: "Booking Platform", id: "Platform Pemesanan" },
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    client: "Casanela Villa",
    period: { en: "2025 - Present", id: "2025 - Sekarang" },

    description: {
      en: "A booking and reservation platform developed to simplify villa reservations, add-on services, and administrative workflows.",
      id: "Platform pemesanan dan reservasi yang dikembangkan untuk menyederhanakan pemesanan vila, layanan tambahan, dan alur kerja administratif.",
    },

    contributions: [
      "Booking flow implementation",
      "Frontend architecture",
      "Administrative dashboard development",
      "Responsive UI development",
      "SEO optimization",
    ],

    highlights: [
      "Developed customer booking and reservation workflows.",
      "Built administrative dashboards for booking management.",
      "Implemented villa add-on service management.",
      "Optimized booking experiences for desktop and mobile users.",
      "Applied search engine optimization and performance best practices.",
    ],

    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Booking System",
    ],

    image: "/porto-casanela.png",

    teamSize: { en: "2 Developers", id: "2 Developer" },
    live: true,
    github: null,
    demo: "https://casanelavilla.com",
  },
  {
    title: "Saung Diajar Community Platform",
    category: {
      en: "Community Education Platform",
      id: "Platform Edukasi Komunitas",
    },
    role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
    client: "Saung Diajar",
    period: { en: "2025", id: "2025" },

    description: {
      en: "A community-driven educational platform developed to support literacy initiatives, educational activities, and knowledge sharing for local communities in Bandung.",
      id: "Platform pendidikan berbasis komunitas yang dikembangkan untuk mendukung inisiatif literasi, kegiatan pendidikan, dan berbagi pengetahuan untuk komunitas lokal di Bandung.",
    },

    contributions: [
      "Frontend and backend implementation",
      "Authentication system implementation",
      "Blog platform development",
      "Content management integration",
      "Deployment and maintenance",
    ],

    highlights: [
      "Developed a public-facing platform for educational and community initiatives.",
      "Implemented authentication and user management using Supabase Auth.",
      "Built a blog and content management system to support educational content publishing.",
      "Integrated Supabase as the backend service for authentication and database management.",
      "Designed responsive interfaces optimized for accessibility across devices.",
      "Successfully deployed and maintained the platform in a production environment.",
    ],

    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Supabase Auth",
      "PostgreSQL",
      "Blog CMS",
      "SSR",
      "Tailwind CSS",
    ],

    image: "/porto-saung.webp",

    teamSize: { en: "1 Developer", id: "1 Developer" },
    live: true,
    github: null,
    demo: "https://www.saungdiajar.site",
  },

  {
    title: "Rajaderek Corporate Website",
    category: { en: "Corporate Website", id: "Situs Perusahaan" },
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    client: "Rajaderek",
    period: { en: "2025", id: "2025" },

    description: {
      en: "A corporate website and blog platform developed to improve digital presence and support content-driven marketing strategies.",
      id: "Situs web perusahaan dan platform blog yang dikembangkan untuk meningkatkan kehadiran digital dan mendukung strategi pemasaran berbasis konten.",
    },

    contributions: [
      "Frontend development",
      "Blog implementation",
      "SEO optimization",
      "Server-side rendering implementation",
    ],

    highlights: [
      "Developed responsive corporate website interfaces.",
      "Implemented integrated blog functionality.",
      "Applied server-side rendering and SEO optimization techniques.",
      "Built using modern Next.js architecture and Server Actions.",
    ],

    tags: ["Next.js", "TypeScript", "Neon", "SSR", "SEO"],

    image: "/porto-rd.webp",

    teamSize: { en: "1 Developer", id: "1 Developer" },
    live: true,
    github: null,
    demo: "https://rajaderek.com",
  },

  {
    title: "Lintas Cakra Cipta Corporate Website",
    category: { en: "Corporate Website", id: "Situs Perusahaan" },
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    client: "Lintas Cakra Cipta",
    period: { en: "2025", id: "2025" },

    description: {
      en: "A corporate profile and content platform developed with a strong focus on maintainability, scalability, and search engine visibility.",
      id: "Profil perusahaan dan platform konten yang dikembangkan dengan fokus kuat pada kemudahan pemeliharaan, skalabilitas, dan visibilitas mesin pencari.",
    },

    contributions: [
      "Frontend development",
      "Blog implementation",
      "SEO optimization",
      "Responsive interface development",
    ],

    highlights: [
      "Developed service pages and corporate profile sections.",
      "Implemented integrated blog functionality.",
      "Optimized website performance and responsiveness.",
      "Applied server-side rendering and content optimization strategies.",
    ],

    tags: ["Next.js", "TypeScript", "Neon", "SSR", "SEO"],

    image: "/porto-lcc.webp",

    teamSize: { en: "1 Developers", id: "1 Developer" },
    live: true,
    github: null,
    demo: "https://lintascakracipta.com",
  },

  {
    title: "Enterprise Digital Archive Platform",
    category: { en: "Enterprise Application", id: "Aplikasi Enterprise" },
    role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
    client: "Enterprise Organization",
    period: { en: "2024 - 2025", id: "2024 - 2025" },

    description: {
      en: "An enterprise digital archive platform developed to support historical record management, document retrieval, certification tracking, and personnel information management.",
      id: "Platform arsip digital perusahaan yang dikembangkan untuk mendukung manajemen rekaman sejarah, pengambilan dokumen, pelacakan sertifikasi, dan manajemen informasi personel.",
    },

    contributions: [
      "Backend development",
      "Database implementation",
      "Business process implementation",
      "System maintenance",
    ],

    highlights: [
      "Developed modules for long-term archival and historical record retrieval.",
      "Implemented document management for certifications and achievements.",
      "Supported historical data preservation spanning multiple decades.",
      "Collaborated on database schema design and business workflow implementation.",
    ],

    tags: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Enterprise System",
      "Digital Archive",
    ],

    image: "/porto-sisfo.png",

    teamSize: { en: "3 Developers", id: "3 Developer" },
    live: false,
    github: null,
    demo: null,
  },

  {
    title: "Geospatial Intelligence Dashboard",
    category: { en: "GIS Application", id: "Aplikasi GIS" },
    role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
    client: "Enterprise Organization",
    period: { en: "2024 - 2025", id: "2024 - 2025" },

    description: {
      en: "A geospatial analytics platform developed to support operational monitoring through maps, weather information, heatmaps, and spatial visualization.",
      id: "Platform analitik geospasial yang dikembangkan untuk mendukung pemantauan operasional melalui peta, informasi cuaca, peta panas (heatmap), dan visualisasi spasial.",
    },

    contributions: [
      "GIS feature development",
      "ArcGIS integration",
      "Dashboard implementation",
      "Database development",
    ],

    highlights: [
      "Integrated ArcGIS libraries for geospatial visualization.",
      "Developed weather information dashboards and heatmap visualizations.",
      "Built operational monitoring modules and geospatial reporting features.",
      "Implemented spatial analytics and business intelligence dashboards.",
    ],

    tags: ["Laravel", "ArcGIS", "PostgreSQL", "GIS", "Data Visualization"],

    image: "/porto-bms.png",

    teamSize: { en: "2 Developers", id: "2 Developer" },
    live: false,
    github: null,
    demo: null,
  },

  {
    title: "Community & Cultural Information Platforms (Gunung Padang and Lamajang Village)",
    role: "Freelance Web Developer",
    company: "Remote",
    year: "2024",
    status: "Archived",

    description:
      "Developed public-facing information platforms for cultural heritage and local community initiatives, focusing on content accessibility, public communication, and digital presence.",

    highlights: [
      "Developed responsive information portals for public audiences and local communities.",
      "Implemented content management functionality for news, announcements, and educational materials.",
      "Designed mobile-friendly interfaces to improve accessibility across devices.",
      "Supported digital transformation initiatives for cultural heritage promotion and local communities.",
      "Delivered projects for historical, tourism, educational, and public information purposes.",
    ],

    tags: ["Bootstrap", "Materialize", "CMS", "Responsive Design"],

    image: "/porto-desa.png",

    github: null,
    demo: null,
    live: false,
  },
];

export default function Projects() {
  const { language, dict } = useLanguage();
  return (
    <section
      id="project"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
    >
      <SectionHeading
        title={dict.projects.title}
        icon={
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        }
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.2 }}
        className="group/list space-y-12"
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            role={project.role?.[language]}
            company={project.client}
            year={project.period?.[language]}
            description={project.description[language]}
            highlights={project.highlights}
            tags={project.tags}
            image={project.image}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </motion.div>
    </section>
  );
}
