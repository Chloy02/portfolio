// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

const skills = [ "Python", "Java", "Kotlin", "SQL", "JavaScript", "R", "Scikit-learn", "Pandas", "OpenCV", "TensorFlow", "PyTorch", "XGBoost", "Astropy", "Android (Jetpack Compose)", "React", "Node.js", "Streamlit", "Tailwind CSS", "PostgreSQL", "MySQL", "Linux (Fedora)", "Git", "Docker" ];

export default function About() {
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
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4">The Journey So Far</h2>
        {/* SIMPLIFIED BIO */}
        <p className="text-gray-400 leading-relaxed">
          My journey began with a degree in Physics, where I fell in love with the universe&apos;s complex patterns. This led me to the world of code, a place where I can not only observe those patterns but build new ones. Now I create tools that are both intelligent and intuitive.
        </p>
        {/* THE QUOTE YOU KEPT */}
        <blockquote className="border-l-4 border-amber-500 pl-4 my-4 text-gray-300 italic">
          &quot;Do everything in love. That&apos;s the only way to make something that lasts, whether it&apos;s a relationship or a repository.&quot;
        </blockquote>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-6">My Toolbox</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-800 text-teal-400 border border-gray-700 rounded-full px-4 py-2 text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}