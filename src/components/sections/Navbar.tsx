"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#automation", label: "Automation" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? latest;
    setHidden(latest > 120 && latest > previous);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0.8 : 1 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-xl">
          Christian Devera
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-300 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setDark((value) => !value)}
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-100 backdrop-blur-xl transition hover:bg-white/10"
          >
            {dark ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <a
            href="/resume.pdf"
            className="hidden items-center gap-1 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-200 sm:inline-flex"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
