"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0.8 : 1 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] backdrop-blur-xl">
          Christian Devera
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm text-[color:var(--foreground)]/80 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-1.5 transition hover:bg-[color:var(--surface-strong)] hover:text-[color:var(--foreground)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setDark((value) => !value)}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] p-2.5 text-[color:var(--foreground)] backdrop-blur-xl transition hover:bg-[color:var(--surface-strong)]"
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
