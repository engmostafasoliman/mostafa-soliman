import React from "react";
import HeroHeader from "../components/portfolio/HeroHeader";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceTimeline from "../components/portfolio/ExperienceTimeline";
import SkillsSection from "../components/portfolio/SkillsSection";
import ContactSection from "../components/portfolio/ContactSection";
import SplashScreen from "../components/portfolio/SplashScreen";
import { profile, projects, experience, skills, softSkills, education, certifications } from "@/components/portfolio/data";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react";

const navLinks = [
  { id: "projects",   label: "Projects"    },
  { id: "experience", label: "Experience"  },
  { id: "skills",     label: "Skills"      },
  { id: "contact",    label: "Contact"     },
];

export default function Portfolio() {
  const [menuOpen,   setMenuOpen]   = React.useState(false);
  const [showSplash, setShowSplash] = React.useState(true);
  const [activeNav,  setActiveNav]  = React.useState("");
  const [scrolled,   setScrolled]   = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    const el     = document.getElementById(id);
    const header = document.querySelector("header");
    if (!el) return;
    const offset  = header ? header.offsetHeight + 8 : 0;
    const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
    const doScroll = () =>
      window.scrollTo({ top: targetY, behavior: "smooth" });
    setTimeout(doScroll, 520);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {showSplash && (
        <SplashScreen
          name={profile.name}
          logoUrl={profile.photo}
          onFinish={() => setShowSplash(false)}
        />
      )}

      {/* ── Header ── */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2 font-bold text-white hover:text-indigo-300 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.4)]">
              <Code2 className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span>Mostafa Soliman</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`px-4 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  activeNav === id
                    ? "text-indigo-300 bg-indigo-950/60"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="ml-3 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-[0_0_14px_rgba(99,102,241,0.5)]"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-950 border-slate-800 text-white">
                <div className="p-6 space-y-2 mt-4">
                  {navLinks.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => handleNav(id)}
                      className="block w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors font-medium"
                    >
                      {label}
                    </button>
                  ))}
                  <a
                    href={`mailto:${profile.email}`}
                    className="block w-full text-center mt-4 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
                  >
                    Hire Me
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main id="top">
        <HeroHeader profile={profile} />
        <ProjectsSection projects={projects} />
        <ExperienceTimeline items={experience} />
        <SkillsSection
          skills={skills}
          softSkills={softSkills}
          education={education}
          certifications={certifications}
        />
        <ContactSection />
      </main>

      {/* ── Footer ── */}
      <footer className="py-10 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-white">Mostafa Soliman</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} · Built with Flutter ❤️ & Clean Code
          </p>
        </div>
      </footer>
    </div>
  );
}
