import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
        search: "",
      },
    ],
  },

  experimental: {
    cacheLife: {
      posts: {
        stale: 30,
        revalidate: 120,
        expire: 600,
      },
    },
  },
};

export default nextConfig;
