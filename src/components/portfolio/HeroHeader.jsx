import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Download, ChevronDown, Youtube, MessageCircle, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "./data";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: `${projects.length}`, label: "Apps Delivered" },
  { value: "5", label: "Production Apps" },
];

export default function HeroHeader({ profile }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-slate-950 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #818cf8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Available badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-sm"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {profile.name}
            </h1>

            <div className="mt-3 text-xl md:text-2xl font-medium text-gradient">
              {profile.role}
            </div>

            <p className="mt-6 text-slate-400 leading-relaxed text-base md:text-lg">
              Flutter Developer with{" "}
              <span className="text-slate-200 font-medium">3+ years</span> of experience building and
              shipping production apps to{" "}
              <span className="text-indigo-300 font-medium">App Store &amp; Play Store</span> — from
              EV charging infrastructure to AI nutrition platforms. Specialized in{" "}
              <span className="text-indigo-300 font-medium">Bloc, Riverpod, GetX</span> &amp; Clean
              Architecture for{" "}
              <span className="text-slate-200 font-medium">scalable, high-performance</span> mobile
              experiences. Actively integrates AI into daily development using{" "}
              <span className="text-indigo-300 font-medium">Claude, Cursor, Base44 &amp; Antigravity</span>{" "}
              to ship faster and smarter.
            </p>

            {/* Stats */}
            <div className="mt-8 flex gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Contact row */}
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                {profile.phone}
              </a>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`}>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5">
                  <Mail className="w-4 h-4" />
                  Hire Me
                </button>
              </a>
              {profile.links.github && (
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-700 hover:border-indigo-500/60 text-slate-300 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5 bg-slate-900/50">
                    <Github className="w-4 h-4" />
                    GitHub
                  </button>
                </a>
              )}
              {profile.links.linkedin && (
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-700 hover:border-indigo-500/60 text-slate-300 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5 bg-slate-900/50">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                </a>
              )}
              {profile.links.youtube && (
                <a href={profile.links.youtube} target="_blank" rel="noreferrer">
                  <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-700 hover:border-red-500/60 text-slate-300 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5 bg-slate-900/50">
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </button>
                </a>
              )}
              {profile.links.whatsapp && (
                <a href={profile.links.whatsapp} target="_blank" rel="noreferrer">
                  <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-700 hover:border-green-500/60 text-slate-300 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5 bg-slate-900/50">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </a>
              )}
              {profile.links.codewars && (
                <a href={profile.links.codewars} target="_blank" rel="noreferrer">
                  <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-700 hover:border-indigo-500/60 text-slate-300 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5 bg-slate-900/50">
                    <Code2 className="w-4 h-4" />
                    Codewars
                  </button>
                </a>
              )}
            </div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-indigo-500 via-violet-500 to-blue-500 rounded-3xl opacity-25 blur-xl animate-pulse" />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-3xl opacity-30" />

              {/* Photo */}
              <img
                src={
                  profile.photo ||
                  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80"
                }
                alt={profile.name}
                className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl object-cover object-top shadow-2xl"
              />

              {/* Floating badge — years */}
              <motion.div
                className="absolute -bottom-4 -left-6 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xl font-bold text-white">3+</div>
                <div className="text-xs text-slate-400">Years Exp.</div>
              </motion.div>

              {/* Floating badge — flutter */}
              <motion.div
                className="absolute -top-4 -right-4 bg-indigo-600 rounded-2xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-sm font-bold text-white">Flutter</div>
                <div className="text-xs text-indigo-200">Developer</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
