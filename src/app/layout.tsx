// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ParticleBackground from "@/components/ParticleBackground";
import { PreloaderProvider } from "@/components/PreloaderContext"; // <-- 1. Import the provider

const inter = Inter({ subsets: ["latin"] });
const exo2 = Exo_2({ subsets: ["latin"], weight: ['700'] });

// UPDATED METADATA FOR THE HOMEPAGE
export const metadata: Metadata = {
  title: "Chloy Costa | Creative Developer & Musician",
  description: "The official portfolio of Chloy Costa, a physics grad turned code alchemist building galaxies in Python, Android, and stardust.",
  // Optional: Add keywords for better SEO
  keywords: ["Chloy Costa", "Portfolio", "Developer", "Musician", "Python", "Data Science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} ${exo2.className}`}>
        {/* 2. Wrap everything inside the PreloaderProvider */}
        <PreloaderProvider>
          <ParticleBackground />
          <Navbar />
          {children}
          <Analytics />
        </PreloaderProvider>
      </body>
    </html>
  );
}