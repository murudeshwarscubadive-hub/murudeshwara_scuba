import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Murudeshwar Scuba Diving: Netrani Island Dive Packages & Booking",
  description:
    "Book Murudeshwar scuba diving with Netrani Island packages from ₹1,999. Compare price, timings, age limits, photos, and direct operator booking.",
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
    "netrani scuba diving",
    "netrani island murudeshwar",
    "netrani island murudeshwara",
    "murudeshwara netrani scuba diving",
    "murudeshwar scuba diving price",
    "murudeshwara scuba diving price",
    "murudeshwar scuba booking",
    "murudeshwara scuba booking",
    "scuba diving for non swimmers",
    "pigeon island scuba diving",
    "scuba diving in karnataka",
    "best scuba diving in karnataka",
    "murudeshwar beach scuba diving",
    "murudeshwara water sports",
    "netrani scuba packages",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in",
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
};

export default function Home() {
  const faqs = [
    {
      q: "What is the Murudeshwar scuba diving price per person?",
      a: "The Murudeshwar scuba diving cost starts at ₹1,999 for the Intro Try Dive and ₹3,500 for the full Netrani Island experience. This scuba diving price includes boat charges, equipment rental, PADI instructor fees, and free HD photos/videos.",
      link: "/blog/murudeshwar-scuba-diving-price-cost",
      linkText: "Read Full Price Guide ->",
    },
    {
      q: "When is the best time to visit for scuba diving in Murudeshwar?",
      a: "The best time for scuba diving in Murudeshwar is from October to May. During this Murudeshwar scuba diving season, water visibility at Netrani Island is clearer in season (15-30 metres). Note: Diving is closed during the monsoon (June to September).",
      link: "/blog/best-time-scuba-diving-murudeshwar",
      linkText: "See Best-Time Guide ->",
    },
    {
      q: "Is there an age limit for scuba diving in India?",
      a: "Yes, the scuba diving age limit is 10 years and above for most courses. However, for the \"Intro Try Dive\" at Netrani, anyone above 10 years who is medically fit can participate. There is no strict scuba diving maximum age as long as you are healthy.",
      link: "/blog/scuba-diving-age-limit",
      linkText: "Read Age Limit Guide ->",
    },
    {
      q: "Can non-swimmers do scuba diving in Murudeshwar?",
      a: "Yes. Non-swimmers can do scuba diving in Murudeshwar by starting with the Intro Try Dive. A certified instructor stays with you from the briefing through the guided underwater session, which makes it the easiest package for first-time visitors.",
      link: "/blog/scuba-diving-murudeshwar-non-swimmers",
      linkText: "Read Non-Swimmers Guide ->",
    },
    {
      q: "What are the Netrani Island scuba diving timings?",
      a: "Boats for Netrani Island scuba diving depart daily between 8:00 AM and 9:00 AM from Murudeshwar beach. The trip typically lasts until 3:00 PM. We recommend booking your slot in advance, especially on weekends, as tickets sell out fast.",
      link: "/blog/scuba-diving-timings",
      linkText: "View Timings Guide ->",
    },
    {
      q: "Is Netrani the best choice for first-time divers near Murudeshwar?",
      a: "Netrani Island is often preferred for cleaner visibility, richer reef life, and dedicated scuba operators. Conditions vary by season, but for Murudeshwar-focused diving trips, Netrani is usually the strongest option.",
      link: "/blog/best-scuba-diving-netrani-island",
      linkText: "Compare Dive Spots ->",
    },
    {
      q: "How do I verify the reviews and contact number?",
      a: "You can check recent Murudeshwar scuba diving reviews online to see what guests say. For booking and queries, our direct contact number is +91 78299 75777. Call us to confirm ticket availability.",
      link: "/blog/murudeshwar-scuba-diving-photos-videos",
      linkText: "See Real Photos & Videos ->",
    },
    {
      q: "How do I reach Murudeshwar from Bangalore or Mangalore?",
      a: "Most guests travel overnight by bus or train to reach Murudeshwar early morning for the boat. Self-drive routes via NH 66 are also common. If you're planning a weekend trip, an overnight stay makes the dive day stress-free.",
      link: "/blog/murudeshwar-scuba-diving-from-bangalore",
      linkText: "Read Bangalore Travel Plan ->",
    },
    {
      q: "Is it \"Murudeshwar\" or \"Murdeshwar\" scuba diving?",
      a: "Both spellings refer to the same place! The correct spelling is Murudeshwar (ಮುರುಡೇಶ್ವರ), but it is commonly written as Murdeshwar, Murdeshvar, or Murudeshwara. No matter how you spell it, the scuba diving experience at Netrani Island remains the same — world-class diving from ₹1,999.",
      link: "/how-to-reach-murudeshwar",
      linkText: "How to Reach Murudeshwar ->",
    },
    {
      q: "How far in advance should I book my scuba diving slot in Murudeshwar?",
      a: "We recommend booking at least 3 to 5 days in advance, especially for weekend trips or peak season (October to January). Reserving with a nominal ₹500 advance deposit locks your boat seat and ensures 1:1 instructor allocation.",
      link: "/blog/scuba-diving-booking-murudeshwar",
      linkText: "Read Booking & Deposit Guide ->",
    },
    {
      q: "What should I wear and pack for the Netrani Island boat trip?",
      a: "Wear comfortable swimwear or quick-dry shorts/t-shirts under your clothes. Bring a dry towel, a fresh change of clothes, sunglasses, sunscreen, and a waterproof bag for your phone. We provide clean neoprene wetsuits, dive masks, fins, and all scuba equipment.",
      link: "/blog/beginner-scuba-diving-guide",
      linkText: "See Beginner Packing Checklist ->",
    },
    {
      q: "What happens if the sea is rough or the weather is bad?",
      a: "Safety is our absolute priority. We operate in direct coordination with the Indian Coast Guard. If weather conditions or sea swells are deemed unsafe, trips are cancelled and you receive a 100% full refund or free rescheduling to any date of your choice.",
      link: "/blog/murudeshwar-scuba-diving-safety",
      linkText: "Check Safety & Weather Policies ->",
    },
    {
      q: "Can family members or friends who don't want to dive join the boat?",
      a: "Yes! Non-diving companions, family members, or children can book a Non-Diver Boat Pass (₹1,500). They enjoy the scenic 19 km boat cruise to Netrani Island, safety life jackets, and surface snorkeling gear to explore the reef.",
      link: "/blog/murudeshwar-boating-price",
      linkText: "View Boating & Companion Prices ->",
    },
    {
      q: "Are underwater photos and videos included in the package price?",
      a: "Yes, complimentary HD photos and video clips recorded with action cameras are included free in both the ₹1,999 Intro Dive and ₹3,500 Full Netrani Dive. Media files are transferred directly to your mobile phone or shared via private cloud link on the same day.",
      link: "/blog/murudeshwar-scuba-diving-photos-videos",
      linkText: "Learn About Underwater Media ->",
    },
    {
      q: "Can I fly or travel to high altitudes immediately after scuba diving?",
      a: "Following international PADI safety standards, divers should wait at least 12 to 18 hours after a single introductory dive and 24 hours after multiple dives before boarding a commercial airplane or traveling to high-altitude hill stations (above 1,000 ft).",
      link: "/blog/scuba-diving-timings",
      linkText: "Read Safety Timings & Rest Guide ->",
    },
    {
      q: "Can I scuba dive if I wear spectacles or contact lenses?",
      a: "You cannot wear standard spectacles inside a scuba mask. However, soft contact lenses are completely safe and comfortable to wear while diving. If you have mild vision correction, the underwater refraction naturally magnifies objects by about 33%, allowing you to see clearly even without lenses.",
      link: "/blog/scuba-diving-age-limit",
      linkText: "Read Medical & Vision Guidelines ->",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "SportsActivityLocation"],
      "@id": "https://www.murudeshwarscubadive.in/#location",
      "name": "Murudeshwar Scuba Dive",
      "image": "https://www.murudeshwarscubadive.in/hero.webp",
      "telephone": "+917829975777",
      "email": "murudeshwar.scuba.dive@gmail.com",
      "url": "https://www.murudeshwarscubadive.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Temple Main Road, Murudeshwar Beach",
        "addressLocality": "Murudeshwar",
        "addressRegion": "Karnataka",
        "postalCode": "581350",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 14.0945,
        "longitude": 74.4844
      },
      "priceRange": "₹1999 - ₹3500",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "15:00"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Murudeshwar Scuba Diving Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Intro Scuba Try Dive",
              "description": "Beginner and non-swimmer friendly 1:1 guided scuba dive at Netrani Island with free HD photos.",
              "url": "https://www.murudeshwarscubadive.in/intro-scuba-diving",
              "provider": {
                "@type": "SportsActivityLocation",
                "name": "Murudeshwar Scuba Dive"
              }
            },
            "price": "1999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Netrani Island Scuba Diving Package",
              "description": "Full 30-40 minute scuba diving package at Netrani Island with boat transfer, 1:1 instructor, gear, and free HD media.",
              "url": "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
              "provider": {
                "@type": "SportsActivityLocation",
                "name": "Murudeshwar Scuba Dive"
              }
            },
            "price": "3500",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.murudeshwarscubadive.in/#organization",
      "name": "Murudeshwar Scuba Dive",
      "url": "https://www.murudeshwarscubadive.in",
      "logo": "https://www.murudeshwarscubadive.in/favicon-32x32.png",
      "sameAs": [
        "https://www.instagram.com/murudeshwar_scuba_dive/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-78299-75777",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada", "Hindi"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.murudeshwarscubadive.in/#website",
      "url": "https://www.murudeshwarscubadive.in",
      "name": "Murudeshwar Scuba Dive",
      "description": "Book Murudeshwar scuba diving with Netrani Island packages starting from ₹1,999."
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
    <main className="min-h-screen bg-[#00111F] text-white relative font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero Section */}
      <div className="relative w-full h-[100dvh] overflow-hidden bg-[#00111F]">
        {/* Immersive Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block absolute inset-0">
            <Image
              alt="Best scuba diving in Murudeshwar at Netrani Island - underwater adventure with coral reefs"
              src="/hero.webp"
              fill
              priority
              className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-[10000ms] ease-out"
              quality={85}
            />
          </div>
          <div className="md:hidden absolute inset-0">
            <Image
              alt="Beginner scuba diving session at Netrani Island reef in Murudeshwar, Karnataka"
              src="/heromobile.webp"
              fill
              priority
              className="object-cover object-center"
              quality={85}
            />
          </div>
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00111F]/80 via-transparent to-[#00111F]/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_30%,#00111F_95%)]"></div>

          {/* breathing light rays through water */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(0,212,255,0.18)_0%,transparent_60%)] animate-light-rays mix-blend-screen pointer-events-none z-1"></div>
        </div>

        {/* Floating Anchor / Logo - Subtly Integrated */}
        <div className="absolute top-1/3 right-10 w-28 h-28 opacity-15 animate-float pointer-events-none z-5 hidden md:block">
          <Image
            alt=""
            aria-hidden="true"
            src="/images/fishing.png"
            fill
            className="object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-12 max-w-[1600px] mx-auto pt-28 pb-12 md:justify-center md:pt-0 md:pb-24">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#00D4FF] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse"></span>
              Netrani Island scuba diving | Murudeshwar, Karnataka
            </div>
            <h1 className="text-[11vw] leading-[0.9] sm:text-6xl lg:text-[6rem] font-black text-white uppercase tracking-tighter font-display drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              Scuba Diving in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">Murudeshwar</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-lg font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Book <strong className="text-white font-semibold">scuba diving in Murudeshwar</strong> with clear{" "}
              <strong className="text-white font-semibold">Netrani Island package prices</strong>, morning{" "}
              <strong className="text-white font-semibold">boat timings</strong>, age rules, photos, and direct
              operator support before you pay any booking amount.
            </p>
            <div className="flex flex-wrap gap-2.5 max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-200 backdrop-blur-md">
                Price from ₹1,999
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-200 backdrop-blur-md">
                Boat slots 8:00 AM - 9:00 AM
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-200 backdrop-blur-md">
                Age 10+
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-200 backdrop-blur-md">
                Non-swimmers welcome
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest pt-2">
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105"
                href="/blog/murudeshwar-scuba-diving-price-cost"
              >
                Open Price Guide
              </Link>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105"
                href="/blog/scuba-diving-timings"
              >
                Open Timing Guide
              </Link>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105"
                href="/blog/scuba-diving-age-limit"
              >
                Check Age Limit
              </Link>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105"
                href="/team"
              >
                Meet the Team
              </Link>
            </div>
            <div className="hidden md:block pt-4">
              <a
                href="tel:+917829975777"
                className="inline-flex items-center gap-2 bg-[#00D4FF] text-black text-xs font-bold py-4 px-10 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 uppercase tracking-widest shadow-[0_0_30px_rgba(0,212,255,0.3)]"
              >
                Call to Book
              </a>
            </div>
          </div>

          {/* Mobile Swipe Section */}
          <div className="md:hidden w-full pb-4">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-6 px-6">
              <div className="snap-center shrink-0 w-[85vw] bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl">
                <div>
                  <h3 className="text-[#00D4FF] font-bold uppercase tracking-wider text-[10px] mb-1">
                    Top Choice
                  </h3>
                  <h2 className="text-xl font-black text-white uppercase leading-tight mb-2 font-display">
                    Murudeshwar Scuba <br />
                    Full Dive
                  </h2>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    Full Netrani package with 30-40 minutes underwater.
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-white font-display">
                      ₹3,500
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹4,500
                    </span>
                  </div>
                </div>
                <Link
                  className="w-full flex items-center justify-center gap-2 bg-[#00D4FF] text-black font-bold py-3 rounded-full hover:bg-white transition-colors uppercase tracking-widest text-xs"
                  href="/netrani-scuba-diving"
                >
                  See Details
                </Link>
              </div>

              <div className="snap-center shrink-0 w-[85vw] bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl">
                <div>
                  <h3 className="text-blue-300 font-bold uppercase tracking-wider text-[10px] mb-1">
                    First Timers
                  </h3>
                  <h2 className="text-xl font-black text-white uppercase leading-tight mb-2 font-display">
                    Intro Scuba <br />
                    Try Dive
                  </h2>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    Beginner-friendly 15-minute guided dive.
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-white font-display">
                      ₹1,999
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹3,000
                    </span>
                  </div>
                </div>
                <Link
                  className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition-colors uppercase tracking-widest text-xs"
                  href="/intro-scuba-diving"
                >
                  See Details
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 opacity-60">
              <span className="text-[9px] text-white uppercase tracking-[0.2em] animate-pulse">
                Swipe for packages →
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-[18px] h-[32px] rounded-full border border-white/30 flex justify-center pt-2">
            <div className="w-[4px] h-[7px] rounded-full bg-[#00D4FF] animate-bounce"></div>
          </div>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full z-20 bg-[#00111F]/70 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-white text-base md:text-lg font-bold tracking-wide font-display">
                Netrani Island Boat Dives &amp; Courses
              </h3>
            </div>
            <div className="flex items-center gap-8 justify-end">
              <div className="flex items-center gap-3">
                <span className="text-[#00D4FF] font-black text-xl md:text-2xl font-display">
                  <span className="text-xs md:text-sm font-medium text-gray-400 mr-2 uppercase tracking-wider">
                    Starts at
                  </span>
                  ₹1,999
                </span>
                <span className="text-gray-500 text-xs md:text-sm line-through font-semibold">
                  ₹3,500
                </span>
              </div>
              <a
                href="tel:+917829975777"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-bold py-2.5 px-6 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 uppercase tracking-widest font-display"
              >
                Call for Availability
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#00111F] to-[#002B5B]">
        {/* Background Decorative Element Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-0 w-[200px] h-[600px] opacity-10 animate-float pointer-events-none hidden xl:block">
          <Image
            alt=""
            aria-hidden="true"
            src="/images/sideimg.png"
            fill
            className="object-contain object-left-top"
          />
        </div>
        <div className="absolute top-20 right-10 w-32 h-32 opacity-10 animate-float-reverse animation-delay-2 pointer-events-none">
          <Image
            alt=""
            aria-hidden="true"
            src="/images/packages-star.png"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-28 h-28 opacity-10 animate-drift animation-delay-1 pointer-events-none">
          <Image
            alt=""
            aria-hidden="true"
            src="/images/packages-oxygen.png"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-40 right-20 w-36 h-36 opacity-15 animate-float animation-delay-3 pointer-events-none">
          <Image
            alt=""
            aria-hidden="true"
            src="/images/packages-fish.png"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/3 w-40 h-20 opacity-15 animate-swim pointer-events-none">
          <Image
            alt=""
            aria-hidden="true"
            src="/images/fishing.png"
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-display">
              Murudeshwar Scuba Diving Prices &amp; Packages
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
              Compare the <strong className="text-white">Murudeshwar scuba diving price per person</strong>, see what each package includes, and choose the Netrani trip that matches your comfort level. Boat, guide, and basic dive gear are included. Netrani diving is usually closed during monsoon from June to September.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Card 1: Full Dive */}
            <div className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl hover:border-[#00D4FF]/30 hover:shadow-[0_20px_50px_rgba(0,212,255,0.08)] transition-all duration-500 flex flex-col hover:-translate-y-2">
              <div className="h-72 overflow-hidden relative flex-shrink-0">
                <Image
                  alt="Certified scuba diver swimming near the coral reef of Netrani Island, Murudeshwar"
                  src="/images/netrani-diver.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c33] via-transparent to-transparent opacity-90"></div>
              </div>
              <div className="p-8 md:p-10 relative z-10 -mt-12 flex-grow flex flex-col bg-[#00111F]/90">
                <div className="bg-[#00D4FF]/10 backdrop-blur-md border border-[#00D4FF]/20 rounded-lg py-1 px-3 inline-block mb-5 self-start">
                  <span className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-5 leading-tight font-display">
                  Murudeshwar Scuba <br /> Full Dive
                </h3>
                <ul className="space-y-4 mb-8 text-gray-300 text-sm font-medium flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>
                      Boat ride to <strong className="text-white">Netrani Island</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>
                      <strong className="text-white">Unlimited</strong> Snorkeling time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>Instructor just for you (1:1)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>Photos &amp; Videos (Free)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>Fruits and Snacks on boat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>All gear included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>Changing room on boat</span>
                  </li>
                </ul>
                <div className="flex items-end gap-3 mb-8 mt-auto">
                  <span className="text-[#00D4FF] text-3xl md:text-4xl font-black tracking-tight font-display">
                    ₹3,500
                  </span>
                  <span className="text-gray-500 text-lg line-through font-semibold mb-1">
                    ₹4,500
                  </span>
                  <span className="text-gray-400 text-[10px] mb-2 font-bold uppercase tracking-wider">
                    / Person
                  </span>
                </div>
                <div className="flex gap-4">
                  <Link
                    className="flex-1 flex items-center justify-center border border-white/20 text-white font-bold text-xs py-4 px-4 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest font-display text-center"
                    href="/netrani-scuba-diving"
                  >
                    Full-Dive Details
                  </Link>
                  <a
                    href="tel:+917829975777"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#00D4FF] text-black font-bold text-xs py-4 px-4 rounded-full hover:bg-[#80e9ff] transition-all uppercase tracking-widest font-display text-center shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  >
                    Call to Book
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Intro Try Dive */}
            <div className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl hover:border-blue-400/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-500 flex flex-col hover:-translate-y-2">
              <div className="h-72 overflow-hidden relative flex-shrink-0">
                <Image
                  alt="Group of tourist scuba divers preparing for try dive training briefing at Murudeshwar"
                  src="/images/group-divers.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c33] via-transparent to-transparent opacity-90"></div>
                <div className="absolute top-5 left-5 w-20 h-20 opacity-30 animate-pulse-slow">
                  <Image
                    alt=""
                    aria-hidden="true"
                    src="/images/packages-star.png"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-8 md:p-10 relative z-10 -mt-12 flex-grow flex flex-col bg-[#00111F]/90">
                <div className="bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-lg py-1 px-3 inline-block mb-5 self-start">
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">
                    Best Start
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-5 leading-tight font-display">
                  Intro Scuba <br /> Try Dive
                </h3>
                <ul className="space-y-4 mb-8 text-gray-300 text-sm font-medium flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>Good for Non-Swimmers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>15 Minute Dive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>
                      Boat ride to <strong className="text-white">Netrani Island</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>Safe with PADI Pros</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>Photos &amp; Videos (Free)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>Snorkeling Included</span>
                  </li>
                </ul>
                <div className="flex items-end gap-3 mb-8 mt-auto">
                  <span className="text-[#00D4FF] text-3xl md:text-4xl font-black tracking-tight font-display">
                    ₹1,999
                  </span>
                  <span className="text-gray-500 text-lg line-through font-semibold mb-1">
                    ₹3,000
                  </span>
                  <span className="text-gray-400 text-[10px] mb-2 font-bold uppercase tracking-wider">
                    / Person
                  </span>
                </div>
                <div className="flex gap-4">
                  <Link
                    className="flex-1 flex items-center justify-center border border-white/20 text-white font-bold text-xs py-4 px-4 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest font-display text-center"
                    href="/intro-scuba-diving"
                  >
                    Intro-Dive Details
                  </Link>
                  <a
                    href="tel:+917829975777"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#00D4FF] text-black font-bold text-xs py-4 px-4 rounded-full hover:bg-[#80e9ff] transition-all uppercase tracking-widest font-display text-center shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  >
                    Call to Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials Section */}
      <section className="bg-[#00111F] text-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden font-sans border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,87,150,0.06)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto relative z-10 space-y-20">
          <div className="text-center max-w-4xl mx-auto space-y-4">
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
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-[#00D4FF] font-bold text-[10px] uppercase tracking-widest font-display">
                Booking Essentials
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
              What Most Guests Check Before Booking
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
              If you are planning a Murudeshwar scuba trip, these are usually the first four questions: price, morning timing, age rules, and which package is easiest for beginners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl hover:border-white/20 transition-all duration-300">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-[#00D4FF]">
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
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase text-white mb-3 font-display">
                Price and What You Get
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6 font-medium">
                The intro dive starts at ₹1,999 and the longer Netrani full dive is ₹3,500. Boat ride, guide, gear, and photos/videos are part of the current package.
              </p>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black font-display"
                href="/blog/murudeshwar-scuba-diving-price-cost"
              >
                Read Price Details
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl hover:border-white/20 transition-all duration-300">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-[#00D4FF]">
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
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M16 14v2.2l1.6 1"></path>
                  <path d="M16 2v4"></path>
                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                  <path d="M3 10h5"></path>
                  <path d="M8 2v4"></path>
                  <circle cx="16" cy="16" r="6"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase text-white mb-3 font-display">
                Morning Timing
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6 font-medium">
                Most guests report early, and the main Netrani boat slot is usually between 8:00 AM and 9:00 AM. Return time changes slightly with sea conditions.
              </p>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black font-display"
                href="/blog/scuba-diving-timings"
              >
                See Full Timings
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl hover:border-white/20 transition-all duration-300">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-[#00D4FF]">
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
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase text-white mb-3 font-display">
                Age and Medical Check
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6 font-medium">
                The usual starting age is 10+. If someone in your group has asthma, recent surgery, heart issues, or pregnancy, check the guide before paying advance.
              </p>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black font-display"
                href="/blog/scuba-diving-age-limit"
              >
                Review Age Rules
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl hover:border-white/20 transition-all duration-300">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-[#00D4FF]">
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
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase text-white mb-3 font-display">
                Best for First Timers
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6 font-medium">
                If you do not swim, start with the guided intro package. If you want more underwater time and are comfortable with a longer boat day, compare the full dive.
              </p>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black font-display"
                href="/intro-scuba-diving"
              >
                View Intro Package
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-8 md:p-12 max-w-5xl mx-auto shadow-2xl">
            <div className="max-w-3xl space-y-3">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white font-display">
                Before You Pay Anyone, Check This
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                If you are comparing operators, verify the phone number, look at real dive photos, and make sure you know who is handling the trip before you pay advance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 hover:border-[#00D4FF]/25 transition-all">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path d="M14.05 2a9 9 0 0 1 8 7.94M14.05 6A5 5 0 0 1 18 10"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-display">
                  Call the Booking Desk
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 mb-5 font-medium">
                  Use the direct number to confirm availability, reporting point, and current sea conditions before you lock your slot.
                </p>
                <Link
                  className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
                  href="/contact"
                >
                  Open Contact Page
                </Link>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 hover:border-[#00D4FF]/25 transition-all">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-display">
                  See Recent Dive Photos
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 mb-5 font-medium">
                  Check recent guest photos and videos if you want a clearer feel for water visibility, fish life, and what your trip may look like.
                </p>
                <Link
                  className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
                  href="/gallery"
                >
                  View Gallery
                </Link>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 hover:border-[#00D4FF]/25 transition-all">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-display">
                  Know Who You Are Booking With
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 mb-5 font-medium">
                  If you want names and roles behind the phone number, open the team page before you pay any advance.
                </p>
                <Link
                  className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
                  href="/team"
                >
                  Visit Team Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Like a Local Section */}
      <section className="bg-[#00111F] py-24 md:py-32 px-6 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/blog/murudeshwar-scuba-diving-price-cost"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Price Guide
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Scuba Price Guide (2026)
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Updated Murudeshwar scuba price per person, cost factors, and what the official price includes.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/blog/scuba-diving-age-limit"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Eligibility
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Age Limit + Medical Rules
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Minimum age, fitness tips, and who can safely dive at Netrani.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/blog/best-time-scuba-diving-murudeshwar"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Season Guide
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Best Time for Scuba Diving
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Month-by-month Murudeshwar and Netrani Island season guide with visibility and monsoon closure dates.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/blog/scuba-diving-timings"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Timing Guide
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Scuba Diving Timings
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Reporting time, Netrani boat schedule, dive window, and return-to-shore timing in one guide.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/blog/murudeshwar-scuba-diving-from-bangalore"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Travel Plan
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Bangalore to Murudeshwar
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Overnight bus/train plan and the easiest travel route.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/how-to-reach-murudeshwar"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Directions
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                How to Reach Murudeshwar
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Map, parking tips, and the boat boarding point.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/blog/beginner-scuba-diving-guide"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  First Timer
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Beginner's Guide 101
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                First time? Learn how we handle non-swimmers &amp; safety.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/blog/scuba-diving-murudeshwar-non-swimmers"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Can’t Swim?
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Non-Swimmers Guide
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Can’t swim? See how instructor-guided dives work and which package is easiest to start with.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            <Link
              className="group bg-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all hover:bg-white/[0.02]"
              href="/blog/murudeshwar-scuba-diving-safety"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00D4FF]">
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
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Safety First
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Is It Safe? (Risks)
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Honest look at safety standards, oxygen, and protocols.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Proof Section */}
      <section className="py-24 md:py-32 bg-[#00111F] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,91,150,0.04)_0%,transparent_75%)] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#00D4FF] mb-3">
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
                <span className="text-[10px] font-bold tracking-widest uppercase font-display">
                  Visual Proof
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-display text-white">
                Life Underwater
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 font-bold tracking-wider text-xs uppercase font-display group"
              href="/gallery"
            >
              View Full Gallery
              <span className="text-[#00D4FF] group-hover:text-black transition-colors">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Gallery item 1 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 md:col-span-2 md:row-span-2">
              <Image
                alt="Female diver in green t-shirt making a heart shape with hands underwater"
                src="/images/gallery/gallery-1.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-2 font-display">
                  Netrani Island
                </span>
                <p className="text-gray-300 text-sm max-w-md font-medium leading-relaxed">
                  Female diver in green t-shirt making a heart shape with hands underwater
                </p>
              </div>
            </div>

            {/* Gallery item 2 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <Image
                alt="Male diver in blue shirt taking an underwater selfie with a fist bump"
                src="/images/gallery/gallery-2.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-1.5 font-display">
                  Netrani Island
                </span>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Male diver in blue shirt taking an underwater selfie with a fist bump
                </p>
              </div>
            </div>

            {/* Gallery item 3 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <Image
                alt="Female diver meditating in lotus position underwater"
                src="/images/gallery/gallery-3.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-1.5 font-display">
                  Netrani Island
                </span>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Female diver meditating in lotus position underwater
                </p>
              </div>
            </div>

            {/* Gallery item 4 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <Image
                alt="Large pufferfish swimming near underwater rock formations"
                src="/images/gallery/gallery-4.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-1.5 font-display">
                  Netrani Island
                </span>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Large pufferfish swimming near underwater rock formations
                </p>
              </div>
            </div>

            {/* Gallery item 5 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <Image
                alt="Two divers making a triangle shape with their hands"
                src="/images/gallery/gallery-5.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-1.5 font-display">
                  Netrani Island
                </span>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Two divers making a triangle shape with their hands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-[#00111F] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span className="text-[#00D4FF] font-bold text-[10px] uppercase tracking-widest font-display">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-display">
              Murudeshwar Scuba Guide
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Everything you need to know about <strong className="text-white">Netrani Island scuba diving</strong>, including <strong className="text-white">prices</strong>, <strong className="text-white">timings</strong>, and <strong className="text-white">booking</strong> details.
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-panel border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#00D4FF]/20 hover:bg-white/[0.04] transition-all"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 font-display">{faq.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 font-medium">{faq.a}</p>
                {faq.link && (
                  <Link
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-all font-display"
                    href={faq.link}
                  >
                    {faq.linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00111F] text-white relative overflow-hidden border-t border-white/5">
        {/* Floating background images */}
        <div className="absolute top-10 left-20 w-32 h-32 opacity-10 animate-drift pointer-events-none">
          <Image
            alt=""
            aria-hidden="true"
            src="/images/packages-star.png"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 left-5 w-24 h-24 opacity-10 animate-float-reverse animation-delay-1 pointer-events-none">
          <Image
            alt=""
            aria-hidden="true"
            src="/images/packages-oxygen.png"
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-[1400px] mx-6 md:mx-auto bg-gradient-to-br from-[#002B5B] to-[#00111F] border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
          <div className="relative z-10 lg:w-1/2 pb-8 lg:pb-0 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tighter font-display drop-shadow-xl">
              Call &amp; <br />
              Book Netrani
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed font-medium">
              Need the exact <strong className="text-white">Murudeshwar scuba diving contact number</strong>, reporting point, or today's boat-slot status? Call the operator directly. If you prefer to verify details first, open the contact page or browse recent gallery proof before booking.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+917829975777"
                className="inline-flex items-center gap-2 bg-[#00D4FF] text-black text-xs font-bold py-4 px-10 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 uppercase tracking-widest font-display shadow-[0_0_20px_rgba(0,212,255,0.2)] cursor-pointer"
              >
                Call Now
              </a>
              <Link
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white text-xs font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest font-display"
                href="/contact"
              >
                Open Contact Page
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-8 lg:mt-0">
            <div className="relative w-64 md:w-[380px] h-64 md:h-[380px]">
              <Image
                alt="Vibrant tropical marine fish species living in the coral reefs of Netrani Island, Murudeshwar"
                src="/images/tropical-fish1.png"
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rotate-[-10deg] hover:rotate-0 transition-transform duration-[1500ms]"
              />
            </div>
            <div className="absolute top-10 -left-10 w-24 h-24 opacity-30 animate-float animation-delay-1">
              <Image
                alt=""
                aria-hidden="true"
                src="/images/fishing.png"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-20 -right-5 w-20 h-20 opacity-30 animate-float-reverse animation-delay-2">
              <Image
                alt=""
                aria-hidden="true"
                src="/images/packages-fish.png"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Subtle Ambient Ray Blurs inside the card container */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#00D4FF]/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
        </div>
      </section>

      {/* Sticky Bottom Bar for Mobile - Frosted Glass App style */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-[60] bg-[#00111F]/80 backdrop-blur-lg border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-auto">
        <div className="px-5 py-3 flex items-center justify-between gap-3">
          <div className="flex flex-col leading-tight">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#00D4FF]">
              Call to Book
            </span>
            <span className="text-xs font-bold text-gray-200">+91 78299 75777</span>
          </div>
          <a
            href="tel:+917829975777"
            className="bg-[#00D4FF] text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,212,255,0.3)]"
          >
            Call Now
          </a>
        </div>
      </div>
    </main>
  );
}
