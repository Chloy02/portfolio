// src/components/Projects.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names'; // <-- 1. Import the new plugin
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Projects() {
  // 2. Add the ClassNames plugin to the useEmblaCarousel hook
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: false, 
      align: 'start',
      watchDrag: true, // <-- 3. Explicitly enable dragging
    },
    [ClassNames()] // <-- 4. Initialize the plugin
  );

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
      
      {/* 5. The 'is-dragging' class will now be added automatically when you drag */}
      <div className="embla -mx-4" ref={emblaRef}>
        <div className="embla__container">
          {projectsData.map((project, index) => (
            <div className="embla__slide px-4 pt-8 pb-4" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}