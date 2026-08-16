export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Geospatial Flood Risk Prediction",
    description:
      "An ML pipeline that fuses geospatial and climate variables to predict regional flood exposure with interpretable model outputs.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Folium"],
    github: "https://github.com/Tiaaan12/geospatial-flood-risk-prediction",
    demo: "https://geospatial-flood-risk-predictor.streamlit.app/",
    image: "/projects/flood.png",
    featured: true,
  },
  {
    title: "Correlation Research",
    description:
      "A statistical research product analyzing multi-source datasets to uncover meaningful correlations and communicate insight clearly.",
    stack: ["Python", "SQL", "Jupyter", "Pandas", "Seaborn"],
    github: "https://github.com/Tiaaan12/Correlation-research",
    demo: "https://unavaiable.com",
    image: "/projects/correlation.png",
    featured: true,
  },
  {
    title: "JavaBee Express",
    description:
      "Desktop application demonstrating Object-Oriented Programming with Java Swing and thoughtful user experience.",
    stack: ["Jawa", "Swing", "OOP", "GUI", "Netbeans"],
    github: "https://github.com/Tiaaan12/Cafe-Management",
    demo: "https://unavailable.com",
    image: "/projects/java.png",
    featured: true,
  },
  {
    title: "Warehouse Management System",
    description:
      "Desktop application for inventory, order, and warehouse management using Data Structures and Algorithms.",
    stack: ["Java", "Data Structures", "Max-Heap", "Recurrence"],
    github: "https://github.com/Tiaaan12/E-commerce-Warehouse-System",
    demo: "https://unavailable.com",
    image: "/projects/dsa.png",
    featured: true,
  },
];
