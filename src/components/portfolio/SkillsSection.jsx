import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, CheckCircle2 } from "lucide-react";

const categoryIcons = {
  "Languages & Frameworks": "⚡",
  "Architecture & State Mgmt": "🏗️",
  "APIs & Networking": "🌐",
  "Storage": "🗄️",
  "Testing": "🧪",
  "Tools & Services": "🔧",
  "Integrations": "🔗",
  "Other": "✨",
};

export default function SkillsSection({ skills, softSkills, education, certifications }) {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Knowledge</h2>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 hover:bg-slate-900/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{categoryIcons[group.category] || "🔹"}</span>
                <h3 className="text-slate-200 font-semibold text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom grid: Soft skills | Education | Certifications */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Soft Skills */}
          <motion.div
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Soft Skills
            </h3>
            <ul className="space-y-2.5">
              {softSkills.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" /> Education
            </h3>
            <div className="bg-indigo-950/40 border border-indigo-500/15 rounded-xl p-4">
              <div className="text-slate-200 font-medium text-sm">{education.degree}</div>
              <div className="text-indigo-300 text-sm mt-1">{education.school}</div>
              <div className="text-slate-500 text-xs mt-1">{education.period}</div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" /> Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((c) => {
                const title = typeof c === "string" ? c : c.title;
                const url   = typeof c === "string" ? "" : c.url;
                return url ? (
                  <li key={title}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors group"
                    >
                      <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="hover:underline underline-offset-2">{title}</span>
                    </a>
                  </li>
                ) : (
                  <li key={title} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-indigo-500 mt-0.5 flex-shrink-0">▸</span>
                    {title}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
