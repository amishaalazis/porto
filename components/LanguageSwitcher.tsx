"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-[#FFF9F5]/70 backdrop-blur-md p-1 rounded-full border border-[#FF6B4A]/20 shadow-sm">
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-3 py-1.5 text-xs font-bold rounded-full transition-colors z-10 ${
          language === "en" ? "text-white" : "text-slate-500 hover:text-[#FF6B4A]"
        }`}
      >
        {language === "en" && (
          <motion.div
            layoutId="active-lang-bg"
            className="absolute inset-0 bg-[#FF6B4A] rounded-full -z-10 shadow-sm"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}
        EN
      </button>
      <button
        onClick={() => setLanguage("id")}
        className={`relative px-3 py-1.5 text-xs font-bold rounded-full transition-colors z-10 ${
          language === "id" ? "text-white" : "text-slate-500 hover:text-[#FF6B4A]"
        }`}
      >
        {language === "id" && (
          <motion.div
            layoutId="active-lang-bg"
            className="absolute inset-0 bg-[#FF6B4A] rounded-full -z-10 shadow-sm"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}
        ID
      </button>
    </div>
  );
}
