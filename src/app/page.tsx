import { About } from "@/components/sections/About";
import { Automation } from "@/components/sections/Automation";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { ScrollEnhancements } from "@/components/sections/ScrollEnhancements";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Automation />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollEnhancements />
    </main>
  );
}
