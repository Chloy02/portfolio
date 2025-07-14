// src/app/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Music from "@/components/Music";
import Contact from "@/components/Contact"; // <-- 1. Import Contact
import Footer from "@/components/Footer";   // <-- 2. Import Footer

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Music />
      <Contact /> {/* <-- 3. Add Contact */}
      <Footer />  {/* <-- 4. Add Footer */}
    </main>
  );
}