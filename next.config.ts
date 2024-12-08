import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    optimizeCss: true,
    optimizePackageImports:["@chakra-ui/react"],
  },
output: "standalone"

};

export default nextConfig;
