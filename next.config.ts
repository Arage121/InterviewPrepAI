import type { NextConfig } from "next";

interface CustomNextConfig extends NextConfig {
  eslint?: { ignoreDuringBuilds: boolean };
}

const nextConfig: CustomNextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
