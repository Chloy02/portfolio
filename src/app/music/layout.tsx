// src/app/music/layout.tsx

import { Metadata } from 'next';
import React from 'react';

// This is the server component that handles metadata
export const metadata: Metadata = {
  title: "Music | Chloy Costa",
  description: "The other side of the code. Explore the music and ministry of Chloy Costa.",
};

// This layout will wrap your music page
export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}