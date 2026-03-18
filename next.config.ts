import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ethio-market-rho-ten-53.vercel.app",
      },
    ],
  },
};

export default nextConfig;
