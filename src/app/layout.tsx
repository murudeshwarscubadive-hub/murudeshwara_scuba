import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murudeshwar Scuba Diving: Netrani Island Dive Packages & Booking",
  description:
    "Book Murudeshwar scuba diving with Netrani Island packages from ₹1,999. Compare price, timings, age limits, underwater photos, and direct operator booking.",
  keywords: [
    "Murudeshwar scuba diving",
    "Murudeshwara scuba dive",
    "Netrani Island scuba diving",
    "Scuba diving in Murudeshwar",
    "Best scuba diving in Murudeshwar",
    "Netrani Island diving",
    "Scuba diving near Netrani Island",
    "Beginner scuba diving in Murudeshwar",
    "Scuba diving packages in Murudeshwar",
    "murudeshwara scuba diving",
    "scuba diving in murudeshwara",
    "netrani scuba",
    "netrani scuba diving",
    "netrani island murudeshwar",
    "murudeshwara netrani scuba diving",
    "murudeshwar scuba booking",
    "murudeshwara scuba booking",
    "murudeshwar scuba diving price",
    "scuba diving for non swimmers",
    "pigeon island scuba diving",
    "best scuba diving in karnataka",
    "scuba diving in karnataka",
    "murudeshwar beach scuba diving",
    "padi scuba diving murudeshwar",
    "netrani dive packages",
    "scuba diving cost in murudeshwar",
    "scuba diving timings murudeshwar",
  ],
  metadataBase: new URL("https://www.murudeshwarscubadive.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Murudeshwar Scuba Diving: Netrani Island Dive Packages & Booking",
    description:
      "Book Murudeshwar scuba diving with Netrani Island packages from ₹1,999. Compare price, timings, age rules, photos, and direct booking.",
    url: "https://www.murudeshwarscubadive.in",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Scuba diving in Murudeshwar at Netrani Island with direct booking options",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murudeshwar Scuba Diving Price, Timings & Booking",
    description:
      "Compare Murudeshwar scuba diving packages from ₹1,999 with age rules, timings, photos, and direct operator booking.",
    images: ["/hero.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM Business Information"
        />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col font-sans">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
