import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function ExperienceTimeline({ items }) {
  return (
    <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #818cf8 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="max-w-5xl mx-auto px-4 relative">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-slate-700/50 to-transparent" />

          <div className="space-y-8">
            {items.map((job, idx) => (
              <div key={idx} className="relative pl-14">
                {/* Dot */}
                <motion.div
                  className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-800 border-2 border-indigo-500/60 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                </motion.div>

                <motion.div
                  className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-slate-800/70 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                      <span className="text-indigo-400 font-medium">@ {job.company}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/70 border border-slate-700 px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" /> {job.period}
                      </span>
                      {job.location && (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mt-2">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
