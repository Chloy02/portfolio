// src/components/About.tsx
"use client";

import { motion, Variants } from "framer-motion";
import LottieAnimation from './LottieAnimation'; 

const skills = [ "Python", "Java", "Kotlin", "SQL", "JavaScript", "R", "Scikit-learn", "Pandas", "OpenCV", "TensorFlow", "PyTorch", "XGBoost", "Astropy", "Android (Jetpack Compose)", "React", "Node.js", "Streamlit", "Tailwind CSS", "PostgreSQL", "MySQL", "Linux (Fedora)", "Git", "Docker" ];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center" // Changed gap from 16 to 8
    >
      {/* Column 1: Text */}
      <motion.div className="flex flex-col gap-4 md:col-span-1">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold">The Journey So Far</motion.h2>
        <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed">
          My journey began with a degree in Physics, where I fell in love with the universe&apos;s complex patterns. This led me to the world of code, a place where I can not only observe those patterns but build new ones. Now I create tools that are both intelligent and intuitive.
        </motion.p>
        <motion.blockquote variants={itemVariants} className="border-l-4 border-amber-500 pl-4 my-4 text-gray-300 italic">
          &quot;Do everything in love. That&apos;s the only way to make something that lasts, whether it&apos;s a relationship or a repository.&quot;
        </motion.blockquote>
      </motion.div>
      
      {/* Column 2: The Lottie Animation */}
      {/* THIS IS THE LINE WE'VE CHANGED */}
      <motion.div variants={itemVariants} className="w-48 h-48 mx-auto md:col-span-1">
        <LottieAnimation />
      </motion.div>
      
      {/* Column 3: Toolbox */}
      <motion.div variants={itemVariants} className="md:col-span-1">
        <h3 className="text-2xl font-bold mb-6">My Toolbox</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-800 text-teal-400 border border-gray-700 rounded-full px-4 py-2 text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}