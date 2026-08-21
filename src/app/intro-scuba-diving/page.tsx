import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beginner Scuba Diving in Murudeshwar: Intro Try Dive ₹1,999",
  description:
    "Try beginner scuba diving at Netrani Island, Murudeshwar for just ₹1,999. Ideal package for beginners and non-swimmers with 1:1 PADI instructor & free photos.",
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
    title: "Beginner Scuba Diving in Murudeshwar: Intro Try Dive ₹1,999",
    description:
      "Try beginner scuba diving at Netrani Island, Murudeshwar for just ₹1,999. Easiest package for beginners and non-swimmers with instructor support & free photos.",
    url: "https://www.murudeshwarscubadive.in/intro-scuba-diving",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/images/group-divers.png",
        width: 1200,
        height: 630,
        alt: "Intro Scuba Diving for Beginners at Netrani Island Murudeshwar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intro Scuba Try Dive Murudeshwar: Price & Info",
    description:
      "Beginner-friendly scuba diving try package at Netrani Island, Murudeshwar starting at ₹1,999 with guidance and photos.",
    images: ["/images/group-divers.png"],
  },
};

export default function IntroScubaDiving() {
  const whyChoose = [
    {
      title: "Smart Price",
      desc: "₹1,999 per person. It is the easiest entry-level scuba package for families, student groups, and first-time divers.",
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
      title: "Less Scary",
      desc: "A 15-minute guided dive is easier for nervous first-timers and guests who want a short, comfortable first attempt.",
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
      title: "Same Boat",
      desc: "You still get the Netrani boat ride, the same sea route, and the same island setting as the full package.",
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
      title: "Free Photos",
      desc: "We include photos for everyone. Yes, even for the Intro Dive.",
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
    { name: "Depth", intro: "5-8 Meters", full: "12 Meters" },
    { name: "Boat Ride", intro: "Included", full: "Included" },
    { name: "Photos", intro: "Included", full: "Included" },
  ];

  const inclusions = [
    "Boat trip to Netrani",
    "15-minute guided dive",
    "Instructor included",
    "Photos & Videos included",
    "Snorkeling included",
    "All gears provided",
  ];

  const faqs = [
    {
      q: "Can I upgrade later?",
      a: "Yes. Start with the Intro package. If sea conditions, slot flow, and instructor availability allow it, you can pay the difference and move to the full Netrani dive.",
    },
    {
      q: "Safe for non-swimmers?",
      a: "Yes. Non-swimmers can do the Intro Dive because the instructor controls the dive, supports your gear, and guides you throughout the underwater time.",
    },
    {
      q: "Group discounts?",
      a: "Yes. College groups, families, and teams with 10 or more people can call or WhatsApp for group slot planning and package options.",
    },
    {
      q: "Total time?",
      a: "Plan it as a full-day sea trip. The usual window is morning reporting, Netrani boat travel, dive rotation, and return to shore by afternoon.",
    },
    {
      q: "How deep will I go during the Intro Try Dive?",
      a: "The Intro Try Dive takes you to a comfortable depth of 5 to 8 metres. This depth offers abundant sunlight, vibrant corals, and active fish life without intense pressure.",
    },
    {
      q: "What if I feel panic or discomfort underwater?",
      a: "Your instructor is holding you 1-on-1 throughout the dive. If you feel uneasy, simply show the 'Up' thumb signal and your instructor will gently float you to the calm surface within seconds.",
    },
    {
      q: "How do I equalize my ears underwater?",
      a: "As you descend, gently pinch your nose and blow out through your nose with your mouth closed (the Valsalva maneuver). This effortlessly pops your ears and equalizes pressure.",
    },
    {
      q: "Is there a safe place to store my luggage and valuables?",
      a: "Yes. You can leave heavy luggage in our secure reporting office on shore, or place your day bags in the dry storage compartments on board the dive boat.",
    },
    {
      q: "What are the medical restrictions for the Intro Dive?",
      a: "Participants must be in good health. Individuals with active asthma requiring inhalers, heart conditions, epilepsy, recent major surgeries, or pregnant women cannot dive for safety reasons.",
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
            alt="Intro Scuba Diving for Beginners at Netrani Island Murudeshwar"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00111F] via-[#00111F]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.15)_0%,transparent_60%)] animate-light-rays mix-blend-screen pointer-events-none z-1"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 max-w-[1200px] mx-auto relative z-10 space-y-4">
          <span className="text-black bg-[#00D4FF] w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-display shadow-[0_0_15px_rgba(0,212,255,0.3)]">
            Best Value
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
            A beginner-friendly <strong className="text-white">scuba diving in Murudeshwar</strong>{" "}
            package with boat ride, instructor support, photos, and a short
            guided dive at Netrani Island.
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
              <strong className="text-white font-semibold">Intro Scuba</strong> is for first-time divers, non-swimmers,
              families, and travellers who want a safe first experience without
              choosing the longer full-dive package.
            </p>
            <p>
              You get the Netrani Island boat ride, scuba gear, instructor
              briefing, and underwater photos. The dive is shorter at around 15
              minutes and shallower at 5-8 metres.
            </p>
            <p>
              It is the simplest way to try Netrani scuba before deciding whether
              you want a longer full-dive experience later.
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
            Book Intro Dive
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto font-medium leading-relaxed">
            Secure your spot for just ₹1,999.
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
