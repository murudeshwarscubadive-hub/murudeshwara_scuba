import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Netrani Underwater Gallery: Scuba Diving Photos & Videos",
  description:
    "See what awaits you beneath the waves. Browse real underwater photos and videos from our daily scuba diving trips at Netrani Island, Murudeshwar.",
  keywords: [
    "netrani scuba diving photos",
    "murudeshwara scuba photos",
    "murudeshwar underwater gallery",
    "netrani island coral reef photos",
    "scuba diving videos murudeshwar",
    "underwater marine life netrani island",
    "murudeshwara dive photos",
    "scuba diving in murudeshwar hd videos",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/gallery",
  },
  openGraph: {
    title: "Netrani Underwater Gallery: Scuba Diving Photos & Videos",
    description:
      "See what awaits you beneath the waves. Browse real underwater photos and videos from our daily scuba diving trips at Netrani Island, Murudeshwar.",
    url: "https://www.murudeshwarscubadive.in/gallery",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/images/murudeshwara/netrani_island_scuba_diving.webp",
        width: 1200,
        height: 630,
        alt: "Netrani Island scuba diving underwater photos",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Underwater Gallery Murudeshwar",
    description:
      "Browse real underwater photos and videos from our daily scuba diving trips at Netrani Island, Murudeshwar.",
    images: ["/images/murudeshwara/netrani_island_scuba_diving.webp"],
  },
};

export default function Gallery() {
  const images = [
    {
      src: "/images/murudeshwara/murudeshwar_scuba_diving.webp",
      alt: "Scuba diver exploring vibrant coral reef formations at Netrani Island, Murudeshwar",
      location: "Netrani Island, Murudeshwar",
    },
    {
      src: "/images/murudeshwara/netrani_island_scuba_diving.webp",
      alt: "PADI certified dive instructor guiding a first-time scuba diver near Netrani coral reefs",
      location: "Netrani Island, Murudeshwar",
    },
    {
      src: "/images/murudeshwara/murudeshwar_diving_experience.webp",
      alt: "Scuba divers enjoying an underwater diving experience in the clear waters of Netrani Island",
      location: "Netrani Island, Murudeshwar",
    },
    {
      src: "/images/murudeshwara/netrani_island_coral_reef.webp",
      alt: "Healthy tropical coral reef ecosystem teeming with coastal marine life around Netrani Island",
      location: "Netrani Coral Reef",
    },
    {
      src: "/images/murudeshwara/murudeshwar_scuba_diver.webp",
      alt: "Certified scuba diver navigating clear turquoise Arabian Sea waters in Murudeshwar",
      location: "Netrani Island, Murudeshwar",
    },
    {
      src: "/images/murudeshwara/netrani_island_marine_life.webp",
      alt: "Reef fishes and diverse Arabian Sea marine life thriving at Netrani Island sanctuary",
      location: "Marine Life Sanctuary",
    },
    {
      src: "/images/murudeshwara/murudeshwar_underwater_diving.webp",
      alt: "Deep underwater exploration and clear ocean visibility during a Murudeshwar dive trip",
      location: "Murudeshwar Scuba Dive",
    },
    {
      src: "/images/murudeshwara/netrani_island_underwater_diving.webp",
      alt: "Diver maintaining neutral buoyancy while gliding over underwater rocky pinnacles",
      location: "Netrani Island, Murudeshwar",
    },
    {
      src: "/images/murudeshwara/netrani_island_diving_experience.webp",
      alt: "First-hand scuba diving experience and 1:1 guided session at Netrani Island",
      location: "Netrani Island, Murudeshwar",
    },
    {
      src: "/images/murudeshwara/netrani_island_sea_diving.webp",
      alt: "Open-water sea diving expedition with tropical reef fish in Netrani Island waters",
      location: "Netrani Island, Murudeshwar",
    },
    {
      src: "/images/murudeshwara/netrani_island_underwater_photography.webp",
      alt: "Free HD underwater photography capturing scuba divers in action at Netrani Island",
      location: "Underwater Photography",
    },
    {
      src: "/images/murudeshwara/netrani_scuba_diver_underwater.webp",
      alt: "Close-up of a scuba diver exploring rich coral beds and marine flora off Murudeshwar",
      location: "Netrani Island, Murudeshwar",
    },
    {
      src: "/images/murudeshwara/scuba_diving_near_murudeshwar.webp",
      alt: "Scuba diving excursion near Murudeshwar and Netrani Island with high visibility",
      location: "Murudeshwar Coastal Waters",
    },
    {
      src: "/images/murudeshwara/GP013752.webp",
      alt: "Action camera capture of scuba diver exploring the underwater world of Netrani Island",
      location: "Netrani Island, Murudeshwar",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "@id": "https://www.murudeshwarscubadive.in/gallery/#imagegallery",
      "url": "https://www.murudeshwarscubadive.in/gallery",
      "name": "Netrani Island Scuba Diving Underwater Gallery",
      "description": "Real underwater photos and videos from our daily scuba diving trips at Netrani Island, Murudeshwar.",
      "image": images.map((img) => ({
        "@type": "ImageObject",
        "url": `https://www.murudeshwarscubadive.in${img.src}`,
        "caption": img.alt,
        "contentLocation": img.location
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.murudeshwarscubadive.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gallery",
          "item": "https://www.murudeshwarscubadive.in/gallery"
        }
      ]
    }
  ];

  return (
    <main className="bg-[#00111F] min-h-screen text-white font-sans overflow-x-hidden pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Intro Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 text-[#00D4FF] font-bold text-xs uppercase tracking-widest font-display">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
            <circle cx="12" cy="13" r="3"></circle>
          </svg>
          <span>Visual Experience</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight font-display uppercase">
          Netrani Underwater Gallery
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
          Explore real captures from our morning expeditions at Netrani Island—including vibrant coral reef ecosystems, colorful marine life, and first-time diver milestones.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-24 max-w-[1600px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group break-inside-avoid rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#00D4FF]/30 hover:shadow-[0_20px_40px_rgba(0,212,255,0.08)] hover:-translate-y-1.5 transition-all duration-500 shadow-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5 font-display">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {img.location}
                </span>
                <p className="text-gray-300 font-medium text-xs md:text-sm leading-relaxed">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-24 bg-gradient-to-b from-[#00111F] to-[#002B5B] border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            Ready to Capture Your Own Dive Moments?
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto">
            Complimentary high-definition underwater photography and action video clips are included with every dive package. Reserve your spot today and take home real memories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href="/netrani-scuba-diving"
              className="w-full sm:w-auto bg-[#00D4FF] text-black font-bold py-4 px-10 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 uppercase tracking-widest text-xs font-display text-center shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            >
              View Packages
            </a>
            <a
              href="tel:+917829975777"
              className="w-full sm:w-auto border border-white/20 bg-white/5 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 uppercase tracking-widest text-xs font-display text-center"
            >
              Call to Book
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
