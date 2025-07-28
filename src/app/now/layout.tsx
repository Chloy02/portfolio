// src/app/now/layout.tsx

import { Metadata } from 'next';
import React from 'react';

// This is the server component that handles metadata
export const metadata: Metadata = {
  title: "Now | Chloy Costa",
  description: "What I'm currently reading, learning, working on, and excited about right now.",
};

// This layout will wrap your now page
export default function NowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
