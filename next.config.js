/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**.scdn.co",
          },
        ],
      },
  }
   
  module.exports = nextConfig