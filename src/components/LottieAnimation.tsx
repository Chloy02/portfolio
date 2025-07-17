// src/components/LottieAnimation.tsx
"use client";

import Lottie from "lottie-react";
// Import the animation data from its new location inside the src folder
import animationData from "@/data/animations/arrow.json";

export default function LottieAnimation() {
  return (
    <Lottie 
      animationData={animationData} 
      loop={true} 
      className="w-full h-full"
    />
  );
}