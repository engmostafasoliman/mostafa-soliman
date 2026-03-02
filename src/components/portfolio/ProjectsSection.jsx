import React from "react";
import FilterChips from "./FilterChips";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection({ projects }) {
  const [activeTag, setActiveTag] = React.useState("All");
  const [selected, setSelected]   = React.useState(null);
  const [open, setOpen]           = React.useState(false);

  const allTags = React.useMemo(() => {
    const tags = projects.flatMap(p => (p.technologies || []).map(t => t.trim()));
    return Array.from(new Set(tags)).sort();
  }, [projects]);

  const visible = React.useMemo(() => {
    const tag = (activeTag || "All").trim();
    if (tag === "All") return projects;
    const filtered = projects.filter(p => (p.technologies || []).some(t => t.trim() === tag));
    return filtered.length ? filtered : projects;
  }, [activeTag, projects]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mb-20" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-400">Real-world apps built for production and beyond</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <FilterChips tags={allTags} activeTag={activeTag} onChange={setActiveTag} />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                layout
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
              >
                <ProjectCard project={p} onOpen={(proj) => { setSelected(proj); setOpen(true); }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <ProjectModal open={open} onOpenChange={setOpen} project={selected} />
    </section>
  );
}
