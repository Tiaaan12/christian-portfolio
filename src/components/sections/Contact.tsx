"use client";

import { motion } from "framer-motion";
import { Globe, Link, Mail, MapPin, FileText } from "lucide-react";
import { useState } from "react";
import { socials } from "@/data/socials";

const icons = {
  GitHub: Globe,
  LinkedIn: Link,
  Email: Mail,
  Resume: FileText,
  Location: MapPin,
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">Open to collaborative, ambitious work.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Whether it is an AI product, an automation challenge, or a research-heavy build, I would love to hear about it.</p>
            <div className="mt-8 space-y-3">
              {socials.map((social) => {
                const Icon = icons[social.label as keyof typeof icons] ?? Mail;
                return (
                  <a key={social.label} href={social.href} className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300 transition hover:border-sky-400/20 hover:bg-slate-900/80">
                    <span className="flex items-center gap-3"><Icon size={16} className="text-sky-300" /> {social.label}</span>
                    <span className="text-slate-400">{social.value}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-400">
                Name
                <input className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none" placeholder="Your name" required />
              </label>
              <label className="text-sm text-slate-400">
                Email
                <input type="email" className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none" placeholder="you@example.com" required />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-400">
              Message
              <textarea className="mt-2 min-h-36 w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none" placeholder="Tell me about your project or team." required />
            </label>
            <button type="submit" className="mt-5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
