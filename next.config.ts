import { CMS_URL } from "@/configs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    optimizeCss: true,
    optimizePackageImports:["@chakra-ui/react"],
  },
   images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.halalsafarioperator.com" 
      }
    ],
  },
// output: "standalone"

};

export default nextConfig;
