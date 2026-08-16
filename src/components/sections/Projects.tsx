"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Featured Projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">Selected work with depth and purpose.</h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ delay: index * 0.05 }} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(15,23,42,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/20">
              <div className="aspect-video bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_65%)] p-5">
                <div className="relative flex h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/70">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                  {project.featured ? <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-xs uppercase tracking-[0.24em] text-sky-200">Featured</span> : null}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.github} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                    <Globe size={16} /> GitHub
                  </a>
                  <a href={project.demo} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-3.5 py-2 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.2)] transition hover:brightness-110">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
