import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group & Bulk Scuba Diving in Murudeshwar: College & Corporate Packages",
  description:
    "Organizing a group dive trip to Netrani Island? Custom discounted packages, dedicated boat charters, and seamless logistics for groups of 10+ divers.",
  keywords: [
    "bulk scuba booking murudeshwar",
    "group scuba diving murudeshwara",
    "corporate scuba diving netrani",
    "college trip scuba diving murudeshwar",
    "discount scuba booking murudeshwara",
    "netrani group dive packages",
    "murudeshwar family scuba booking",
    "group tour netrani island scuba",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/bulk-scuba-booking",
  },
  openGraph: {
    title: "Group & Bulk Scuba Diving in Murudeshwar: College & Corporate Packages",
    description:
      "Organizing a group dive trip to Netrani Island? Custom discounted packages, dedicated boat charters, and seamless logistics for groups of 10+ divers.",
    url: "https://www.murudeshwarscubadive.in/bulk-scuba-booking",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/images/group-divers.png",
        width: 1200,
        height: 630,
        alt: "Group and corporate scuba diving expeditions at Netrani Island, Murudeshwar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group & Bulk Scuba Bookings Murudeshwar",
    description:
      "Custom discounted rates, dedicated boat charters, and personalized group packages for Netrani Island scuba diving.",
    images: ["/images/group-divers.png"],
  },
};

export default function BulkBooking() {
  const corporateBenefits = [
    {
      title: "Tiered Group Rates",
      desc: "Special transparent pricing structures for college batches, family reunions, and corporate teams with 10 or more participants.",
    },
    {
      title: "Exclusive Boat Charters",
      desc: "Charter an entire dive boat exclusively for your group, aligning departure schedules and dive rotations around your travel itinerary.",
    },
    {
      title: "Coordinated Ocean Excursions",
      desc: "Seamlessly blend scuba diving rotations with group surface snorkeling, action video coverage, and local sightseeing guidance.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.murudeshwarscubadive.in/bulk-scuba-booking/#webpage",
      "url": "https://www.murudeshwarscubadive.in/bulk-scuba-booking",
      "name": "Group & Bulk Scuba Diving in Murudeshwar: College & Corporate Packages",
      "description": "Organizing a group dive trip to Netrani Island? Custom discounted packages, dedicated boat charters, and seamless logistics for groups of 10+ divers."
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
          "name": "Bulk Scuba Booking",
          "item": "https://www.murudeshwarscubadive.in/bulk-scuba-booking"
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
            Group Excursions
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            Group &amp; Bulk Bookings
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Custom itineraries, private boat charter options, and tiered group rates for college tours, corporate retreats, and large family gatherings.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {corporateBenefits.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#00D4FF]/25 hover:bg-white/[0.04] transition-all duration-300 shadow-2xl space-y-3"
              >
                <h3 className="text-lg font-bold text-white font-display leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Group Box */}
          <div className="bg-gradient-to-br from-[#002B5B] to-[#00111F] border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white font-display tracking-tight border-b border-white/5 pb-3">
              Request A Custom Group Quote
            </h2>
            <p className="text-gray-300 leading-relaxed font-medium text-sm md:text-base max-w-xl mx-auto">
              Planning a trip with 10 or more people? Connect directly with our group coordinator via phone or WhatsApp to lock in private boat availability, customized dive rotations, and group pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 text-xs font-bold uppercase tracking-widest font-display">
              <a
                href="tel:+917829975777"
                className="w-full sm:w-auto bg-[#00D4FF] text-black py-4 px-8 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              >
                Call coordinator
              </a>
              <a
                href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20plan%20a%20group%20scuba%20booking%20for%20our%20trip.%20Please%20connect%20us."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-white/20 bg-white/5 text-white py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
