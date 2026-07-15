"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const phrases = ["AI Engineer", "Machine Learning Engineer", "Software Engineer"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const current = phrases[index];
    const timeout = setTimeout(() => {
      if (displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else {
        setTimeout(() => setDisplayed(""), 800);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, 70);

    return () => clearTimeout(timeout);
  }, [displayed, index]);

  return (
    <section id="home" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm text-sky-200">
            <Sparkles size={14} />
            Available for ambitious AI teams
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">Christian Devera</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 sm:text-xl">
            Computer Science student building thoughtful AI systems, machine learning products, and automation workflows with a sharp focus on elegance and impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-base font-medium">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition hover:brightness-110">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200 backdrop-blur-xl transition hover:bg-white/10">
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-400">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Data Analytics",
              "AI Automation",
              "Python Developer",
            ].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-7 text-sm uppercase tracking-[0.28em] text-slate-500">
            Currently shaping <span className="text-slate-300">{displayed}</span>
            <span className="ml-1 animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-sky-500/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_80px_rgba(59,130,246,0.12)] backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-slate-400">
              <span>Neural Signal</span>
              <span>Live</span>
            </div>
            <div className="relative h-[360px] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]">
              <div className="absolute inset-0 animate-pulse" />
              {[...Array(18)].map((_, index) => (
                <div key={index} className="absolute h-2.5 w-2.5 rounded-full bg-sky-400/80 shadow-[0_0_12px_rgba(56,189,248,0.8)]" style={{ top: `${10 + index * 4}%`, left: `${8 + (index % 4) * 22}%` }} />
              ))}
              {[...Array(24)].map((_, index) => (
                <div key={`line-${index}`} className="absolute h-px w-24 bg-sky-400/20" style={{ top: `${14 + index * 3}%`, left: `${14 + (index % 5) * 15}%`, transform: `rotate(${index % 2 === 0 ? 20 : -25}deg)` }} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
