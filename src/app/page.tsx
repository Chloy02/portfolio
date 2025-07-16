// src/app/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // The main background is now transparent, showing the particles
    <main className="text-white">
      <Hero />
      
      {/* Remove background styles from sections */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <About />
      </section>

      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <Projects />
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}