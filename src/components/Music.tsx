// src/components/Music.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Music() {
  const FADE_UP_ANIMATION_VARIANTS = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={FADE_UP_ANIMATION_VARIANTS}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        To Remember Who I Am
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <Image
            src="/chloy-performance.webp"
            alt="Chloy Costa performing with a guitar"
            width={500}
            height={500}
            className="rounded-lg shadow-lg shadow-amber-500/20 object-cover aspect-square"
          />
        </div>
        <div className="md:col-span-2">
          {/* NEW, AUTHENTIC COPY BUILT FROM YOUR CAPTION */}
          <p className="text-gray-400 mb-6 leading-relaxed">
            We started out a little chaotic, me and this guitar. I first picked her up to escape reality—a quiet act of defiance.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Now, I pick her up to remember who I am. Every song, every half-formed melody, every midnight lyric... she&apos;s been through it all with me. She&apos;s a reminder to believe in myself, even before I do.
          </p>
          <a
            href="https://instagram.com/chloy_costa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            See the Story
          </a>
        </div>
      </div>
    </motion.div>
  );
}