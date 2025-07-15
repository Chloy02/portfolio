// src/app/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      
      {/* This now has the correct padding and background */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <About />
      </section>

      {/* Using a dark gray for this section for visual separation */}
      <section id="projects" className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
        <Projects />
      </section>

      {/* Back to black for the next section */}
      <section id="music" className="py-24 px-4 sm:px-6 lg:px-8">
        <Music />
      </section>

      {/* Dark gray again for the contact section */}
      <section id="contact" className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}