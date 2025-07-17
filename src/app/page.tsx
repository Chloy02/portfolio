// src/app/page.tsx
"use client";

import { useEffect } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { usePreloader } from '@/components/PreloaderContext'; // Import the custom hook
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Variants for the preloader itself
const loaderVariants: Variants = {
  hidden: { y: 0, opacity: 1 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "-100vh", opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } },
};

// Variants for the preloader text container (for staggering)
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

// Variants for each individual letter in the preloader
const textChildVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 12, stiffness: 100 } },
};

// Variants for the main content animation
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
  // Use the global state from the context
  const { isFirstLoad, finishFirstLoad } = usePreloader();

  useEffect(() => {
    // Only run the loading logic if it's the very first load of the session
    if (isFirstLoad) {
      const handleLoad = () => {
        finishFirstLoad(); // Set the global state to false
        document.body.style.cursor = 'default';
        window.scrollTo(0,0);
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        const fallbackTimeout = setTimeout(handleLoad, 5000);
        return () => {
          window.removeEventListener('load', handleLoad);
          clearTimeout(fallbackTimeout);
        };
      }
    }
  }, [isFirstLoad, finishFirstLoad]);

  return (
    <>
      <AnimatePresence>
        {isFirstLoad && (
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
        animate={!isFirstLoad ? "visible" : "hidden"}
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