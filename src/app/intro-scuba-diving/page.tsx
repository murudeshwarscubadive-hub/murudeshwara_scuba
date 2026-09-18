import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beginner Scuba Diving in Murudeshwar: Intro Try Dive (₹1,999)",
  description:
    "Experience beginner scuba diving at Netrani Island, Murudeshwar for ₹1,999. Ideal entry-level dive for beginners and non-swimmers with 1:1 certified instructor & free HD media.",
  keywords: [
    "Beginner scuba diving in Murudeshwar",
    "Scuba diving for non swimmers",
    "Murudeshwar scuba diving",
    "intro scuba diving murudeshwar",
    "try scuba dive murudeshwara",
    "beginner scuba diving murudeshwar",
    "netrani island try dive",
    "murudeshwara scuba diving price 1999",
    "first time scuba diving murudeshwar",
    "netrani beginner scuba package",
    "murudeshwara scuba booking",
    "scuba dive for non swimmers murudeshwar",
    "murudeshwar intro dive cost",
    "scuba diving karnataka beginners",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/intro-scuba-diving",
  },
  openGraph: {
    title: "Beginner Scuba Diving in Murudeshwar: Intro Try Dive (₹1,999)",
    description:
      "Experience beginner scuba diving at Netrani Island, Murudeshwar for ₹1,999. Ideal entry-level dive for beginners and non-swimmers with 1:1 certified instructor & free HD media.",
    url: "https://www.murudeshwarscubadive.in/intro-scuba-diving",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/images/group-divers.png",
        width: 1200,
        height: 630,
        alt: "First-time divers enjoying an introductory scuba dive at Netrani Island, Murudeshwar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intro Scuba Try Dive Murudeshwar: Price & Info",
    description:
      "Beginner-friendly scuba diving try package at Netrani Island, Murudeshwar starting at ₹1,999 with 1:1 guidance and free HD media.",
    images: ["/images/group-divers.png"],
  },
};

export default function IntroScubaDiving() {
  const whyChoose = [
    {
      title: "Accessible Pricing",
      desc: "At ₹1,999 per person, this entry-level package allows first-time divers, students, and families to experience the Netrani reef without committing to a full excursion.",
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
          className="text-[#00D4FF] w-8 h-8"
          aria-hidden="true"
        >
          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
        </svg>
      ),
    },
    {
      title: "Comfortable & Reassuring",
      desc: "A gentle 10–15 minute guided dive at 5–8m depth is designed specifically to help nervous beginners and non-swimmers feel calm and confident underwater.",
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
          className="text-blue-400 w-8 h-8"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
        </svg>
      ),
    },
    {
      title: "Identical Island Trip",
      desc: "You travel on the exact same boat route to Netrani Island, soak in the scenic coastal views, and explore the same crystal-clear Arabian Sea waters.",
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
          className="text-[#00D4FF] w-8 h-8"
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
      title: "Complimentary HD Media",
      desc: "High-resolution photos and underwater action videos are recorded and shared directly to your mobile at no additional charge.",
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
          className="text-purple-400 w-8 h-8"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      ),
    },
  ];

  const compare = [
    { name: "Cost", intro: "₹1,999", full: "₹3,500", highlight: true },
    { name: "Time Underwater", intro: "10-15 Mins", full: "30-40 Mins" },
    { name: "Depth", intro: "5-8 Meters", full: "Up to 12 Meters" },
    { name: "Boat Ride", intro: "Included", full: "Included" },
    { name: "Photos & Videos", intro: "Included", full: "Included" },
  ];

  const inclusions = [
    "Round-trip boat cruise to Netrani Island",
    "10–15 min 1:1 guided reef dive (5–8m depth)",
    "Dedicated certified instructor by your side",
    "Free HD underwater photos & video clips",
    "Surface snorkeling gear & life vest",
    "Complete sanitized scuba gear & wetsuit",
  ];

  const faqs = [
    {
      q: "Can I upgrade to the Full Netrani package later?",
      a: "Yes. If sea conditions and instructor scheduling allow on the day, you can comfortably upgrade to the 30–40 minute Full Netrani Dive by paying the remaining fare difference at our desk.",
    },
    {
      q: "Is this package safe for non-swimmers and first-timers?",
      a: "Yes. Non-swimmers can complete the Intro Dive with absolute confidence. Your personal certified instructor manages your buoyancy, depth, and movement throughout the dive while your BCD jacket provides natural flotation.",
    },
    {
      q: "Are group discounts available for families and student groups?",
      a: "Yes. For college groups, corporate outings, and family gatherings with 10 or more participants, we provide custom scheduling and group packages. Reach out via phone or WhatsApp to coordinate.",
    },
    {
      q: "What is the total duration of the trip?",
      a: "The activity is structured as a comprehensive morning sea expedition. Reporting begins around 8:00 AM, followed by the boat cruise to Netrani, guided dive turns, surface snorkeling, and a return to Murudeshwar beach by early afternoon.",
    },
    {
      q: "How deep will I go during the Intro Try Dive?",
      a: "The Intro Try Dive reaches a comfortable depth of 5 to 8 metres. At this level, natural sunlight penetrates clearly, illuminating vibrant coral heads and schooling reef fish with minimal water pressure.",
    },
    {
      q: "What if I feel nervous or want to surface during the dive?",
      a: "Your instructor is holding your harness 1-on-1 throughout the session. If you feel any discomfort or simply want to pause, give the thumbs-up hand signal and your instructor will gently guide you to the calm surface within seconds.",
    },
    {
      q: "How do I equalize ear pressure underwater?",
      a: "During the shallow-water briefing, your instructor teaches you the simple Valsalva technique: gently pinch your nostrils closed and exhale softly through your nose. This equalizes your middle ears smoothly as you descend.",
    },
    {
      q: "Is there a safe place to store luggage and valuables?",
      a: "Yes. You can store heavy bags in our secure shore reporting facility, or keep your personal day items in dry compartments provided aboard our dive boat.",
    },
    {
      q: "What are the medical considerations for the Intro Dive?",
      a: "Participants should be in normal health. Conditions such as untreated heart issues, severe asthma requiring continuous medication, epilepsy, recent major surgeries, or pregnancy preclude scuba diving for safety.",
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
      "@id": "https://www.murudeshwarscubadive.in/intro-scuba-diving/#service",
      "name": "Intro Scuba Try Dive Package",
      "serviceType": "Beginner Scuba Diving Experience",
      "image": "https://www.murudeshwarscubadive.in/images/group-divers.png",
      "description": "Try scuba diving at Netrani Island, Murudeshwar. Perfect entry package for beginners and non-swimmers. Includes 1:1 instructor guidance, gear rental, and free HD photos & videos.",
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
        "url": "https://www.murudeshwarscubadive.in/intro-scuba-diving",
        "priceCurrency": "INR",
        "price": "1999",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock"
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
          "name": "Intro Scuba Try Dive",
          "item": "https://www.murudeshwarscubadive.in/intro-scuba-diving"
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
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-[#00111F] pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/group-divers.png"
            alt="First-time divers enjoying an introductory scuba dive at Netrani Island, Murudeshwar"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00111F] via-[#00111F]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.15)_0%,transparent_60%)] animate-light-rays mix-blend-screen pointer-events-none z-1"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 max-w-[1200px] mx-auto relative z-10 space-y-4">
          <span className="text-black bg-[#00D4FF] w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-display shadow-[0_0_15px_rgba(0,212,255,0.3)]">
            First-Time Diver Special
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-tight max-w-4xl">
            Intro Scuba (Try Dive)
          </h1>
          <div className="flex items-center gap-4 pt-2">
            <p className="text-3xl font-black text-[#00D4FF] font-display">₹1,999</p>
            <p className="text-gray-500 line-through font-semibold text-lg">₹3,000</p>
            <span className="bg-white/5 border border-white/10 px-4 py-1 rounded-full text-xs text-gray-300 font-semibold tracking-wide backdrop-blur-md">
              per person
            </span>
          </div>
          <p className="text-gray-300 max-w-xl text-base md:text-lg font-medium leading-relaxed">
            The ideal beginner-friendly <strong className="text-white">scuba diving in Murudeshwar</strong> package. Includes scenic Netrani Island boat transit, dedicated 1:1 certified instructor guidance, shallow reef exploration, and complimentary HD media.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto px-6 py-16 space-y-24 relative z-10">
        {/* About Intro Scuba */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white border-b border-white/5 pb-3">About Intro Scuba</h2>
          <div className="prose prose-invert max-w-none text-gray-300 text-base md:text-lg leading-relaxed space-y-6 font-medium">
            <p>
              The <strong className="text-white font-semibold">Intro Scuba (Try Dive)</strong> is specifically designed for first-time adventurers, non-swimmers, families, and travelers who want to explore Netrani Island&apos;s marine beauty without committing to a longer, deeper dive on day one.
            </p>
            <p>
              You experience the complete coastal sea journey—including the 19-kilometer boat crossing across the Arabian Sea, comprehensive equipment briefing, and certified gear rental. Your underwater session provides 10 to 15 minutes of bottom time at an easy, sun-drenched depth of 5 to 8 meters, where healthy coral gardens and curious fish thrive.
            </p>
            <p>
              With your personal instructor holding your harness throughout the dive, you can breathe calmly, enjoy the feeling of weightlessness, and take your first memorable steps into the underwater world.
            </p>
          </div>
        </section>

        {/* Why Choose Grid */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white border-b border-white/5 pb-3">
            Why Choose This Package?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#00D4FF]/25 transition-all shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Compare Table */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white border-b border-white/5 pb-3">Quick Compare</h2>
          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.01]">
            <table className="w-full text-left min-w-[500px]">
              <thead className="bg-white/5 text-gray-200 border-b border-white/10 font-display text-xs uppercase tracking-widest font-semibold">
                <tr>
                  <th className="p-5 md:p-6">Feature</th>
                  <th className="p-5 md:p-6 text-[#00D4FF] border-l border-white/10">
                    Intro Dive
                  </th>
                  <th className="p-5 md:p-6 text-gray-400 border-l border-white/10">
                    Full Dive
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-300 text-sm md:text-base font-medium">
                {compare.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 md:p-6 font-semibold">
                      {row.name}
                    </td>
                    <td
                      className={`p-5 md:p-6 font-black border-l border-white/10 text-[#00D4FF] font-display ${
                        row.highlight ? "text-lg md:text-xl text-[#00D4FF]" : ""
                      }`}
                    >
                      {row.intro}
                    </td>
                    <td className="p-5 md:p-6 border-l border-white/10">
                      {row.full}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* You Get Checklist */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white border-b border-white/5 pb-3">You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-5 glass-panel rounded-2xl border border-white/10 hover:border-[#00D4FF]/25 transition-all shadow-xl"
              >
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
                  className="w-5 h-5 text-emerald-400"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-base font-semibold text-gray-200">{item}</span>
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
            Start Your Diving Journey
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto font-medium leading-relaxed">
            Experience the magic of Netrani Island for just ₹1,999. Reserve your morning slot with an advance deposit of ₹500 per diver.
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
