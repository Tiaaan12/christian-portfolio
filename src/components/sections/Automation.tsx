"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Workflow } from "lucide-react";
import { automationSteps } from "@/data/automation";

export function Automation() {
  return (
    <section id="automation" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">AI Automation</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-50 sm:text-4xl">Workflows that feel operationally elegant.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">From lead capture to intelligent routing, I design automation systems that are fast, resilient, and easy to trust.</p>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
              <div className="flex items-center gap-2 text-sm text-slate-300"><Workflow size={16} className="text-sky-300" /> Make.com workflow preview</div>
              <div className="relative mt-5 h-44 overflow-hidden rounded-[1.25rem] border border-sky-400/20 bg-slate-950/70 sm:h-52">
                <Image src="/automation/automation.png" alt="Automation workflow preview" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </motion.div>
          <div className="space-y-3">
            {automationSteps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.03 }} className="rounded-[1.25rem] border border-white/10 bg-slate-950/40 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{step.title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-400">{step.description}</p>
                  </div>
                  {index < automationSteps.length - 1 ? <ArrowDown className="text-sky-300" size={16} /> : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
