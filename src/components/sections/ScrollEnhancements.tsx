"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollEnhancements() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(nextProgress);
      setShowBackToTop(scrollTop > 400);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-slate-950/20">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-[70] rounded-full border border-white/10 bg-slate-950/80 p-3 text-slate-100 shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-xl transition ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
