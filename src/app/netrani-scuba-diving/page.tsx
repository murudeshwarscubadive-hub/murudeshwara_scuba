import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Netrani Island Scuba Diving Murudeshwar: Package, Price & Details",
  description:
    "Book the full Netrani Island scuba diving experience from Murudeshwar for ₹3,500. Includes 30–40 min reef dive, 1:1 certified instructor, boat trip, gear, and free HD media.",
  keywords: [
    "Netrani Island scuba diving",
    "Murudeshwar scuba diving",
    "Netrani Island diving",
    "Scuba diving near Netrani Island",
    "Scuba diving in Murudeshwar",
    "netrani scuba diving",
    "netrani scuba package",
    "murudeshwara netrani scuba diving",
    "scuba diving in murudeshwar netrani",
    "netrani scuba diving price",
    "netrani island diving murudeshwar",
    "netrani island booking",
    "netrani island pigeon island scuba",
    "murudeshwara scuba diving",
    "scuba diving in murudeshwara",
    "karnataka scuba diving netrani",
    "netrani coral reef diving",
    "deep scuba diving netrani murudeshwar",
    "padi scuba netrani island",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
  },
  openGraph: {
    title: "Netrani Island Scuba Diving Murudeshwar: Package, Price & Details",
    description:
      "Book the full Netrani Island scuba diving experience from Murudeshwar for ₹3,500. Includes 30–40 min reef dive, 1:1 certified instructor, boat trip, gear, and free HD media.",
    url: "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/images/netrani-diver.png",
        width: 1200,
        height: 630,
        alt: "Scuba diver exploring vibrant coral reef ecosystem at Netrani Island off Murudeshwar coast",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Scuba Diving Package Murudeshwar: Price & Inclusions",
    description:
      "Complete Netrani Island scuba diving packages from Murudeshwar. Official price starting at ₹3,500 with gear, 1:1 instructor, and HD photos included.",
    images: ["/images/netrani-diver.png"],
  },
};

export default function NetraniScubaDiving() {
  const features = [
    {
      title: "Scenic Boat Crossing",
      desc: "Around 60–75 min coastal voyage each way from Murudeshwar beach past the Shiva statue.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-[#00D4FF] flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path>
          <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
          <path d="M12 2v3"></path>
          <path d="M12 10v4"></path>
        </svg>
      ),
    },
    {
      title: "30–40 Min Dive",
      desc: "Extended bottom time reaching depths up to 12 metres across thriving coral reef formations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-[#00D4FF] flex-shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "1:1 Certified Instructor",
      desc: "Personal certified dive professional by your side through briefing, descent, dive, and return.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-[#00D4FF] flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Complimentary HD Media",
      desc: "High-definition underwater photographs and action video clips included at no extra charge.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-[#00D4FF] flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Surface Snorkeling",
      desc: "Complimentary snorkeling gear to explore surface reef life while waiting on the boat.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-[#00D4FF] flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: "Full Equipment Rental",
      desc: "Sanitized wetsuit, silicone mask, snorkel, fins, regulator, and BCD buoyancy jacket provided.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-[#00D4FF] flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M12 6v16"></path>
          <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path>
          <path d="M9 11h6"></path>
          <circle cx="12" cy="4" r="2"></circle>
        </svg>
      ),
    },
  ];

  const timeline = [
    {
      time: "8:00 AM – 8:30 AM",
      title: "Reporting & Safety Briefing",
      desc: "Meet our dive team near Murudeshwar Temple Beach, verify booking confirmation, fill medical declarations, and get fitted with sanitized gear.",
      highlight: true,
    },
    {
      time: "8:30 AM – 9:45 AM",
      title: "Boat Departure for Netrani",
      desc: "Board the licensed dive boat for a 19 km cruise across the Arabian Sea, enjoying panoramic coastline vistas and frequent dolphin sightings.",
    },
    {
      time: "9:45 AM – 10:15 AM",
      title: "Shallow Skills & Breathing Practice",
      desc: "Anchor in Netrani's sheltered bay. Learn regulator breathing, mask equalization, and underwater hand communications in calm surface waters.",
    },
    {
      time: "10:15 AM – 1:30 PM",
      title: "Guided Coral Reef Dive",
      desc: "Descend 1-on-1 with your personal instructor for 30–40 minutes of reef exploration. Relax on the boat, have refreshments, or snorkel between dive turns.",
    },
    {
      time: "1:30 PM – 2:30 PM",
      title: "Return Boat Journey",
      desc: "Cruising back toward the Murudeshwar shoreline. Review your dive experience, unwind under the sun canopy, and prepare for shore arrival.",
    },
    {
      time: "2:30 PM – 3:00 PM",
      title: "Shore Arrival & Media Transfer",
      desc: "Disembark at Murudeshwar beach and receive your high-resolution underwater photos and HD video clips directly to your smartphone.",
      highlight: true,
    },
  ];

  const faqs = [
    {
      q: "Is this the official Netrani scuba diving package in Murudeshwar?",
      a: "Yes. This is our comprehensive Netrani Island diving expedition departing directly from Murudeshwar beach. It features dedicated 1:1 certified instructor guidance, full boat transit, premium equipment, extended bottom time, and free HD media.",
    },
    {
      q: "Is it safe for beginners and first-timers?",
      a: "Yes. Every beginner diver is paired individually with a certified dive instructor throughout the entire dive. You receive a thorough theory and shallow-water briefing before entering the water, and your instructor maintains physical contact to regulate buoyancy and depth.",
    },
    {
      q: "What is the eligible age limit for scuba diving at Netrani?",
      a: "Participants must be at least 10 years old, with general medical fitness up to age 60. Children under 10 are welcome on the boat under parental supervision to enjoy snorkeling and dolphin watching, but cannot dive with scuba cylinders.",
    },
    {
      q: "Can I dive if I wear spectacles or prescription glasses?",
      a: "Standard eyeglasses cannot be worn inside a scuba mask as they prevent a watertight seal. Soft contact lenses are completely safe and widely used during diving. Guests with mild vision corrections can comfortably dive without corrective lenses due to natural underwater magnification.",
    },
    {
      q: "What happens if weather or sea conditions are unfavorable?",
      a: "Diver safety is our paramount priority. If port or coastal authorities issue weather alerts or sea swells exceed safe operational limits, the boat trip is cancelled. Guests receive a 100% full refund or the option to reschedule to another date with zero penalties.",
    },
    {
      q: "Can I bring my mobile phone and personal action camera on the boat?",
      a: "Yes, you can bring mobile devices and action cameras. We recommend keeping phones in waterproof pouches or dry bags. You are also welcome to carry your personal GoPro or action camera with waterproof housing on your dive.",
    },
    {
      q: "How far is Netrani Island from Murudeshwar Beach and how long is the boat ride?",
      a: "Netrani Island is situated approximately 19 km off the Murudeshwar coast in the open Arabian Sea. The scenic cruise takes roughly 60 to 75 minutes each way, offering views of the famous 123-foot Shiva statue and coastal horizons.",
    },
    {
      q: "What marine life can I expect to see underwater at Netrani Island?",
      a: "Netrani's rocky coral reef hosts rich marine biodiversity, including parrotfish, butterflyfish, clownfish, angelfish, honeycomb moray eels, barracudas, stingrays, and occasional sea turtles or coral reef sharks.",
    },
    {
      q: "Do you provide all the scuba gear and safety equipment on the boat?",
      a: "Yes. We supply complete, well-maintained equipment including neoprene wetsuits, silicone dive masks, BCD buoyancy jackets, balanced regulators, filled scuba cylinders, fins, and marine life jackets.",
    },
    {
      q: "What is the difference between the Intro Try Dive (₹1,999) and the Full Netrani Dive (₹3,500)?",
      a: "The Intro Try Dive offers a 10–15 minute introductory sub-surface experience up to 5–8m depth. The Full Netrani Dive gives you 30–40 minutes of bottom time reaching up to 12m depth, extensive reef exploration, surface snorkeling, and complimentary on-boat refreshments.",
    },
    {
      q: "Are underwater photos and videos really free with this package?",
      a: "Yes. Your instructor records high-resolution underwater photos and HD video clips during your dive session using action cameras. These files are transferred directly to your smartphone on the same day at zero extra cost.",
    },
    {
      q: "How does the ₹500 advance slot booking work?",
      a: "To reserve your boat seat and allocate your dedicated 1:1 certified instructor, you pay a nominal advance deposit of ₹500 per person online. The remaining balance is paid conveniently in cash or via UPI during morning check-in at Murudeshwar.",
    },
  ];

  const guides = [
    {
      title: "Netrani Scuba Rates & Cost Breakdown (2026)",
      desc: "Transparent breakdown of Murudeshwar scuba diving fees, gear rentals, and package inclusions.",
      href: "/blog/murudeshwar-scuba-diving-price-cost",
      label: "Rate Breakdown",
    },
    {
      title: "Diver Eligibility & Medical Standards",
      desc: "Clear age eligibility, medical criteria, and health recommendations for diving at Netrani Island.",
      href: "/blog/scuba-diving-age-limit",
      label: "Participation Rules",
    },
    {
      title: "Peak Diving Months & Sea Visibility",
      desc: "Seasonal weather and sea visibility breakdown for Murudeshwar, with monsoon closure timelines.",
      href: "/blog/best-time-scuba-diving-murudeshwar",
      label: "Seasonal Calendar",
    },
    {
      title: "Excursion Schedule & Boat Timings",
      desc: "Reporting times, boat departure slots, dive rotation schedules, and return timings.",
      href: "/blog/scuba-diving-timings",
      label: "Daily Timetable",
    },
    {
      title: "Bangalore to Murudeshwar Travel Plan",
      desc: "Optimal road, bus, and train travel routes for weekend scuba excursions from Bangalore.",
      href: "/blog/murudeshwar-scuba-diving-from-bangalore",
      label: "Route Advice",
    },
    {
      title: "How to Reach Murudeshwar Beach",
      desc: "Step-by-step travel directions via Konkan Railway, NH 66, and nearest coastal airports.",
      href: "/how-to-reach-murudeshwar",
      label: "Transit Map",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.murudeshwarscubadive.in/netrani-scuba-diving/#service",
      "name": "Netrani Island Scuba Diving Package",
      "serviceType": "Scuba Diving Excursion",
      "image": "https://www.murudeshwarscubadive.in/images/netrani-diver.png",
      "description": "Full Netrani Island scuba diving experience from Murudeshwar. Includes scenic boat crossing, 30-40 mins dive time, gear rental, PADI instructor guidance, and free HD photos & videos.",
      "provider": {
        "@type": "SportsActivityLocation",
        "name": "Murudeshwar Scuba Dive",
        "url": "https://www.murudeshwarscubadive.in",
        "telephone": "+917829975777",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Temple Main Road, Murudeshwar Beach",
          "addressLocality": "Murudeshwar",
          "addressRegion": "Karnataka",
          "postalCode": "581350",
          "addressCountry": "IN"
        }
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Murudeshwar, Karnataka, India"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
        "priceCurrency": "INR",
        "price": "3500",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": "Netrani Island Scuba Diving Day Trip",
      "description": "Full day sea excursion to Netrani Island with 1:1 guided scuba diving, snorkeling, and underwater photography.",
      "touristType": ["Beginner Divers", "Certified Divers", "Adventure Travelers"],
      "itinerary": {
        "@type": "ItemList",
        "numberOfItems": timeline.length,
        "itemListElement": timeline.map((step, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": step.title,
          "description": step.desc
        }))
      }
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
          "name": "Netrani Scuba Diving",
          "item": "https://www.murudeshwarscubadive.in/netrani-scuba-diving"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <main className="bg-[#00111F] min-h-screen text-white font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] w-full bg-[#00111F] pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/netrani-diver.png"
            alt="Scuba diver exploring vibrant coral reef ecosystem at Netrani Island off Murudeshwar coast"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00111F] via-[#00111F]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.15)_0%,transparent_60%)] animate-light-rays mix-blend-screen pointer-events-none z-1"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 max-w-[1200px] mx-auto relative z-10 space-y-4">
          <span className="text-[#00D4FF] font-bold uppercase tracking-widest text-xs font-display">
            Signature Ocean Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-tight max-w-4xl">
            Netrani Scuba Diving in Murudeshwar
          </h1>
          <div className="flex items-center gap-4 pt-2">
            <p className="text-3xl font-black text-[#00D4FF] font-display">₹3,500</p>
            <p className="text-gray-500 line-through font-semibold text-lg">₹4,500</p>
            <span className="bg-white/5 border border-white/10 px-4 py-1 rounded-full text-xs text-gray-300 font-semibold tracking-wide backdrop-blur-md">
              per person
            </span>
          </div>
          <p className="text-gray-300 max-w-xl text-base md:text-lg font-medium leading-relaxed">
            Immerse yourself in Karnataka&apos;s most celebrated marine ecosystem with 30 to 40 minutes of bottom time, dedicated 1:1 instructor guidance, full equipment, and complimentary HD media.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto px-6 py-16 space-y-24 relative z-10">
        {/* About the Dive */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white border-b border-white/5 pb-3">About The Dive</h2>
          <div className="prose prose-invert max-w-none text-gray-300 text-base md:text-lg leading-relaxed space-y-6 font-medium">
            <p>
              Netrani Island—often referred to as Pigeon Island—is an uninhabited oceanic sanctuary located 19 kilometers off the Murudeshwar coastline. Rising from the Arabian Sea, its surrounding waters feature vibrant coral reef gardens, dramatic rock pinnacles, and rich marine biodiversity.
            </p>
            <p>
              Our Netrani Island Scuba Diving package is crafted for adventure seekers, couples, families, and first-time explorers who desire a complete underwater journey. From licensed boat transit and international-standard gear to personalized 1-on-1 instructor support throughout your dive, every detail is organized to ensure comfort, enjoyment, and complete peace of mind.
            </p>
            <p>
              Whether you wish to glide alongside schools of butterflyfish and triggerfish or experience the tranquil sensation of neutral buoyancy beneath the surface, this full excursion delivers generous underwater time and crystal-clear memories.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-4 text-sm font-semibold uppercase tracking-wider font-display">
            <Link
              href="/blog/murudeshwar-scuba-diving-price-cost"
              className="text-[#00D4FF] hover:text-white transition-colors"
            >
              Murudeshwar scuba diving price guide →
            </Link>
            <Link
              href="/blog/scuba-diving-timings"
              className="text-[#00D4FF] hover:text-white transition-colors"
            >
              Netrani boat timings and schedule →
            </Link>
            <Link
              href="/blog/scuba-diving-age-limit"
              className="text-[#00D4FF] hover:text-white transition-colors"
            >
              Scuba age limit and medical rules →
            </Link>
            <Link
              href="/blog/best-time-scuba-diving-murudeshwar"
              className="text-[#00D4FF] hover:text-white transition-colors"
            >
              Best season for Netrani scuba →
            </Link>
          </div>
        </section>

        {/* No Swimming Needed callout */}
        <section className="glass-panel rounded-3xl p-8 border-l-4 border-[#00D4FF] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-3 font-display">
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
              className="text-[#00D4FF] w-6 h-6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
              <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
              <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
              <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
            </svg>
            No Swimming Needed
          </h3>
          <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4 font-medium">
            <p>
              A common question from first-time visitors is: <em className="text-white italic">&quot;Can I do scuba diving if I don&apos;t know how to swim?&quot;</em>
            </p>
            <p>
              The reassuring answer is: <strong className="text-white font-semibold">Absolutely, yes.</strong> Scuba diving does not require swimming skills or treading water. You stay effortlessly afloat on the surface wearing your BCD (Buoyancy Control Device) jacket. Underwater, your certified instructor holds your harness, managing your buoyancy, depth, and direction while you simply relax and breathe naturally through your regulator.
            </p>
            <p>Over 70% of our daily participants are first-time non-swimmers who have an unforgettable, secure experience.</p>
          </div>
        </section>

        {/* What You Get Grid */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white border-b border-white/5 pb-3">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 glass-panel rounded-2xl border border-white/10 hover:border-[#00D4FF]/25 transition-all shadow-xl"
              >
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg font-display mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white border-b border-white/5 pb-3">
            How The Day Usually Flows
          </h2>
          <p className="text-gray-400 font-medium">
            Need exact timings for your date? Use the dedicated{" "}
            <Link
              href="/blog/scuba-diving-timings"
              className="text-[#00D4FF] hover:text-white transition-colors"
            >
              Murudeshwar scuba timings guide
            </Link>
            . This section only shows the usual package flow.
          </p>
          <div className="space-y-10 pl-6 border-l border-white/15 ml-4">
            {timeline.map((step, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div
                  className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-[#00111F] transition-colors duration-300 ${
                    step.highlight ? "bg-[#00D4FF] ring-4 ring-[#00D4FF]/20" : "bg-gray-700"
                  }`}
                ></div>
                <span
                  className={`font-bold text-[10px] uppercase tracking-widest block mb-1 font-display ${
                    step.highlight ? "text-[#00D4FF]" : "text-gray-500"
                  }`}
                >
                  {step.time}
                </span>
                <h3 className="font-bold text-xl text-white mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white border-b border-white/5 pb-3">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group glass-panel rounded-2xl border border-white/10 overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-base md:text-lg text-white font-display select-none">
                  {faq.q}
                  <span className="text-[#00D4FF] group-[open]:rotate-180 transition-transform text-xs">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 text-sm md:text-base leading-relaxed font-medium border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA section banner */}
        <section className="mt-12 p-8 md:p-12 bg-gradient-to-br from-[#002B5B] to-[#00111F] border border-white/10 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white font-display tracking-tight">
            Ready for Your Netrani Expedition?
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto font-medium leading-relaxed">
            Slots are limited each morning to maintain dedicated 1:1 instructor attention and uncrowded boat rotations. Lock in your dive date with an advance deposit of ₹500 per diver.
          </p>
          <div>
            <a
              href="tel:+917829975777"
              className="inline-flex items-center gap-3 bg-[#00D4FF] text-black text-xs font-bold py-4 px-10 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 uppercase tracking-widest font-display shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            >
              Call to Book Now
            </a>
          </div>
          <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
            Immediate confirmation • Pay ₹500 advance to block seat
          </p>
        </section>

        {/* Plan Local Guides Grid */}
        <section className="border-t border-white/5 pt-16 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-2">
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
                className="w-3.5 h-3.5 text-[#00D4FF]"
                aria-hidden="true"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span className="text-[#00D4FF] font-bold text-[10px] uppercase tracking-widest font-display">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-display">
              Murudeshwar Scuba Guides &amp; Travel Advice
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Authoritative local resources providing verified answers on <strong className="text-white">package prices</strong>, <strong className="text-white">age eligibility</strong>, <strong className="text-white">boat schedules</strong>, travel routes, and underwater safety for your 2026 trip.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => (
              <Link
                key={idx}
                className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
                href={guide.href}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                    {guide.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                  {guide.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                  {guide.desc}
                </p>
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Guide <span>-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
