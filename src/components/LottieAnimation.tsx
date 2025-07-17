// src/components/LottieAnimation.tsx
"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export default function LottieAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation data from the correct public path
    fetch('/arrow.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []); // The empty array ensures this runs only once

  if (!animationData) {
    // Return a placeholder or null while the animation is loading
    return null; 
  }

  return (
    <Lottie 
      animationData={animationData} 
      loop={true} 
      className="w-full h-full"
    />
  );
}