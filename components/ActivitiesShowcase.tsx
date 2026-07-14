"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Volunteer Teacher",
    organization: "Saung Diajar",
    date: "2024 — Present",
    image: "/assets/activities/saung-diajar.webp",

    description:
      "Contributing as a volunteer educator in a social community initiative focused on improving access to education for children and local communities in Bandung.",

    highlights: [
      "Provided educational support and mentoring sessions for students.",
      "Participated in community-based educational programs.",
      "Collaborated with volunteers to organize learning activities and educational events.",
      "Supported initiatives promoting equal access to education.",
    ],
  },

  {
    title: "Programming Content Creator",
    organization: "Personal Brand",
    date: "2024 — Present",
    image: "/assets/activities/content-creator.webp",

    description:
      "Creating educational and entertainment-focused programming content related to software engineering, developer culture, and modern web development.",

    highlights: [
      "Produced short-form technical content for developers and students.",
      "Simplified complex technical concepts into accessible learning materials.",
      "Collaborated with technology and hosting companies.",
      "Built engagement within the developer community.",
    ],
  },

  {
    title: "General Treasurer",
    organization: "Student Organization",
    date: "2021 — 2023",
    image: "/assets/activities/organization.webp",

    description:
      "Managed budgeting, financial administration, and reporting activities for student programs and organizational events.",

    highlights: [
      "Prepared financial reports and budgeting plans.",
      "Managed organizational expenditures and cash flow.",
      "Collaborated with multiple divisions for event execution.",
    ],
  },

  {
    title: "Faculty Representative for Outstanding Student Program",
    organization: "Faculty of Engineering",
    date: "2021",
    image: "/assets/activities/outstanding-student.webp",

    description:
      "Selected as the Faculty of Engineering representative for the university-level Outstanding Student selection program.",

    highlights: [
      "Represented the faculty at the university selection stage.",
      "Evaluated based on academic achievement, leadership, and organizational contributions.",
    ],
  },

  {
    title: "Laboratory Assistant & Coordinator",
    organization: "Pasundan University",
    date: "2021 — 2023",
    image: "/assets/activities/laboratory.webp",

    description:
      "Assisted practical sessions in Java Programming, Object-Oriented Programming, Database Systems, and Game Programming courses while coordinating assistant activities.",

    highlights: [
      "Provided mentoring and technical guidance to students.",
      "Supported laboratory operations and practical sessions.",
      "Coordinated assistant schedules and learning activities.",
    ],
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
      transition: { type: "spring", stiffness: 60, damping: 8 },
    },
  };

  return (
    <section
      id="kegiatan"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24 relative z-40"
    >
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
              boxShadow: "0px 20px 40px rgba(255, 107, 74, 0.20)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="group relative flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-[#FF6B4A]/5 overflow-hidden transition-shadow duration-300 hover:shadow-lg origin-left relative z-10"
          >
            <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 relative shrink-0">
              <Image
                src={activity.image}
                alt={activity.title}
                width={300}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="z-10 w-full md:w-2/3 pt-2 md:pt-0 flex flex-col justify-center relative z-20">
              <h4 className="font-semibold leading-tight text-slate-900 text-lg group-hover:text-[#FF6B4A] transition-colors">
                {activity.title}
              </h4>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1.5 text-sm font-medium text-slate-500">
                <span className="text-slate-700">{activity.organization}</span>
                <span className="hidden sm:block text-slate-300">•</span>
                <span className="text-[#FF6B4A]/80 tracking-wide">{activity.date}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {activity.description}
              </p>

              {activity.highlights && activity.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {activity.highlights.map((highlight, idx) => (
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
