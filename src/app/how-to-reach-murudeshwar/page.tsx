import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Reach Murudeshwar: Directions, Map & Travel Info",
  description:
    "Easiest ways to reach Murudeshwar for scuba diving. Travel guidelines from Bangalore, Mangalore, Gokarna, and Udupi by bus, train, or road.",
  keywords: [
    "how to reach murudeshwara",
    "how to reach murudeshwar for scuba diving",
    "bangalore to murudeshwar scuba diving",
    "mangalore to murudeshwara",
    "murudeshwar scuba diving travel guide",
    "reach netrani island from murudeshwar",
    "murudeshwar railway station scuba",
    "goa to murudeshwar scuba",
    "murudeshwara temple travel directions",
    "scuba diving in murudeshwar location",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar",
  },
  openGraph: {
    title: "How to Reach Murudeshwar: Directions, Map & Travel Info",
    description:
      "Easiest ways to reach Murudeshwar for scuba diving. Travel guidelines from Bangalore, Mangalore, Gokarna, and Udupi by bus, train, or road.",
    url: "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Directions and map for reaching Murudeshwar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reach Murudeshwar for Scuba Diving",
    description:
      "Directions, travel guide, and road maps from Bangalore, Mangalore, and Goa to Murudeshwar.",
    images: ["/hero.webp"],
  },
};

export default function HowToReach() {
  const travelModes = [
    {
      title: "By Train",
      desc: "Murudeshwar has its own railway station (MRDW). Express trains running on the Konkan Railway route connect it to Mumbai, Goa, Mangalore, and Bangalore. The station is only 3 km from the main temple and beach area.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#00D4FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect width="16" height="16" x="4" y="3" rx="2" />
          <path d="M4 11h16" />
          <path d="M12 3v8" />
          <path d="m8 19-2 2" />
          <path d="m16 19 2 2" />
          <circle cx="8" cy="15" r="1" />
          <circle cx="16" cy="15" r="1" />
        </svg>
      ),
    },
    {
      title: "By Road / Bus",
      desc: "Murudeshwar is located just off National Highway 66 (NH 66). Frequent overnight KSRTC buses and private sleepers operate directly from Bangalore, Mangalore, Pune, and Mumbai. The bus drop point is usually the Murudeshwar highway bypass cross, from where auto rickshaws are easily available.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#00D4FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v10h1c0 1.7 1.3 3 3 3s3-1.3 3-3h4c0 1.7 1.3 3 3 3s3-1.3 3-3h1" />
          <circle cx="8" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
          <path d="M12 10H5" />
          <path d="M16 10v3" />
        </svg>
      ),
    },
    {
      title: "By Air",
      desc: "Mangalore International Airport (IXE) is the nearest airport, located about 165 km away. Goan airports (Mopa/Dabolim) are approximately 200 km north. Cabs are easily bookable from these airports directly to Murudeshwar.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#00D4FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M12 22V12" />
          <path d="M12 12 4 7.5" />
          <path d="M12 12 20 7.5" />
        </svg>
      ),
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar/#webpage",
      "url": "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar",
      "name": "How to Reach Murudeshwar: Directions, Map & Travel Info",
      "description": "Easiest ways to reach Murudeshwar for scuba diving. Travel guidelines from Bangalore, Mangalore, Gokarna, and Udupi by bus, train, or road."
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
          "name": "How to Reach Murudeshwar",
          "item": "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#00111F] text-white font-sans overflow-x-hidden pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Header */}
      <section className="pt-24 pb-16 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-2 text-[#00D4FF] font-bold text-xs uppercase tracking-widest font-display">
            Travel Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            How to Reach Murudeshwar
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Find the best transport options, direct directions, train schedules,
            and highway information for your scuba trip.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mode list */}
          <div className="grid gap-6">
            {travelModes.map((mode, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-[#00D4FF]/25 hover:bg-white/[0.04] transition-all duration-300 shadow-2xl"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {mode.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-display uppercase tracking-wider">{mode.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                    {mode.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reporting Location Card */}
          <div className="bg-gradient-to-br from-[#002B5B] to-[#00111F] border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
            <h2 className="text-2xl font-black text-white uppercase font-display tracking-tight border-b border-white/5 pb-3">
              Reporting Point Location
            </h2>
            <p className="text-gray-300 leading-relaxed font-medium text-sm md:text-base">
              Once you confirm your booking, you must report to our main desk on
              Temple Main Road near Murudeshwar beach. Ample car and bike
              parking spaces are available in the public temple parking lot,
              which is just a 2-minute walk from our office.
            </p>
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-1 font-display">
                  Dive Booking Desk
                </h4>
                <p className="text-xs text-gray-400 font-medium">
                  Temple Main Road, Murudeshwar, Karnataka 581350
                </p>
              </div>
              <a
                href="https://www.google.com/maps?q=14.0946,74.4838"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00D4FF] text-black font-bold py-3.5 px-6 rounded-full uppercase tracking-widest text-[10px] whitespace-nowrap hover:bg-[#80e9ff] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,212,255,0.2)] font-display"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
