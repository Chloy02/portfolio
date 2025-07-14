// src/app/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects"; // <-- 1. Import it

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects /> {/* <-- 2. Add it here */}
    </main>
  );
}