// src/components/PreloaderContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context data
interface PreloaderContextType {
  isFirstLoad: boolean;
  finishFirstLoad: () => void;
}

// Create the context with a default value
const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

// Create a "Provider" component that will wrap our application
export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const finishFirstLoad = () => {
    setIsFirstLoad(false);
  };

  return (
    <PreloaderContext.Provider value={{ isFirstLoad, finishFirstLoad }}>
      {children}
    </PreloaderContext.Provider>
  );
}

// Create a custom hook to easily access the context
export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
}