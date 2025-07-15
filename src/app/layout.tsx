// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <-- 1. Import Navbar

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar /> {/* <-- 2. Add Navbar here */}
        {children}
      </body>
    </html>
  );
}