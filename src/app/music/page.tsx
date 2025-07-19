// src/app/music/page.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// The generateMetadata function has been removed from this file.

export default function MusicPage() {
  const FADE_IN_VARIANTS: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={FADE_IN_VARIANTS}
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
              Connect with me!
            </a>
          </div>
        </div>
        
        <div className="text-center mt-20">
            <Link href="/" className="text-amber-500 hover:text-amber-400 transition-colors">
                &larr; Back to Home
            </Link>
        </div>
      </motion.div>
    </div>
  );
}