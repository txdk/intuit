import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/intuit-blog",
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
