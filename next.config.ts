import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/scuba-diving",
        destination: "/",
        permanent: true,
      },
      {
        source: "/netrani-island-scuba-diving",
        destination: "/netrani-scuba-diving",
        permanent: true,
      },
      {
        source: "/beginner-scuba-diving",
        destination: "/#packages",
        permanent: true,
      },
      {
        source: "/intro-scuba-diving",
        destination: "/#packages",
        permanent: true,
      },
      {
        source: "/scuba-diving-packages",
        destination: "/netrani-scuba-diving",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/team",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
