export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Geospatial Flood Risk Prediction",
    description:
      "An ML pipeline that fuses geospatial and climate variables to predict regional flood exposure with interpretable model outputs.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Correlation Research",
    description:
      "A statistical research product analyzing multi-source datasets to uncover meaningful correlations and communicate insight clearly.",
    stack: ["Python", "SQL", "Jupyter", "Pandas", "Seaborn"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "JavaBee Express",
    description:
      "A production-minded e-commerce and operations platform built with a modern stack and thoughtful user experience.",
    stack: ["TypeScript", "Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A premium, minimal portfolio concept designed to feel like a modern AI company product rather than a template site.",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
];
