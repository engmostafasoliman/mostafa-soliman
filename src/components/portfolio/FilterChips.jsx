import React from "react";

export default function FilterChips({ tags, activeTag, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`px-3.5 py-1.5 rounded-full text-sm border transition-all duration-200 ${
            activeTag === tag
              ? "bg-indigo-600 text-white border-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
              : "bg-slate-900/60 text-slate-400 border-slate-700 hover:border-indigo-500/50 hover:text-slate-200"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
