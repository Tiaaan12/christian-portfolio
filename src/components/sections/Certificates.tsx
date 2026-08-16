"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Certificates</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">Credentials that reflect continuous growth.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article key={certificate.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.04 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-sky-400/20 bg-slate-950/70">
                <Image src={certificate.image} alt={certificate.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-100">{certificate.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{certificate.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
