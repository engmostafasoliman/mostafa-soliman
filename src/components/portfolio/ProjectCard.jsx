import React from "react";
import { ExternalLink, Smartphone, FileText, Eye } from "lucide-react";

export default function ProjectCard({ project, onOpen }) {
  const hasStore = project.links?.appStore || project.links?.playStore;
  const hasPdf   = project.links?.pdf;

  return (
    <div
      className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] flex flex-col"
      onClick={() => onOpen(project)}
    >
      {/* Image area */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        {project.images?.length >= 3 ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-0.5 h-full">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover col-span-1 row-span-2 transition-transform duration-500 group-hover:scale-105"
            />
            <img
              src={project.images[1]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <img
              src={project.images[2]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

        {/* Store / PDF / Website badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {project.links?.appStore && (
            <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300">
              <Smartphone className="w-2.5 h-2.5" /> App Store
            </span>
          )}
          {project.links?.playStore && (
            <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300">
              <Smartphone className="w-2.5 h-2.5" /> Play Store
            </span>
          )}
          {hasPdf && !hasStore && (
            <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300">
              <FileText className="w-2.5 h-2.5" /> Case Study
            </span>
          )}
          {project.links?.website && !hasStore && (
            <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300">
              <ExternalLink className="w-2.5 h-2.5" /> Live Site
            </span>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 text-white font-semibold text-sm bg-indigo-600/90 px-4 py-2 rounded-full">
            <Eye className="w-4 h-4" />
            View Details
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-base leading-snug">{project.title}</h3>
        <p className="mt-1.5 text-slate-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {project.summary}
        </p>

        {/* Tech pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-950/70 border border-indigo-500/20 text-indigo-300"
            >
              {t}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Links row */}
        {(project.links?.appStore || project.links?.playStore || project.links?.pdf || project.links?.website) && (
          <div
            className="mt-4 flex gap-2 pt-4 border-t border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> App Store
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> Play Store
              </a>
            )}
            {project.links.pdf && (
              <a
                href={project.links.pdf}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <FileText className="w-3 h-3" /> Case Study
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> Live Site
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
