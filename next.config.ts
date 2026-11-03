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

      // Consolidated 301 redirects for cannibalized/merged posts
      {
        source: "/blog/murudeshwar-scuba-diving-guide",
        destination: "/blog/murudeshwar-scuba-dive-guide",
        permanent: true,
      },
      {
        source: "/blog/scuba-diving-murudeshwar-guide",
        destination: "/blog/murudeshwar-scuba-dive-guide",
        permanent: true,
      },
      {
        source: "/blog/scuba-diving-in-murudeshwar-guide",
        destination: "/blog/murudeshwar-scuba-dive-guide",
        permanent: true,
      },
      {
        source: "/blog/scuba-murudeshwar-guide",
        destination: "/blog/murudeshwar-scuba-dive-guide",
        permanent: true,
      },
      {
        source: "/blog/murudeshwar-scuba-diving-complete-guide-netrani-island",
        destination: "/blog/murudeshwar-scuba-dive-guide",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-the-best-scuba-diving-in-murudeshwar",
        destination: "/blog/murudeshwar-scuba-dive-guide",
        permanent: true,
      },
      {
        source: "/blog/best-scuba-diving-in-murudeshwara",
        destination: "/blog/murudeshwar-scuba-dive-guide",
        permanent: true,
      },
      {
        source: "/blog/murudeshwar-scuba-diving-packages-prices",
        destination: "/blog/murudeshwar-scuba-diving-price-cost",
        permanent: true,
      },
      {
        source: "/blog/scuba-diving-packages-murudeshwar",
        destination: "/blog/murudeshwar-scuba-diving-price-cost",
        permanent: true,
      },
      {
        source: "/blog/netrani-scuba-diving-complete-guide",
        destination: "/blog/best-scuba-diving-netrani-island",
        permanent: true,
      },
      {
        source: "/blog/netrani-scuba-dive-experience-guide",
        destination: "/blog/best-scuba-diving-netrani-island",
        permanent: true,
      },
      {
        source: "/blog/scuba-diving-murudeshwar-netrani-island-guide",
        destination: "/blog/best-scuba-diving-netrani-island",
        permanent: true,
      },
      {
        source: "/blog/murudeshwar-to-netrani-island",
        destination: "/blog/netrani-island-guide",
        permanent: true,
      },
      {
        source: "/blog/best-scuba-diving-in-murudeshwar-from-bangalore",
        destination: "/blog/murudeshwar-scuba-diving-from-bangalore",
        permanent: true,
      },
      {
        source: "/blog/deep-blue-karnataka",
        destination: "/blog/scuba-diving-karnataka",
        permanent: true,
      },
      {
        source: "/blog/water-sports-murudeshwar",
        destination: "/blog/water-sports-murudeshwar-beach-activities",
        permanent: true,
      },
      {
        source: "/blog/netrani-island-scuba-diving-booking-guide",
        destination: "/blog/netrani-island-scuba-diving-booking-how-to-book",
        permanent: true,
      },
      {
        source: "/blog/netrani-island-scuba-diving-booking-complete-guide",
        destination: "/blog/netrani-island-scuba-diving-booking-how-to-book",
        permanent: true,
      },
      {
        source: "/blog/scuba-diving-booking-murudeshwar",
        destination: "/blog/netrani-island-scuba-diving-booking-how-to-book",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
