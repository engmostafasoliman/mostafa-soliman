import React from "react";
import FilterChips from "./FilterChips";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ProjectsSection({ projects }) {
  const [activeTag, setActiveTag] = React.useState("All");
  const [selected, setSelected]   = React.useState(null);
  const [open, setOpen]           = React.useState(false);
  const gridRef = React.useRef(null);
  const inView  = useInView(gridRef, { once: true, amount: 0.1 });

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
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 16,
                  transition: { duration: 0.3, ease: "easeOut", delay: i * 0.04 },
                }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
              >
                <ProjectCard project={p} onOpen={(proj) => { setSelected(proj); setOpen(true); }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <ProjectModal open={open} onOpenChange={setOpen} project={selected} />
    </section>
  );
}
