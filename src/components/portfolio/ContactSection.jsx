import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import { Mail, Github, Linkedin, Phone, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "./data";

const contactLinks = [
  { icon: Mail,     label: "Email",    value: profile.email,          href: `mailto:${profile.email}` },
  { icon: Phone,    label: "Phone",    value: profile.phone,          href: `tel:${profile.phone}` },
  { icon: Github,   label: "GitHub",   value: "engmostafasoliman",    href: profile.links.github },
  { icon: Linkedin, label: "LinkedIn", value: "mostafa-elsayed",      href: profile.links.linkedin },
];

export default function ContactSection() {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent]       = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formEl = e.currentTarget;
    const form   = new FormData(formEl);
    const name    = form.get("name");
    const email   = form.get("email");
    const message = form.get("message");

    await base44.entities.ContactMessage.create({ name, email, message });

    if (await base44.auth.isAuthenticated()) {
      const me = await base44.auth.me();
      await base44.integrations.Core.SendEmail({
        to: me.email,
        subject: `New contact message from ${name}`,
        body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
    }

    setSent(true);
    setLoading(false);
    formEl?.reset();
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 -translate-x-1/2 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Let's Talk</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="mt-3 text-slate-400 max-w-md mx-auto">
            Open for freelance projects, full-time roles, and exciting collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Direct contact links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-slate-300 font-semibold mb-6">Direct Links</h3>
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-indigo-500/50 transition-colors">
                  <Icon className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
                  <div className="text-slate-200 text-sm font-medium mt-0.5 group-hover:text-indigo-300 transition-colors">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-slate-300 font-semibold mb-6">Send a Message</h3>
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                <p className="text-white font-medium text-lg">Message Sent!</p>
                <p className="text-slate-400 text-sm">Thanks! I'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="mt-2 text-indigo-400 text-sm hover:underline">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 rounded-xl"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 rounded-xl"
                />
                <Textarea
                  name="message"
                  placeholder="Your message…"
                  rows={5}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 rounded-xl resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 disabled:opacity-60 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
