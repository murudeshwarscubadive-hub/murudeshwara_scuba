import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Murudeshwar Scuba Diving Packages & Netrani Island Dive Booking",
  description:
    "Experience scuba diving in Murudeshwar at Netrani Island with certified instructors. Transparent packages from ₹1,999, beginner guidance, and free HD photos.",
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
    title: "Murudeshwar Scuba Diving Packages & Netrani Island Dive Booking",
    description:
      "Experience scuba diving in Murudeshwar at Netrani Island with certified instructors. Transparent packages from ₹1,999, beginner guidance, and free HD photos.",
    url: "https://www.murudeshwarscubadive.in",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Scuba diving in Murudeshwar at Netrani Island with certified instructors",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murudeshwar Scuba Diving Packages & Netrani Island Booking",
    description:
      "Discover scuba diving in Murudeshwar with Netrani Island packages from ₹1,999. Certified instructors, complete gear, and free HD photos.",
    images: ["/hero.webp"],
  },
};

export default function Home() {
  const faqs = [
    {
      q: "How much does scuba diving cost at Netrani Island per person?",
      a: "Murudeshwar scuba diving prices start at ₹1,999 for the Intro Try Dive (10–15 minutes underwater) and ₹3,500 for the Full Netrani Island Dive (30–40 minutes underwater). Both packages include the scenic boat cruise to Netrani Island, full gear rental, personal 1:1 certified instructor guidance, surface snorkeling, and complimentary HD photos and videos.",
      link: "/blog/murudeshwar-scuba-diving-price-cost",
      linkText: "View Complete Pricing Guide ->",
    },
    {
      q: "Which months offer the clearest underwater visibility in Murudeshwar?",
      a: "The ideal season for scuba diving in Murudeshwar is from October through May. During these months, the Arabian Sea is calm and water visibility around Netrani Island typically ranges between 15 and 30 metres. Scuba diving operations remain closed during the annual monsoon period from June to September for safety.",
      link: "/blog/best-time-scuba-diving-murudeshwar",
      linkText: "Inspect Seasonal Visibility Guide ->",
    },
    {
      q: "What are the minimum age criteria and health prerequisites for diving?",
      a: "Participants must be at least 10 years of age to dive. There is no upper age limit as long as you are medically fit. Guests with active asthma requiring regular inhalers, heart conditions, recent major surgery, or pregnancy should refrain from tank diving for safety reasons.",
      link: "/blog/scuba-diving-age-limit",
      linkText: "Review Age & Health Guide ->",
    },
    {
      q: "Can individuals who cannot swim still experience scuba diving in Murudeshwar?",
      a: "Yes, absolutely. Non-swimmers can comfortably participate in both the Intro Try Dive and the Full Netrani Dive. You wear a buoyancy control jacket (BCD) that keeps you effortlessly floating on the surface, and your personal certified instructor holds onto you underwater throughout the entire dive.",
      link: "/blog/scuba-diving-murudeshwar-non-swimmers",
      linkText: "Read Non-Swimmer Diving Guide ->",
    },
    {
      q: "What is the daily schedule and boat departure time for Netrani Island?",
      a: "Boats depart daily between 8:00 AM and 9:00 AM from Murudeshwar beach. The boat journey to Netrani Island takes approximately 60 to 75 minutes. After dive rotations and surface snorkeling, the boat returns to Murudeshwar by 2:30 PM to 3:30 PM. Advance reservation is recommended.",
      link: "/blog/scuba-diving-timings",
      linkText: "Check Daily Schedule Guide ->",
    },
    {
      q: "Why is Netrani Island considered Karnataka's premier scuba diving destination?",
      a: "Netrani Island (also known as Pigeon Island) is a protected coral reef sanctuary located 19 km off Murudeshwar. Its crystal-clear waters and thriving marine ecosystem—home to butterflyfish, parrotfish, moray eels, stingrays, and sea turtles—make it the premier scuba diving destination in Karnataka.",
      link: "/blog/best-scuba-diving-netrani-island",
      linkText: "Compare Coastal Dive Sites ->",
    },
    {
      q: "How can I connect with your direct Murudeshwar dive coordinators?",
      a: "You can reach our Murudeshwar booking desk directly at +91 78299 75777 or message us on WhatsApp. Our coordinators are local divers who provide immediate slot confirmations, boat reporting locations, and live sea condition reports.",
      link: "/blog/murudeshwar-scuba-diving-photos-videos",
      linkText: "View Live Photos & Videos ->",
    },
    {
      q: "What is the best way to travel to Murudeshwar from Bangalore or Mangalore?",
      a: "Murudeshwar is well connected via NH 66 and the Konkan Railway network. Overnight KSRTC and private sleeper buses operate daily from Bangalore (approx. 9–10 hours). Regular express trains stop at Murudeshwar Railway Station (MRDW), which is only 3 km from the beach. Mangalore Airport is 165 km to the south.",
      link: "/blog/murudeshwar-scuba-diving-from-bangalore",
      linkText: "Read Bangalore Route Itinerary ->",
    },
    {
      q: "Why are there different spelling variants like Murdeshwar or Murudeshwara?",
      a: "Both spellings refer to the same coastal town in Uttara Kannada, Karnataka (ಮುರುಡೇಶ್ವರ), also written as Murdeshwar, Murdeshvar, or Murudeshwara. Regardless of spelling variations in search, the boat departure point and Netrani Island diving experience are identical.",
      link: "/how-to-reach-murudeshwar",
      linkText: "Read Direction & Route Guide ->",
    },
    {
      q: "How far in advance should I book my scuba diving slot in Murudeshwar?",
      a: "We recommend reserving your slot 3 to 5 days ahead, particularly for weekends and holiday periods between October and January. A nominal advance deposit of ₹500 per person reserves your boat seat and guarantees your dedicated 1:1 instructor assignment.",
      link: "/blog/scuba-diving-booking-murudeshwar",
      linkText: "Read Booking & Deposit Guide ->",
    },
    {
      q: "What should I wear and pack for the Netrani Island boat trip?",
      a: "Pack comfortable swimwear or quick-drying t-shirt and shorts, a dry towel, a fresh change of clothes, sunglasses, sunscreen, and a waterproof bag for your smartphone. We provide clean neoprene wetsuits, dive masks, fins, and all certified scuba apparatus.",
      link: "/blog/beginner-scuba-diving-guide",
      linkText: "See Beginner Packing Checklist ->",
    },
    {
      q: "What happens if the sea is rough or the weather is bad?",
      a: "Guest safety is strictly prioritized in alignment with Indian Coast Guard advisories. If rough sea conditions or weather warnings prompt a trip cancellation, you receive a 100% full refund of your booking deposit or free rescheduling to any future date of your choice.",
      link: "/blog/murudeshwar-scuba-diving-safety",
      linkText: "Check Safety & Weather Policies ->",
    },
    {
      q: "Can family members or friends who don't want to dive join the boat?",
      a: "Yes! Non-diving companions, family members, or children can book a Non-Diver Boat Pass (₹1,500). They enjoy the scenic 19 km Arabian Sea cruise to Netrani Island, safety life jackets, and surface snorkeling gear over the shallow reef.",
      link: "/blog/murudeshwar-boating-price",
      linkText: "View Boating & Companion Prices ->",
    },
    {
      q: "Are underwater photos and videos included in the package price?",
      a: "Yes. High-definition underwater photos and action video clips captured by your instructor are included free of charge with both the ₹1,999 Intro Dive and ₹3,500 Full Netrani Dive. Media files are transferred directly to your mobile phone or shared via private cloud link on the same day.",
      link: "/blog/murudeshwar-scuba-diving-photos-videos",
      linkText: "Learn About Underwater Media ->",
    },
    {
      q: "Can I fly or travel to high altitudes immediately after scuba diving?",
      a: "In accordance with standard international PADI safety guidelines, divers should wait at least 12 to 18 hours after a single introductory dive and 24 hours after multiple dives before boarding an airplane or traveling to high-altitude hill stations (above 1,000 feet).",
      link: "/blog/scuba-diving-timings",
      linkText: "Read Safety Timings & Rest Guide ->",
    },
    {
      q: "Can I scuba dive if I wear spectacles or contact lenses?",
      a: "Standard spectacles cannot be worn inside a scuba mask because the frame breaks the watertight silicone seal. However, soft contact lenses are completely safe and comfortable to wear while diving. Underwater refraction also naturally magnifies objects by about 33%, allowing divers with mild correction to see distinctly without lenses.",
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
      <div className="relative w-full min-h-[100dvh] bg-[#00111F] overflow-hidden flex flex-col justify-between">
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
        <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-36 lg:pb-28">
          <div className="max-w-4xl space-y-4 md:space-y-5 lg:space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#00D4FF] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse"></span>
              Premier Netrani Coral Reef Adventures • Murudeshwar, Karnataka
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-black text-white uppercase tracking-tight font-display drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] leading-[0.92]">
              Scuba Diving in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">Murudeshwar</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base lg:text-[1.05rem] font-medium leading-relaxed max-w-2xl drop-shadow-md">
              <strong className="text-white font-semibold">Scuba diving in Murudeshwar</strong> offers an unforgettable journey into the Arabian Sea at Netrani Island. Experience guided coral reef diving with{" "}
              <strong className="text-white font-semibold">1:1 certified instructor assistance</strong>, transparent{" "}
              <strong className="text-white font-semibold">package pricing</strong>, sanitized gear, and complimentary underwater photos &amp; videos.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-2.5 max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-200 backdrop-blur-md">
                Transparent Pricing from ₹1,999
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-200 backdrop-blur-md">
                Morning Boat Slots 8:00–9:00 AM
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-200 backdrop-blur-md">
                Open to Ages 10 &amp; Above
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-200 backdrop-blur-md">
                Beginners &amp; Non-Swimmers Fully Guided
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 md:gap-3 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest pt-1 md:pt-2">
              <a
                href="tel:+917829975777"
                data-cta="call"
                data-cta-label="hero_primary_call"
                className="inline-flex items-center gap-2 bg-[#00D4FF] text-black text-xs font-bold py-3 px-7 md:px-8 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 uppercase tracking-widest shadow-[0_0_25px_rgba(0,212,255,0.35)] shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                Call to Reserve Slots
              </a>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105 backdrop-blur-sm"
                href="/blog/murudeshwar-scuba-diving-price-cost"
              >
                Explore Rates &amp; Pricing
              </Link>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105 backdrop-blur-sm"
                href="/blog/scuba-diving-timings"
              >
                Daily Boat Schedules
              </Link>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105 backdrop-blur-sm"
                href="/blog/scuba-diving-age-limit"
              >
                Eligibility &amp; Age Guide
              </Link>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105 backdrop-blur-sm"
                href="/team"
              >
                Our Certified Instructors
              </Link>
            </div>
          </div>

          {/* Mobile Swipe Section */}
          <div className="md:hidden w-full pt-6 pb-2">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-6 px-6">
              <div className="snap-center shrink-0 w-[85vw] bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl">
                <div>
                  <h3 className="text-[#00D4FF] font-bold uppercase tracking-wider text-[10px] mb-1">
                    Signature Package
                  </h3>
                  <h2 className="text-xl font-black text-white uppercase leading-tight mb-2 font-display">
                    Netrani Island <br />
                    Deep Dive
                  </h2>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    Full Netrani excursion with 30-40 minutes of guided underwater exploration.
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
                    Beginner Friendly
                  </h3>
                  <h2 className="text-xl font-black text-white uppercase leading-tight mb-2 font-display">
                    Ocean Try <br />
                    Dive Session
                  </h2>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    Comfortable 10-15 minute shallow reef dive guided 1:1 by certified instructors.
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

        {/* Scroll Indicator (Positioned elegantly to avoid button collision) */}
        <div className="absolute bottom-28 right-12 z-10 hidden 2xl:flex flex-col items-center gap-2 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
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
                Guided Netrani Island Diving &amp; Marine Excursions
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
                Check Daily Slots
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
              Netrani Scuba Diving Packages &amp; Pricing
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
              Explore our transparent scuba options tailored for both first-timers and active ocean explorers. Every package guarantees your 19 km boat crossing to Netrani Island, dedicated one-on-one certified instructor supervision, sterilized international-standard gear, and complimentary high-definition underwater footage. Season operates October through May (closed during monsoon).
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
                    Signature Experience
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-5 leading-tight font-display">
                  Netrani Island <br /> Deep Reef Dive
                </h3>
                <ul className="space-y-4 mb-8 text-gray-300 text-sm font-medium flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>
                      19 km scenic offshore boat cruise to <strong className="text-white">Netrani Island</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>
                      30 to 40 minutes of deep reef bottom time (up to 12m)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>One-on-one certified PADI / SSI divemaster by your side</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>Professional HD underwater video &amp; portrait photography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>Bonus surface snorkeling with life vests and masks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>Fresh fruits, refreshments, and bottled water on board</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] text-lg font-bold">✓</span>
                    <span>Sanitized international-standard diving suit, mask &amp; BCD gear</span>
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
                    Deep Dive Details
                  </Link>
                  <a
                    href="tel:+917829975777"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#00D4FF] text-black font-bold text-xs py-4 px-4 rounded-full hover:bg-[#80e9ff] transition-all uppercase tracking-widest font-display text-center shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  >
                    Book Deep Dive
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
                    First-Timer Special
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-5 leading-tight font-display">
                  Beginner Ocean <br /> Discovery Dive
                </h3>
                <ul className="space-y-4 mb-8 text-gray-300 text-sm font-medium flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>Tailored specifically for non-swimmers and first-time divers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>10 to 15 minutes shallow reef exploration (5 to 8m depth)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>
                      Round-trip offshore vessel transport to <strong className="text-white">Netrani Island</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>Constant 1:1 hand-held guidance by a certified instructor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>Free digital photos and underwater action clips</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                    <span>Complimentary post-dive reef snorkeling session</span>
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
                    Beginner Dive Details
                  </Link>
                  <a
                    href="tel:+917829975777"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#00D4FF] text-black font-bold text-xs py-4 px-4 rounded-full hover:bg-[#80e9ff] transition-all uppercase tracking-widest font-display text-center shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  >
                    Book Beginner Dive
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
                Trip Preparation
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
              Essential Details Before You Reserve
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
              Planning a scuba trip to Murudeshwar is straightforward when you have clear facts. Review the essential points travelers confirm before reserving: package costs, morning departure times, physical fitness guidelines, and dedicated non-swimmer safety.
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
                Package Pricing &amp; Inclusions
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6 font-medium">
                The Intro Try Dive starts at ₹1,999 per person, while the Full Netrani Dive is ₹3,500. Both options include the boat cruise, full gear rental, 1:1 instructor guidance, and complimentary HD media.
              </p>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black font-display"
                href="/blog/murudeshwar-scuba-diving-price-cost"
              >
                Review Pricing Guide
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
                Morning Departure Schedule
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6 font-medium">
                Daily dive boats depart between 8:00 AM and 9:00 AM from Murudeshwar beach. The round trip to Netrani Island and dive rotations return to shore by early afternoon.
              </p>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black font-display"
                href="/blog/scuba-diving-timings"
              >
                View Complete Timetable
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
                Age &amp; Medical Guidelines
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6 font-medium">
                Participants must be at least 10 years old. General good health is required; guests with active asthma, heart conditions, or pregnancy should consult safety rules before booking.
              </p>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black font-display"
                href="/blog/scuba-diving-age-limit"
              >
                Review Health Guidelines
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
                Non-Swimmer Safety Protocol
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6 font-medium">
                Swimming skills are not required. A personal certified instructor guides you with a buoyancy vest (BCD), ensuring a calm and safe introduction to the underwater world.
              </p>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black font-display"
                href="/intro-scuba-diving"
              >
                Explore Beginner Package
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-8 md:p-12 max-w-5xl mx-auto shadow-2xl">
            <div className="max-w-3xl space-y-3">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white font-display">
                Three Steps to Verify Your Dive Booking
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                Before paying any advance deposit, verify your operator's direct contact, review authentic underwater photography, and confirm instructor allocation for total peace of mind.
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
                  Speak with our Harbor Coordinator
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 mb-5 font-medium">
                  Contact our direct booking desk to confirm daily seat availability, reporting location, and real-time sea conditions.
                </p>
                <Link
                  className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
                  href="/contact"
                >
                  Go to Contact Page
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
                  Inspect Authentic Underwater Media
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 mb-5 font-medium">
                  Browse authentic underwater photos and video clips captured by our team at Netrani Island to see actual water clarity and marine life.
                </p>
                <Link
                  className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
                  href="/gallery"
                >
                  Browse Media Gallery
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
                  Review Dive Team Credentials
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 mb-5 font-medium">
                  Learn about the certified instructors, divemasters, and experienced boat captains dedicated to your safety.
                </p>
                <Link
                  className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
                  href="/team"
                >
                  Explore Team Profiles
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
                  Rate Breakdown
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Netrani Scuba Rates &amp; Cost Breakdown (2026)
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Transparent breakdown of Murudeshwar scuba diving fees, gear rentals, and package inclusions.
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
                  Participation Rules
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Diver Eligibility &amp; Medical Standards
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Clear age eligibility, medical criteria, and health recommendations for diving at Netrani Island.
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
                  Seasonal Calendar
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Peak Diving Months &amp; Sea Visibility
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Seasonal weather and sea visibility breakdown for Murudeshwar, with monsoon closure timelines.
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
                  Daily Timetable
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Excursion Schedule &amp; Boat Timings
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Reporting times, boat departure slots, dive rotation schedules, and return timings.
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
                  Route Advice
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Bangalore to Murudeshwar Travel Plan
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Optimal road, bus, and train travel routes for weekend scuba excursions from Bangalore.
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
                  Transit Map
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                How to Reach Murudeshwar Beach
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Step-by-step travel directions via Konkan Railway, NH 66, and nearest coastal airports.
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
                  Novice Tips
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                First-Time Diver Essentials 101
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Essential advice for first-time divers, from equalizing ears to underwater hand signals.
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
                  Non-Swimmer Info
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Scuba Diving Guide for Non-Swimmers
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                How buoyancy control jackets and 1:1 instructor assistance make diving accessible to non-swimmers.
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
                  Risk &amp; Protocol
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors font-display">
                Marine Safety Standards &amp; Gear Protocols
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                A transparent overview of safety procedures, sanitized gear, emergency oxygen, and Coast Guard protocols.
              </p>
              <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Expedition Gallery Section */}
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
                  Expedition Moments
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-display text-white">
                Undersea Wonders at Netrani Island
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 font-bold tracking-wider text-xs uppercase font-display group"
              href="/gallery"
            >
              Explore Dive Gallery
              <span className="text-[#00D4FF] group-hover:text-black transition-colors">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Gallery item 1 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 md:col-span-2 md:row-span-2">
              <Image
                alt="First-time scuba diver experiencing Netrani Island coral reef with certified dive guide"
                src="/images/gallery/gallery-1.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-2 font-display">
                  Netrani Island Reef
                </span>
                <p className="text-gray-300 text-sm max-w-md font-medium leading-relaxed">
                  First-time diver celebrating an unforgettable moment in crystal-clear Arabian Sea waters
                </p>
              </div>
            </div>

            {/* Gallery item 2 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <Image
                alt="Scuba diver recording underwater memories during a guided Netrani Island dive"
                src="/images/gallery/gallery-2.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-1.5 font-display">
                  Netrani Island
                </span>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Under-surface action captured on HD underwater action cameras
                </p>
              </div>
            </div>

            {/* Gallery item 3 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <Image
                alt="Diver practicing calm buoyancy and breathing among Netrani reef fish"
                src="/images/gallery/gallery-3.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-1.5 font-display">
                  Marine Sanctuary
                </span>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Calm breathing and neutral buoyancy beside thriving coastal marine life
                </p>
              </div>
            </div>

            {/* Gallery item 4 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <Image
                alt="Pufferfish swimming near rocky coral formations at Netrani Island, Murudeshwar"
                src="/images/gallery/gallery-4.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-1.5 font-display">
                  Reef Ecosystem
                </span>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Resident pufferfish and reef fauna frequenting shallow rock crevices
                </p>
              </div>
            </div>

            {/* Gallery item 5 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <Image
                alt="Dive buddies sharing underwater hand signals during a guided dive session"
                src="/images/gallery/gallery-5.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00111F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-1.5 font-display">
                  Buddy Team Dive
                </span>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Clear underwater communication and guided buddy-system exploration
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
                Helpful Answers
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-display">
              Frequently Asked Questions About Netrani Scuba
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Key answers regarding boat departures, underwater safety, pricing structures, and traveler logistics for your Murudeshwar dive trip.
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
              Ready to Explore <br />
              Netrani Island?
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed font-medium">
              Reserve your scuba diving slot with a simple advance deposit of ₹500 per person. Have questions about sea conditions, boat timings, or custom group bookings? Our dive coordinator is available daily from 8:00 AM to 8:00 PM to help you plan.
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
                Contact &amp; Directions
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
              Direct Booking Desk
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
