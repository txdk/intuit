import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProd? "/intuit-blog": "",
  basePath: isProd? "/intuit-blog": "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
