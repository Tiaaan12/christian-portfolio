"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GraduationCap, Target } from "lucide-react";

const timeline = [
  { year: "2024", title: "Foundational programming", detail: "Built strong fundamentals in software engineering, data structures, and problem solving." },
  { year: "2025", title: "Machine learning focus", detail: "Moved into applied ML and analytics, exploring practical systems over toy examples." },
  { year: "2026", title: "AI automation", detail: "Started shipping automation products that connect LLMs, APIs, and workflows in elegant ways." },
];

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-50 sm:text-4xl">A calm, product-minded engineer building meaningful AI systems.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              I focus on creating reliable, human-centered AI experiences that blend thoughtful engineering, strong product instincts, and clear communication. My work sits at the intersection of machine learning, automation, and modern software.
            </p>
          </motion.div>
          <div className="space-y-4">
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-5">
              <div className="flex items-center gap-3 text-slate-100"><GraduationCap size={18} className="text-sky-300" /> Education</div>
              <p className="mt-3 text-slate-400">Computer Science student specializing in machine learning and applied artificial intelligence.</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-5">
              <div className="flex items-center gap-3 text-slate-100"><Target size={18} className="text-sky-300" /> Current focus</div>
              <p className="mt-3 text-slate-400">Shipping automation products, developing robust ML pipelines, and crafting elegant frontends for modern AI tools.</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-5">
              <div className="flex items-center gap-3 text-slate-100"><BrainCircuit size={18} className="text-sky-300" /> Career goals</div>
              <p className="mt-3 text-slate-400">Building at the frontier of AI while creating products that feel effortless and genuinely useful.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {timeline.map((item) => (
            <motion.div key={item.year} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.25rem] border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm text-sky-300">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
