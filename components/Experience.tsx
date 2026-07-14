"use client";

import { motion, Variants } from "framer-motion";

const experienceData = [
  {
    title: "Frontend Engineer",
    company: "PT Lintas Cakra Cipta",
    date: "Oct 2025 — Present",
    description: [
      "Develop and maintain business-critical web applications using Next.js and TypeScript, ranging from corporate websites and booking platforms to enterprise CRM solutions.",
      "Led frontend implementation of an internal Salesforce platform featuring KPI tracking, sales pipeline management, quotation and offering approvals, customer management, transaction reporting, and revenue analytics.",
      "Built multi-level approval workflows, role-based access control using Better Auth, dashboard visualizations, geolocation-based field activity tracking, image uploads, and Excel export functionality.",
      "Designed reusable UI systems including layouts, typography, cards, buttons, and utility components to improve consistency and scalability across multiple products.",
      "Focused on Server Actions, SSR, performance optimization, responsive design, and maintainable frontend architecture.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Better Auth",
      "Server Actions",
      "SSR",
      "RBAC",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "PT Dwi Purwa Teknologi",
    date: "Mar 2024 — Sept 2025",
    description: [
      "Developed enterprise applications and government systems using Laravel and PostgreSQL, focusing on data-intensive business processes and long-term operational systems.",
      "Contributed to a military GIS platform utilizing ArcGIS libraries for geospatial visualization, operational mapping, and strategic information display.",
      "Built command center dashboard modules displaying weather information, business intelligence metrics, heatmaps, and organizational insights.",
      "Developed a digital archive system for military psychological assessments, psychograms, achievements, certificates, and personnel records dating back to the 1980s.",
      "Participated in database design, business requirement analysis, and technical documentation for enterprise software projects.",
    ],
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
    title: "Freelance Web Developer",
    company: "Remote",
    date: "2023 — Present",
    description: [
      "Delivered custom web solutions for clients including corporate websites, booking systems, dashboards, and geospatial applications.",
      "Worked closely with clients throughout the development lifecycle from requirement gathering and UI implementation to deployment and maintenance.",
      "Focused on creating responsive interfaces, improving SEO performance, and building maintainable frontend architectures.",
    ],
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
  title: 'Technical Content Creator',
  company: '@cewekcoding',
  date: 'Jan 2026 — Present',
  description: [
    "Founded and grew a programming-focused educational platform with over 2,800 followers by creating content around software development, developer culture, and engineering best practices.",
    "Produced educational content covering web development, JavaScript ecosystems, career growth, and real-world software engineering experiences through short-form media.",
    "Focused on simplifying complex technical concepts into accessible and engaging content for students, junior developers, and aspiring engineers.",
  ],
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
    title: "AI Content Creator",
    company: "BLACKBOX AI",
    date: "May 2026",
    description: [
      "Collaborated with the BLACKBOX AI team in producing educational content focused on AI-powered development workflows and developer productivity tools.",
      "Created technical content demonstrating practical use cases of AI-assisted programming, software development acceleration, and modern engineering practices for broader developer audiences.",
      "Contributed to increasing awareness and adoption of AI tools within the software engineering community through engaging and accessible content formats.",
    ],
    tags: [
      "Artificial Intelligence",
      "Content Creation",
      "Developer Productivity",
      "Technical Communication",
      "AI Tools",
    ],
  },
  {
    title: "Coordinator of Game Programming Laboratory Assistants",
    company: "Pasundan University",
    date: "Feb 2023 — May 2023",
    description: [
      "Led and coordinated a team of laboratory assistants for the Game Programming course, ensuring effective learning experiences and smooth laboratory operations.",
      "Provided mentorship and technical guidance on game development concepts, Unity projects, and programming best practices while acting as a bridge between lecturers and students.",
    ],
    tags: ["Leadership", "Mentoring", "Team Management", "Unity", "Education"],
  },
  {
    title: "Java, Object-Oriented Programming & Database Laboratory Assistant",
    company: "Pasundan University",
    date: "Jan 2021 — Jan 2023",
    description: [
      "Assisted undergraduate students in programming fundamentals, Java development, object-oriented programming principles, and relational database concepts.",
      "Facilitated laboratory sessions, practical examinations, and mentoring activities while helping students strengthen their problem-solving and software engineering skills.",
    ],
    tags: ["Java", "SQL", "Database", "Teaching", "Mentoring", "Education"],
  },
];

export default function Experience() {
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
      <h3 className="text-xl font-bold text-slate-900 mb-8 lg:hidden uppercase tracking-widest">
        Pengalaman
      </h3>

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
                {exp.title}
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 text-sm font-medium text-slate-500">
                <span className="text-slate-700">{exp.company}</span>
                <span className="hidden sm:block text-slate-300">•</span>
                <span className="text-[#FF6B4A]/80 tracking-wide">
                  {exp.date}
                </span>
              </div>
              <div className="mt-3 text-sm leading-relaxed text-slate-600 space-y-3">
                {exp.description.map((desc, idx) => (
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
