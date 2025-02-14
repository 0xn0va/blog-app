import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export", // Next.js export as a static site
  distDir: "out", //ensures that the generated files are saved in the out/folder - important for IPFS
  images: {
    unoptimized: true, //Next.js normally optimizes images dynamically- NOT work on IPFS.
  },
  reactStrictMode: true,
}

export default nextConfig
