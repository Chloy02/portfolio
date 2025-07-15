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
      <h2 className="text-3xl font-bold text-center mb-12">The Other Side of the Code</h2>
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
          <h3 className="text-2xl font-bold mb-3">Sound & Spirit</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            For me, music isn&apos;t a hobby; it&apos;s a ministry. It&apos;s the language I use when code isn&apos;t enough. It&apos;s about leading worship, building community through a Battle of the Bands, or just finding a moment of peace with a guitar. It&apos;s the rhythm that balances the algorithm.
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