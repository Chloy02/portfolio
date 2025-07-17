// src/app/layout.tsx

import type { Metadata } from "next";
// 1. Import Exo_2 from Google Fonts
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });
// 2. Configure the new font
const exo2 = Exo_2({ subsets: ["latin"], weight: ['700'] });

export const metadata: Metadata = {
  title: "Chloy Costa | Creative Developer & Musician",
  description: "Physics Grad Turned Code Alchemist. Building Galaxies in Python, Android & Stardust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* 3. Add the font's variable to the body's className */}
      <body className={`${inter.className} ${exo2.className}`}>
        <ParticleBackground />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}