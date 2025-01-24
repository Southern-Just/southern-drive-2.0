import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {

  experimental:{
    serverActions:{
      bodySizeLimit:"100MB",
    },
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
};


export default nextConfig;
