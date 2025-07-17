// src/components/Projects.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion, Variants } from "framer-motion"; // Ensure Variants is imported
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// CORRECTLY TYPED VARIANTS
const carouselContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // A slightly longer delay for a more dramatic effect
    },
  },
};

const projectItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start' 
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-left">
          Things I&apos;ve Built
        </h2>
        <div className="flex gap-4">
          <button onClick={scrollPrev} className="embla__prev" disabled={!canScrollPrev} aria-label="Previous project">
            <FaArrowLeft />
          </button>
          <button onClick={scrollNext} className="embla__next" disabled={!canScrollNext} aria-label="Next project">
            <FaArrowRight />
          </button>
        </div>
      </div>
      
      <div className="embla -mx-4" ref={emblaRef}>
        {/* The container now orchestrates the stagger */}
        <motion.div 
          className="embla__container"
          initial="hidden"
          whileInView="visible"
          variants={carouselContainerVariants}
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            // Each card is now a motion component
            <motion.div className="embla__slide px-4 pt-8 pb-4" key={index} variants={projectItemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}