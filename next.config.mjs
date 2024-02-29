/** @type {import('next').NextConfig} */

// Next Config when fetching images in the public directory 
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5678",
        pathname: "/images/**"
      }
    ]
  }
};

export default nextConfig;
