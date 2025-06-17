import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://live.staticflickr.com/**")],
  },
};

export default nextConfig;
