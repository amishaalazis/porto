"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Internal Salesforce Platform",
    category: "Enterprise Internal Tool",
    role: "Frontend Engineer",
    client: "Internal Business Operations",
    period: "2025 - Present",

    description:
      "An internal CRM and sales management platform designed to centralize business operations, sales activities, customer management, and revenue reporting across multiple teams.",

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
      "RBAC",
      "SSR",
    ],

    image: "/projects/salesforce.webp",

    teamSize: "5 Developers",
    live: false,
    github: null,
    demo: null,
  },

  {
    title: "Casanela Villa Booking Platform",
    category: "Booking Platform",
    role: "Frontend Engineer",
    client: "Casanela Villa",
    period: "2025 - Present",

    description:
      "A booking and reservation platform developed to simplify villa reservations, add-on services, and administrative workflows.",

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

    image: "/projects/casanela.webp",

    teamSize: "4 Developers",
    live: true,
    github: null,
    demo: "https://casanelavilla.com",
  },

  {
    title: "Rajaderek Corporate Website",
    category: "Corporate Website",
    role: "Frontend Engineer",
    client: "Rajaderek",
    period: "2025",

    description:
      "A corporate website and blog platform developed to improve digital presence and support content-driven marketing strategies.",

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

    image: "/projects/rajaderek.webp",

    teamSize: "3 Developers",
    live: true,
    github: null,
    demo: "https://rajaderek.com",
  },

  {
    title: "Lintas Cakra Cipta Corporate Website",
    category: "Corporate Website",
    role: "Frontend Engineer",
    client: "Lintas Cakra Cipta",
    period: "2025",

    description:
      "A corporate profile and content platform developed with a strong focus on maintainability, scalability, and search engine visibility.",

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

    image: "/projects/lcc.webp",

    teamSize: "3 Developers",
    live: true,
    github: null,
    demo: "https://lintascakracipta.com",
  },

  {
    title: "Enterprise Digital Archive Platform",
    category: "Enterprise Application",
    role: "Full-Stack Developer",
    client: "Enterprise Organization",
    period: "2024 - 2025",

    description:
      "An enterprise digital archive platform developed to support historical record management, document retrieval, certification tracking, and personnel information management.",

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

    image: "/projects/archive.webp",

    teamSize: "4 Developers",
    live: false,
    github: null,
    demo: null,
  },

  {
    title: "Geospatial Intelligence Dashboard",
    category: "GIS Application",
    role: "Full-Stack Developer",
    client: "Enterprise Organization",
    period: "2024 - 2025",

    description:
      "A geospatial analytics platform developed to support operational monitoring through maps, weather information, heatmaps, and spatial visualization.",

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

    tags: [
      "Laravel",
      "ArcGIS",
      "PostgreSQL",
      "GIS",
      "Data Visualization",
    ],

    image: "/projects/gis.webp",

    teamSize: "5 Developers",
    live: false,
    github: null,
    demo: null,
  },

  {
    title: "Spatial Planning Geographic Information System",
    category: "GIS Application",
    role: "Freelance Web Developer",
    client: "Private Client",
    period: "2024",

    description:
      "An interactive GIS platform integrating ArcGIS services to visualize zoning information and spatial planning data.",

    contributions: [
      "Map integration",
      "Frontend development",
      "Spatial visualization implementation",
    ],

    highlights: [
      "Integrated ArcGIS services for map rendering.",
      "Built interactive zoning and layer visualizations.",
      "Implemented responsive map interfaces.",
      "Optimized performance for large spatial datasets.",
    ],

    tags: ["Next.js", "ArcGIS", "Tailwind CSS", "GIS"],

    image: "/projects/spatial-planning.webp",

    teamSize: "2 Developers",
    live: false,
    github: null,
    demo: null,
  },

  {
    title: "Gunung Padang Cultural Heritage Website",
    category: "Public Information Website",
    role: "Freelance Web Developer",
    client: "Gunung Padang Tourism Initiative",
    period: "2023",

    description:
      "A public-facing website developed to promote historical information, tourism activities, and educational content related to the Gunung Padang archaeological site.",

    contributions: [
      "Frontend development",
      "Content presentation design",
      "Responsive interface development",
    ],

    highlights: [
      "Developed responsive public-facing website interfaces.",
      "Implemented content-focused page structures for educational materials.",
      "Optimized accessibility and mobile experiences.",
      "Supported tourism promotion and public engagement initiatives.",
    ],

    tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],

    image: "/projects/gunung-padang.webp",

    teamSize: "1 Developer",
    status: "Archived",
    live: false,
    github: null,
    demo: null,
  },

  {
    title: "Lamajang Village Information Portal",
    category: "Public Service Platform",
    role: "Freelance Web Developer",
    client: "Lamajang Village Administration",
    period: "2023",

    description:
      "A village information portal developed to provide public information, announcements, local news, and community activities.",

    contributions: [
      "Frontend development",
      "CMS implementation",
      "Responsive interface development",
    ],

    highlights: [
      "Developed responsive interfaces for public users.",
      "Implemented content management functionality for announcements and news.",
      "Designed accessible interfaces for citizens and local administrators.",
      "Supported local digital transformation initiatives.",
    ],

    tags: ["Laravel", "PHP", "MySQL", "CMS"],

    image: "/projects/lamajang.webp",

    teamSize: "1 Developer",
    status: "Archived",
    live: false,
    github: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
    >
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-8 lg:hidden uppercase tracking-widest">
        Projects
      </h3>

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
            role={project.role}
            company={project.client}
            year={project.period}
            description={project.description}
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
