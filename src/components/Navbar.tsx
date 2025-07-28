// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
// 1. Import Variants type from framer-motion
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "/#about" }, // Also update these to be more explicit
  { name: "Projects", href: "/#projects" },
  { name: "Music", href: "/music" }, // <-- Changed from #music
  { name: "Now", href: "/now" }, // <-- New Now page
  { name: "Contact", href: "/#contact" },
];

const resumeLink = {
  name: "Resume",
  href: "/Chloy_Costa_resume.pdf",
  download: true
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 2. Explicitly type menuVariants with the Variants type
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.4 } },
    exit: { opacity: 0, y: "-100%", transition: { type: "tween", ease: "easeInOut", duration: 0.3 } },
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                Chloy Costa
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Resume download link */}
                <a 
                  href={resumeLink.href}
                  download
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-yellow-500 hover:to-amber-600 transition-all transform hover:scale-105"
                >
                  {resumeLink.name}
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black bg-opacity-90 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-2xl font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              {/* Resume download link for mobile */}
              <a 
                href={resumeLink.href}
                download
                className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-6 py-4 rounded-md text-2xl font-medium hover:from-yellow-500 hover:to-amber-600 transition-all mt-4"
                onClick={toggleMenu}
              >
                {resumeLink.name}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}