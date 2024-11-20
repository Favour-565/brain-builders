import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.builder.io"], // Add the domain for external images
  },
};

export default nextConfig;
