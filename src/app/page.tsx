// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// We define the variants here, correctly typed
const loaderVariants: Variants = {
  hidden: { y: 0, opacity: 1 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "-100vh", opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } },
};

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

const textChildVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 12, stiffness: 100 } },
};

const mainVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const text = "Chloy Costa";
const letters = text.split("");

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // NEW, SMARTER useEffect HOOK
  useEffect(() => {
    // This function will be called when the page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0,0);
    };

    // Check if the page is already loaded (for fast connections or re-visits)
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Otherwise, add an event listener to wait for the 'load' event
      window.addEventListener('load', handleLoad);
      // Set a fallback timer in case the 'load' event fails for some reason
      const fallbackTimeout = setTimeout(handleLoad, 5000); // 5-second max wait
      
      // Cleanup function: remove the listener and timeout when the component unmounts
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimeout);
      };
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            variants={loaderVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <motion.div
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 overflow-hidden"
              style={{ fontFamily: 'var(--font-exo2)' }}
            >
              {letters.map((letter, index) => (
                <motion.span variants={textChildVariants} key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main 
        variants={mainVariants}
        initial="hidden"
        animate={!isLoading ? "visible" : "hidden"}
        className="text-white"
      >
        <Hero />
        
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
          <About />
        </section>

       <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
          <Projects />
        </section>

        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
          <Contact />
        </section>

        <Footer />
      </motion.main>
    </>
  );
}