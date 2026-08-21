import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Netrani Island Scuba Diving in Murudeshwar: Price, Package & Details",
  description:
    "Book the full Netrani Island scuba diving experience from Murudeshwar for ₹3,500. Includes PADI instructor, boat ride, full equipment, and free HD photos.",
  keywords: [
    "Netrani Island scuba diving",
    "Murudeshwar scuba diving",
    "Netrani Island diving",
    "Scuba diving near Netrani Island",
    "Best scuba diving in Murudeshwar",
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
    title: "Netrani Island Scuba Diving in Murudeshwar: Price, Package & Details",
    description:
      "Book the full Netrani Island scuba diving experience from Murudeshwar for ₹3,500. Includes PADI instructor, boat ride, full equipment, and free HD photos.",
    url: "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/images/netrani-diver.png",
        width: 1200,
        height: 630,
        alt: "Scuba diver exploring coral reef at Netrani Island Murudeshwar - best dive experience in Karnataka",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Scuba Diving Package Murudeshwar: Price & Inclusions",
    description:
      "Complete Netrani Island scuba diving packages from Murudeshwar. Price starting at ₹3,500 with gear, guide, and photos included.",
    images: ["/images/netrani-diver.png"],
  },
};

export default function NetraniScubaDiving() {
  const features = [
    {
      title: "Boat Ride",
      desc: "Scenic trip to Netrani. 1 hour each way.",
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
      title: "Long Dive",
      desc: "30-40 minutes underwater. Depth: up to 12 metres.",
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
      title: "1:1 Instructor",
      desc: "Instructor support through briefing, entry, dive, and return.",
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
      title: "Free Photos",
      desc: "HD photos and videos included. No extra cost.",
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
      title: "Snorkeling",
      desc: "Surface snorkeling during the allowed boat window.",
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
      title: "All Gear",
      desc: "Wetsuit, fins, mask, tank. We provide it all.",
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
      time: "Morning check-in",
      title: "Meet Us",
      desc: "Come to the reporting point near Murudeshwar Temple, complete the form, confirm your booking amount, and meet the dive team.",
      highlight: true,
    },
    {
      time: "After check-in",
      title: "Boat Leaves",
      desc: "Board from Murudeshwar beach for the Netrani Island boat ride. The crossing usually takes around 1 hour each way.",
    },
    {
      time: "At the island",
      title: "Training",
      desc: "We anchor at Netrani. Briefing on safety and signs. Practice breathing in shallow water.",
    },
    {
      time: "Midday",
      title: "Diving Time",
      desc: "Your instructor guides your dive rotation. When you are not diving, you can rest on the boat, have light refreshments, or snorkel if conditions allow.",
    },
    {
      time: "Afternoon",
      title: "Head Back",
      desc: "Pack up, confirm your photo/video delivery process, and check if your group has any onward travel timing.",
    },
    {
      time: "Return window",
      title: "Back on Shore",
      desc: "Arrive at Murudeshwar beach and collect or receive your media through the confirmed sharing method.",
      highlight: true,
    },
  ];

  const faqs = [
    {
      q: "Is this the official Netrani scuba diving package in Murudeshwar?",
      a: "Yes. This is our direct full Netrani package from Murudeshwar with boat ride, instructor support, and included photos.",
    },
    {
      q: "Is it safe for beginners?",
      a: "Yes. Beginners are guided by trained instructors, briefed before entering the water, and supported throughout the dive.",
    },
    {
      q: "Age limit?",
      a: "10 to 60 years. Kids under 10 can come on the boat and snorkel, but no tank diving.",
    },
    {
      q: "Glasses?",
      a: "You cannot wear spectacles inside the scuba mask. Contact lenses are usually fine, and many guests with mild power manage comfortably without spectacles.",
    },
    {
      q: "Bad weather?",
      a: "Safety first. If the coast guard says no, we cancel. You get a full refund or reschedule.",
    },
    {
      q: "Phone policy?",
      a: "Bring it. Keep it in a waterproof bag. Great for photos on the boat.",
    },
    {
      q: "How far is Netrani Island from Murudeshwar Beach and how long is the boat ride?",
      a: "Netrani Island is located 19 km off Murudeshwar coast in the Arabian Sea. The scenic boat ride takes approximately 60 to 75 minutes each way with views of the Shiva statue and frequent dolphin sightings.",
    },
    {
      q: "What marine life can I expect to see underwater at Netrani Island?",
      a: "Netrani is home to vibrant coral reefs, parrotfish, butterflyfish, triggerfish, giant honeycomb moray eels, barracudas, groupers, stingrays, and sea turtles.",
    },
    {
      q: "Do you provide all the scuba gear and safety equipment on the boat?",
      a: "Yes. Complete gear including neoprene wetsuits, silicone dive masks, BCD buoyancy jackets, regulators, scuba tanks, fins, and safety life vests are included.",
    },
    {
      q: "What is the difference between the Intro Try Dive (₹1,999) and the Full Netrani Dive (₹3,500)?",
      a: "The Intro Try Dive gives you 10-15 minutes underwater at 5-8m depth. The Full Netrani Dive gives you 30-40 minutes of bottom time up to 12m depth, extended reef exploration, and complimentary refreshments on board.",
    },
    {
      q: "Can I bring my own action camera or GoPro?",
      a: "Yes, you are welcome to bring your personal action camera with waterproof housing. Our instructors also record free HD photos and videos of your dive using our professional gear.",
    },
    {
      q: "How does the ₹500 advance slot booking work?",
      a: "You pay a nominal ₹500 advance per person via UPI/Card to reserve your boat seat and dedicated 1:1 instructor. The remaining balance is paid upon morning check-in at our desk.",
    },
  ];

  const guides = [
    {
      title: "Scuba Price Guide (2026)",
      desc: "Updated Murudeshwar scuba price per person, cost factors, and what the official price includes.",
      href: "/blog/murudeshwar-scuba-diving-price-cost",
      label: "Price Guide",
    },
    {
      title: "Age Limit + Medical Rules",
      desc: "Minimum age, fitness tips, and who can safely dive at Netrani.",
      href: "/blog/scuba-diving-age-limit",
      label: "Eligibility",
    },
    {
      title: "Best Time for Scuba Diving",
      desc: "Month-by-month Murudeshwar and Netrani Island season guide with visibility and monsoon closure dates.",
      href: "/blog/best-time-scuba-diving-murudeshwar",
      label: "Season Guide",
    },
    {
      title: "Scuba Diving Timings",
      desc: "Reporting time, Netrani boat schedule, dive window, and return-to-shore timing in one guide.",
      href: "/blog/scuba-diving-timings",
      label: "Timing Guide",
    },
    {
      title: "Bangalore to Murudeshwar",
      desc: "Overnight bus/train plan and the easiest travel route.",
      href: "/blog/murudeshwar-scuba-diving-from-bangalore",
      label: "Travel Plan",
    },
    {
      title: "How to Reach Murudeshwar",
      desc: "Map, parking tips, and the boat boarding point.",
      href: "/how-to-reach-murudeshwar",
      label: "Directions",
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
            alt="Scuba diver exploring coral reef at Netrani Island Murudeshwar - best dive experience in Karnataka"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00111F] via-[#00111F]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.15)_0%,transparent_60%)] animate-light-rays mix-blend-screen pointer-events-none z-1"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 max-w-[1200px] mx-auto relative z-10 space-y-4">
          <span className="text-[#00D4FF] font-bold uppercase tracking-widest text-xs font-display">
            Top Choice
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
            Our full-dive package for guests who want the longer Netrani
            experience, with the boat ride, instructor support, and 30 to 40
            minutes underwater included.
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
              Netrani Island is the{" "}
              <strong className="text-white font-semibold">heart of scuba diving in Murudeshwar</strong>. It is around
              19 km off the coast, with clearer seasonal water, reef fish, and
              Karnataka's best-known boat-diving setup.
            </p>
            <p>
              This package covers the main dive-day needs: boat ride, scuba gear,
              instructor support, underwater time, and photos/videos. You only
              need to report on time with basic swimwear and valid booking details.
            </p>
            <p>
              The full Netrani package is best for first-time divers who want
              more underwater time, couples, families, and groups who are
              travelling mainly for the reef experience.
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
              People ask: <em className="text-white italic">&quot;Do I need to know how to swim?&quot;</em>
            </p>
            <p>
              <strong className="text-white font-semibold">No.</strong> Scuba is not swimming. You float. Your BCD
              jacket holds you up. Your instructor guides you. You just breathe.
            </p>
            <p>Most of our guests (70%+) cannot swim. They love it.</p>
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
            Let's Dive
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto font-medium leading-relaxed">
            Netrani is waiting. Book your <strong className="text-white">Murudeshwar scuba diving</strong> slot now.
          </p>
          <div>
            <a
              href="tel:+917829975777"
              className="inline-flex items-center gap-3 bg-[#00D4FF] text-black text-xs font-bold py-4 px-10 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 uppercase tracking-widest font-display shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            >
              Call to Book
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
                Quick Guides
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-display">
              Plan Your Dive Like A Local
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Fast answers for <strong className="text-white">price</strong>, <strong className="text-white">age limit</strong>, <strong className="text-white">timings</strong>, package choice, boating, and route-specific travel planning. These guides are updated for 2026.
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
