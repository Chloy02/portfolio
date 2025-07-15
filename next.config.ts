import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is the line that fixes the Vercel error
  images: {
    unoptimized: true,
  },
};

export default nextConfig;