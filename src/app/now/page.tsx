// src/app/now/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaBook, FaMusic, FaCode } from "react-icons/fa";

export default function NowPage() {
  const FADE_IN_VARIANTS: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const STAGGER_VARIANTS: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      } 
    },
  };

  const ITEM_VARIANTS: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Current data - you can update these regularly
  const currentData = {
    reading: {
      book: "Mere Christianity",
      author: "C.S. Lewis",
      thoughts: "Exploring Lewis's thoughtful approach to faith and reason. His logical yet accessible writing style makes complex theological concepts surprisingly clear.",
      nextBook: "True Believer by Nicholas Sparks - recently bought it so I am gonna start soon"
    },
    listening: {
      artist: "JJ Heller",
      album: "Various Songs",
      track: "Her Music",
      vibe: "JJ Heller's music has been my constant companion lately - her heartfelt lyrics and soothing melodies are perfect for any mood."
    },
    working: [
      "Exploring machine learning techniques for astronomical data",
      "Building this portfolio with Next.js 15 and modern web technologies",
      "Exploring astronomy research papers and data driven projects for fun",
      "Working on various projects at Christ University as a MCA student",
      "Composing and arranging 2 original songs"
    ]
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={FADE_IN_VARIANTS}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 mb-4">
            What I&apos;m up to now
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse into my current world - what I&apos;m reading, learning, building, and excited about.
          </p>
        </div>

        {/* Content Grid */}
        <motion.div
          variants={STAGGER_VARIANTS}
          className="space-y-8"
        >
          {/* Reading and Listening - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reading */}
            <motion.div variants={ITEM_VARIANTS} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <FaBook className="text-amber-500 text-xl mr-3" />
                <h3 className="text-xl font-bold text-white">Currently Reading</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-amber-400 font-semibold">
                    <a 
                      href="https://www.google.com/search?q=Mere+Christianity+CS+Lewis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-amber-300 transition-colors"
                    >
                      {currentData.reading.book}
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm">by {currentData.reading.author}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {currentData.reading.thoughts}
                </p>
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-400 text-xs">
                    📚 Next up: <a 
                      href="https://www.google.com/search?q=True+Believer+Nicholas+Sparks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-amber-400 transition-colors"
                    >
                      True Believer by Nicholas Sparks
                    </a> - recently bought it so I am gonna start soon
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Listening */}
            <motion.div variants={ITEM_VARIANTS} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <FaMusic className="text-amber-500 text-xl mr-3" />
                <h3 className="text-xl font-bold text-white">On Repeat</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-amber-400 font-semibold">{currentData.listening.track}</h4>
                  <p className="text-gray-400 text-sm">
                    <a 
                      href="https://open.spotify.com/artist/7dq8KEwf0kQXJhM79iwcPh?si=6ywXp41MR5qi-bLHHaEJwg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-amber-400 transition-colors"
                    >
                      {currentData.listening.artist}
                    </a> - {currentData.listening.album}
                  </p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {currentData.listening.vibe}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Working On - Full Width */}
          <motion.div variants={ITEM_VARIANTS} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <FaCode className="text-amber-500 text-xl mr-3" />
              <h3 className="text-xl font-bold text-white">Working On</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentData.working.map((item, index) => (
                <div key={index} className="text-gray-300 text-sm leading-relaxed flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* About This Page */}
        <motion.div 
          variants={ITEM_VARIANTS}
          className="mt-12 text-center"
        >
          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <Link href="/" className="text-amber-500 hover:text-amber-400 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
