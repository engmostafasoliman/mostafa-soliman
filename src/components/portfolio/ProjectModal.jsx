import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, FileText, Github, Smartphone, Globe } from "lucide-react";

export default function ProjectModal({ open, onOpenChange, project }) {
  if (!project) return null;

  const links = project.links || {};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl max-h-[88vh] overflow-y-auto border border-slate-700 text-white p-0 gap-0 rounded-2xl"
        style={{ backgroundColor: '#0f172a' }}
      >

        {/* Image */}
        <div className="w-full h-52 overflow-hidden rounded-t-2xl flex-shrink-0">
          {project.images?.length >= 3 ? (
            <div className="grid grid-cols-2 grid-rows-2 gap-0.5 h-full">
              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover col-span-1 row-span-2" />
              <img src={project.images[1]} alt={project.title} className="w-full h-full object-cover" />
              <img src={project.images[2]} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          )}
        </div>

        <div className="p-6 space-y-5">
          {/* Title */}
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold">{project.title}</DialogTitle>
          </DialogHeader>

          {/* Lead description — full if available, fallback to summary */}
          <p className="text-slate-300 leading-relaxed">
            {project.description || project.summary}
          </p>

          {/* Problem */}
          {project.problem && (
            <Section title="Problem">
              <p className="text-slate-400 leading-relaxed">{project.problem}</p>
            </Section>
          )}

          {/* Solution */}
          {project.solution && (
            <Section title="Solution">
              <p className="text-slate-400 leading-relaxed">{project.solution}</p>
            </Section>
          )}

          {/* Challenges */}
          {project.challenges?.length > 0 && (
            <Section title="Technical Challenges">
              <ul className="space-y-1.5">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-2 text-slate-400 text-sm">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>{c}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Achievements */}
          {project.achievements?.length > 0 && (
            <Section title="Key Achievements">
              <ul className="space-y-1.5">
                {project.achievements.map((a, i) => (
                  <li key={i} className="flex gap-2 text-slate-400 text-sm">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>{a}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Technologies */}
          <Section title="Technologies Used">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies?.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/25 text-indigo-300 capitalize">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {/* Links */}
          {(links.appStore || links.playStore || links.pdf || links.github || links.website) && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              {links.website && (
                <LinkButton href={links.website} icon={Globe} label="Live Site" />
              )}
              {links.appStore && (
                <LinkButton href={links.appStore} icon={Smartphone} label="App Store" />
              )}
              {links.playStore && (
                <LinkButton href={links.playStore} icon={Smartphone} label="Play Store" />
              )}
              {links.pdf && (
                <LinkButton href={links.pdf} icon={FileText} label="Case Study" />
              )}
              {links.github && (
                <LinkButton href={links.github} icon={Github} label="GitHub" />
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-2">{title}</h4>
      {children}
    </div>
  );
}

function LinkButton({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-sm hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-200"
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
}
