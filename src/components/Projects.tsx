// src/components/Projects.tsx
"use client";

import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react'

export default function Projects() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

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
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Things I&apos;ve Built
      </h2>
      <div className="embla -mx-4" ref={emblaRef}>
        <div className="embla__container">
          {projectsData.map((project, index) => (
            <div className="embla__slide px-4" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}