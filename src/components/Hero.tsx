// src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover">
        <source src="/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-10 w-full h-full bg-black opacity-60"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-20"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Chloy Costa
          </span>
        </h1>
        {/* NEW LINE YOU PROVIDED */}
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          &quot;Every path is the right path. Everything could be anything else <br /> and still be just as meaningful through Christ&quot;
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" />
      </motion.div>
    </div>
  );
}