import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // enables minimal Docker deploys
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    domains: [], // add external image domains if needed
  },
};

export default nextConfig;
