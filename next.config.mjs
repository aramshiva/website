import createMDX from '@next/mdx'
import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },
}

const withMDX = createMDX({})

export default withHydrationOverlay({
  appRootSelector: "main",
})(withMDX(nextConfig));