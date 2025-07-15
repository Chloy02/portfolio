// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "Java", "Kotlin", "SQL", "JavaScript", "R", "Scikit-learn", 
  "Pandas", "OpenCV", "TensorFlow", "PyTorch", "XGBoost", "Astropy", 
  "Android (Jetpack Compose)", "React", "Node.js", "Streamlit", 
  "Tailwind CSS", "PostgreSQL", "MySQL", "Linux (Fedora)", "Git", "Docker"
];

export default function About() {
  const FADE_IN_ANIMATION_VARIANTS = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={FADE_IN_ANIMATION_VARIANTS}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4">Faith-Rooted. Starstruck. Python-Powered.</h2>
        <p className="text-gray-400 leading-relaxed">
          Code poet by day, star-gazer with purpose by night. My journey started in the world of physics, but I found my true orbit in building software. I thrive at the intersection of complex problems and elegant solutions, whether it&apos;s training a machine to understand galaxies or composing a melody.
        </p>
        <p className="text-gray-400 leading-relaxed mt-4">
          Once played at a fest, now I play with datasets. And yes, I run Fedora. Don&apos;t ask.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-6">Tech Arsenal</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="bg-gray-800 text-teal-400 border border-gray-700 rounded-full px-4 py-2 text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}