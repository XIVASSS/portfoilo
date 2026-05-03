import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/projects/neosapien", destination: "/projects/share-it", permanent: false },
      { source: "/projects/oolio", destination: "/projects/thecafe", permanent: false },
    ];
  },
};

export default nextConfig;
