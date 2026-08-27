import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";
import "./scuba.css";

export const metadata: Metadata = {
  title: "Netrani Scuba Diving Price ₹3,500 | Murudeshwar Booking",
  description:
    "Check Netrani scuba diving from Murudeshwar from ₹3,500. Compare inclusions, operator credentials, eligibility, booking steps and weather terms.",
  keywords: [
    "scuba diving in murudeshwar",
    "murudeshwar scuba diving price",
    "netrani island scuba diving",
    "pigeon island scuba diving",
    "scuba diving murudeshwar price",
    "netrani scuba diving cost",
    "scuba diving in murudeshwar price per person",
    "scuba diving in murudeshwar packages",
    "cost of scuba diving in murudeshwar",
    "scuba diving for non swimmers murudeshwar",
    "murudeshwar water sports",
    "padi scuba diving murudeshwar",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
  },
  openGraph: {
    title: "Netrani Scuba Diving Price ₹3,500 | Book Murudeshwar",
    description:
      "Check Netrani scuba diving from Murudeshwar from ₹3,500 with inclusion, operator, eligibility, booking and weather-policy checks.",
    url: "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
    siteName: "Book Murudeshwar",
    locale: "en_IN",
    images: [
      {
        url: "/images/netrani-diver.png",
        width: 1200,
        height: 630,
        alt: "Netrani Island scuba diving from Murudeshwar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Scuba Diving Price ₹3,500 | Book Murudeshwar",
    description:
      "Netrani scuba from ₹3,500 with inclusion, operator, eligibility, booking and weather-policy checks.",
    images: ["/images/netrani-diver.png"],
  },
};

export default function ScubaDivingMurudeshwar() {
  const faqItems = [
    {
      question: "What is the Netrani Island scuba diving price from Murudeshwar?",
      answer:
        "A current public Murudeshwar operator example starts a beginner plan at ₹3,499 and lists another plan at ₹4,499. Use ₹3,500-₹4,500 as a comparison range, not a universal tariff; boat ride, meals, media, dive time and other inclusions differ by operator and plan.",
    },
    {
      question: "Do I need to know swimming for scuba diving in Murudeshwar?",
      answer:
        "A previous scuba certification is not required for PADI Discover Scuba Diving, but a blanket 'no swimming needed' promise is misleading. Participants must meet the operator's health and water-comfort requirements, complete the briefing and skills, and follow the instructor. Ask for an individual assessment before paying.",
    },
    {
      question: "Is scuba diving at Netrani Island safe?",
      answer:
        "Scuba is an adventure activity with real risks, so it should not be described as universally 'very safe.' Verify the assigned operator and instructor credentials, medical screening, equipment checks, supervision ratio, oxygen and emergency plan, weather decision, and written cancellation terms. PADI currently lists Scuba Spirit in Murudeshwar; that listing does not verify every local operator or every booking made through this page.",
    },
    {
      question: "What is the scuba diving price per person in Murudeshwar?",
      answer:
        "For most beginners, the scuba diving price per person in Murudeshwar (Netrani Island DSD) starts from ₹3,500. The final price depends on season, operator, and inclusions like photos/videos.",
    },
    {
      question: "How do I book scuba diving in Murudeshwar?",
      answer:
        "Share your date, group size, ages and water comfort on WhatsApp or phone. Before paying, require the assigned operator, eligibility process, slot, reporting point, full price, inclusions, payment recipient and cancellation terms in writing.",
    },
    {
      question: "What is included in the Netrani Island scuba diving price?",
      answer:
        "Package inclusions are not universal. Confirm in writing whether the quoted price covers the boat, briefing and skills session, equipment, instructor support, dive duration policy, photos or videos, food, taxes, transfers and any marine or harbour charges.",
    },
    {
      question: "What should I confirm before paying for Netrani scuba diving?",
      answer:
        "Confirm the final per-person price, boat ride inclusion, equipment, instructor support, photos/videos, reporting point, age or health eligibility, weather policy, and whether the operator is suitable for beginners or non-swimmers.",
    },
    {
      question: "How long is the scuba diving trip to Netrani Island?",
      answer:
        "Plan for a substantial part of the day, but there is no verified universal 7:30 AM-4:30 PM timetable or 1.5-hour boat duration. Reporting time, sailing time and return vary by operator, departure point, sea conditions and group operations; use the written schedule for your date.",
    },
    {
      question: "What is the best time for Netrani Island scuba diving?",
      answer:
        "October to May is a useful broad planning window, but no universal operator calendar or visibility guarantee was found. Monsoon access may be restricted, and the operator or captain must confirm whether the trip can run safely on the day.",
    },
    {
      question: "What should I carry for scuba diving in Murudeshwar?",
      answer:
        "Carry a change of clothes, towel, sunscreen, water bottle, ID, and any personal medicines. Avoid heavy meals right before the dive and follow the instructor briefing.",
    },
    {
      question: "Is there an age limit for Netrani scuba diving?",
      answer:
        "PADI lists 10 as the minimum age for Discover Scuba Diving. The assigned operator may apply stricter rules, and a child still needs guardian consent, medical screening, suitable conditions and the ability to complete required skills. Confirm the exact programme before paying.",
    },
    {
      question: "Can I scuba dive if I wear glasses?",
      answer:
        "Yes. You can usually scuba dive with contact lenses, or you can request a prescription mask in advance (subject to availability). Confirm options while booking.",
    },
    {
      question: "Is pickup included for scuba diving bookings?",
      answer:
        "Pickup depends on the selected operator, your stay and the written package. First obtain the exact meeting-point pin and reporting time, then compare the operator's pickup or a separately priced local taxi.",
    },
    {
      question: "What is the contact number for Murudeshwar scuba diving booking?",
      answer:
        "For Murudeshwar scuba diving booking support, call or WhatsApp +91 78299 75777. Share your date, number of people, swimming comfort, and whether you need boat-only, snorkeling, or scuba.",
    },
    {
      question: "What happens if Netrani scuba diving is cancelled due to weather?",
      answer:
        "Netrani scuba diving depends on sea and weather conditions. If the operator pauses trips for safety, we help you check the next suitable slot, reschedule where possible, or choose an alternate Murudeshwar plan. Refund or adjustment terms depend on the confirmed operator policy, so ask before paying.",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#breadcrumb",
      "name": "Breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.murudeshwarscubadive.in",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Scuba Diving",
          "item": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#faq",
      "name": "Murudeshwar Scuba Diving (Netrani) FAQ",
      "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#faq",
      "mainEntityOfPage": {
        "@id": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#webpage",
      },
      "mainEntity": faqItems.map((faq, idx) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "@id": `https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#faq-a${idx + 1}`,
        },
        "@id": `https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#faq-q${idx + 1}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#webpage",
      "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
      "name": "Scuba Diving in Murudeshwar | Price, Booking and Netrani Guide",
      "description":
        "Scuba diving in Murudeshwar at Netrani with price guidance, booking help, timing, and dive-day planning for beginners and non-swimmers.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.murudeshwarscubadive.in/#website",
      },
      "publisher": {
        "@id": "https://www.murudeshwarscubadive.in/#organization",
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.murudeshwarscubadive.in/images/netrani-diver.png",
      },
      "datePublished": "2024-01-01",
      "dateModified": "2026-08-09",
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "additionalType": "https://schema.org/SportsActivityLocation",
      "@id": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#scuba",
      "name": "Book Murudeshwar Scuba Diving (Netrani Island)",
      "description":
        "Scuba diving in Murudeshwar at Netrani Island with beginner-friendly guidance, local coordination, and clear price support.",
      "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
      "telephone": "+917829975777",
      "image": "https://www.murudeshwarscubadive.in/images/netrani-diver.png",
      "logo": "https://www.murudeshwarscubadive.in/favicon-32x32.png",
      "email": "murudeshwar.scuba.dive@gmail.com",
      "priceRange": "₹3,500 - ₹4,500",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI",
      "slogan": "Trusted local booking support for Netrani Island scuba slots",
      "parentOrganization": {
        "@id": "https://www.murudeshwarscubadive.in/#organization",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sea View Road, Near Temple",
        "addressLocality": "Murudeshwar",
        "addressRegion": "Karnataka",
        "postalCode": "581350",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 14.0942,
        "longitude": 74.484,
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Murudeshwar",
        },
        {
          "@type": "City",
          "name": "Bhatkal",
        },
        {
          "@type": "City",
          "name": "Gokarna",
        },
        {
          "@type": "City",
          "name": "Honnavar",
        },
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "17:00",
        },
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+917829975777",
          "contactType": "booking",
          "availableLanguage": ["en", "hi", "kn"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Scuba Diving",
      "name": "Netrani Island Scuba Diving (Discover Scuba Diving - DSD)",
      "description":
        "Local booking and coordination support for beginner-friendly scuba diving in Murudeshwar at Netrani Island with equipment, briefing, instructor support, and underwater photos/videos.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#scuba",
      },
      "areaServed": {
        "@type": "City",
        "name": "Murudeshwar",
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Netrani Boat Ride Only",
          "price": "1200",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
          "validFrom": "2026-08-09",
          "description": "Boat ride option for companions who want the offshore Netrani trip without a scuba session.",
        },
        {
          "@type": "Offer",
          "name": "Netrani Snorkeling",
          "price": "1500",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
          "validFrom": "2026-08-09",
          "description":
            "Surface-level snorkeling option for families, companions, and lower-commitment water activity plans.",
        },
        {
          "@type": "Offer",
          "name": "Discover Scuba Diving (Beginner / Non-swimmer friendly)",
          "price": "3500",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
          "validFrom": "2026-08-09",
          "description":
            "Full-day experience with boat ride, training, equipment, guided dive, and underwater photos/videos (varies by package).",
        },
        {
          "@type": "Offer",
          "name": "Fun Dive / PADI Track",
          "price": "4000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
          "validFrom": "2026-08-09",
          "description":
            "Certified-diver fun dive and PADI-track options depending on certification level, date, and sea conditions.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to book scuba diving in Murudeshwar at Netrani Island",
      "description": "Simple booking steps for beginners: confirm price, slots, meeting point, and day plan.",
      "totalTime": "PT9H",
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Valid ID proof",
        },
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Swimwear / quick-dry clothes",
        },
        {
          "@type": "HowToTool",
          "name": "Towel",
        },
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Message to confirm slots",
          "text":
            "Send a WhatsApp message with your date, number of people, and whether anyone is a non-swimmer. We will confirm availability and inclusions.",
          "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#book",
        },
        {
          "@type": "HowToStep",
          "name": "Arrive at the meeting point",
          "text":
            "Reach the assigned Murudeshwar meeting point at the reporting time stated in your written confirmation.",
          "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#meeting-point",
        },
        {
          "@type": "HowToStep",
          "name": "Briefing and training",
          "text": "Complete safety briefing, equipment check, and shallow-water practice with the instructor.",
          "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#safety",
        },
        {
          "@type": "HowToStep",
          "name": "Boat ride and guided dive",
          "text": "Take the boat to Netrani Island and do the guided dive with instructor support.",
          "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#schedule",
        },
      ],
    },
  ];

  return (
    <main className="service-page netrani-theme">
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <section className="service-hero service-hero--offset netrani-hero">
        <div className="service-container">
          <div className="service-hero__inner">
            <nav className="service-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Netrani Scuba Diving</span>
            </nav>
            <div className="service-hero__badge">
              <i className="ri-shield-check-line" aria-hidden="true"></i>
              <span>Compare Credentials, Eligibility &amp; Inclusions</span>
            </div>
            <h1 className="service-hero__title">Scuba Diving in Murudeshwar from ₹3,500: Netrani Booking &amp; Slots</h1>
            <p className="service-hero__subtitle">
              <strong>Scuba diving in Murudeshwar</strong> at Netrani starts from{" "}
              <strong>about ₹3,500 per person</strong> in a current public beginner-plan example. Inclusions vary: do not
              assume the boat, food, equipment, dive, media or transfer is covered until it appears in your written quote.
              Use this page to compare a current slot, operator and eligibility requirements. For a detailed price
              comparison, jump to{" "}
              <Link href="/blog/scuba-diving-packages-murudeshwar">Murudeshwar scuba packages</Link>.
            </p>
            <div className="service-hero__actions">
              <a
                href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d--red"
              >
                <i className="ri-whatsapp-line" aria-hidden="true"></i> Check Price &amp; Slots
              </a>
              <a href="tel:+917829975777" className="btn-3d netrani-btn-blue">
                <i className="ri-phone-line" aria-hidden="true"></i> Call for Price
              </a>
            </div>
            <div className="service-hero__phone">
              <i className="ri-phone-fill" aria-hidden="true"></i>+91 78299 75777
            </div>
            <div className="netrani-trust-strip" aria-label="Netrani scuba booking trust points">
              <div className="netrani-trust-item">
                <strong>₹3,500+</strong>
                <span>beginner scuba slots</span>
              </div>
              <div className="netrani-trust-item">
                <strong>PADI</strong>
                <span>check the assigned centre listing</span>
              </div>
              <div className="netrani-trust-item">
                <strong>Water check</strong>
                <span>eligibility and skills come first</span>
              </div>
              <div className="netrani-trust-item">
                <strong>Media</strong>
                <span>confirm photos/videos in writing</span>
              </div>
              <div className="netrani-trust-item">
                <strong>Policy</strong>
                <span>weather/reschedule clarity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight">
        <div className="service-container">
          <div className="service-card netrani-banner">
            <div className="service-card__body">
              <div className="netrani-banner__row">
                <div className="netrani-icon" aria-hidden="true">
                  <i className="ri-ship-line"></i>
                </div>
                <div className="netrani-banner__text">
                  <h2>Netrani scuba diving price, slots, and 1-on-1 support</h2>
                  <p>
                    A current public operator example supports the “from ₹3,500” starting point. Before paying, confirm
                    the assigned operator, participant eligibility, instructor supervision, equipment, briefing, exact
                    inclusions and weather terms. A 1-on-1 instructor ratio is not universal and must appear in your
                    written confirmation if promised.
                  </p>
                </div>
                <a
                  href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d--red btn-3d--sm"
                >
                  Confirm Slots
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight netrani-soft" id="booking-proof">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <span className="section__subtitle">Booking proof</span>
              <h2 className="section__title netrani-h2">Confirm price, inclusions, operator and weather policy before paying</h2>
              <p className="section__description">
                The right Netrani scuba booking is not only a low poster price. Before you pay, confirm the inclusions,
                operator fit, media delivery, meeting point, and weather or reschedule rule in writing.
              </p>
              <p className="service-note">
                <strong>Source check (9 August 2026):</strong> the starting point is supported by a current public
                operator page showing ₹3,499 and ₹4,499 examples with different inclusions. PADI's official centre
                directory currently lists Scuba Spirit in Murudeshwar, but that does not validate every seller or
                guarantee which centre will fulfil a booking. Check the{" "}
                <a href="https://dolphindive.net/" target="_blank" rel="noopener noreferrer">
                  current operator example
                </a>{" "}
                and the{" "}
                <a href="https://www.padi.com/dive-center/india/scuba-spirit/" target="_blank" rel="noopener noreferrer">
                  PADI centre listing
                </a>
                , then verify your assigned operator in writing.
              </p>
              <div className="service-table-wrap">
                <table className="service-table" aria-label="Netrani scuba booking proof checklist">
                  <thead>
                    <tr>
                      <th>Proof point</th>
                      <th>What to confirm</th>
                      <th>Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Live price and package</td>
                      <td>₹3,500-₹4,500 beginner scuba range, boat ride and exact media inclusion</td>
                      <td>Prevents paying for a cheaper plan that excludes photos, videos, or support</td>
                    </tr>
                    <tr>
                      <td>Operator fit</td>
                      <td>Assigned centre, instructor credentials, supervision and water-skill checks</td>
                      <td>Matches first-timers with the right dive team instead of only the lowest rate</td>
                    </tr>
                    <tr>
                      <td>Booking steps</td>
                      <td>WhatsApp confirmation, reporting time, meeting point and local payment terms</td>
                      <td>Keeps the dive day clear before you travel to Murudeshwar</td>
                    </tr>
                    <tr>
                      <td>Weather and sea policy</td>
                      <td>Reschedule, alternate slot, refund or adjustment rule for that operator</td>
                      <td>Netrani trips depend on sea conditions and safety decisions</td>
                    </tr>
                    <tr>
                      <td>Independent review check</td>
                      <td>Recent, independently verifiable feedback for the assigned operator</td>
                      <td>Adds confidence for families, non-swimmers and first-time divers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="netrani-proof-grid" aria-label="Netrani scuba booking steps">
                <div className="netrani-proof">
                  <i className="ri-checkbox-circle-line" aria-hidden="true"></i>
                  <strong>Step 1</strong>
                  <span>Share date, group size, age range and swimming comfort</span>
                </div>
                <div className="netrani-proof">
                  <i className="ri-checkbox-circle-line" aria-hidden="true"></i>
                  <strong>Step 2</strong>
                  <span>Confirm price, inclusions, operator fit and media deliverables</span>
                </div>
                <div className="netrani-proof">
                  <i className="ri-checkbox-circle-line" aria-hidden="true"></i>
                  <strong>Step 3</strong>
                  <span>Receive reporting point, timing and weather/reschedule note</span>
                </div>
                <div className="netrani-proof">
                  <i className="ri-checkbox-circle-line" aria-hidden="true"></i>
                  <strong>Step 4</strong>
                  <span>Reach the meeting point and complete briefing before the boat ride</span>
                </div>
              </div>
              <div className="service-hero__actions">
                <a
                  href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d--red"
                >
                  <i className="ri-whatsapp-line" aria-hidden="true"></i> Confirm Inclusions
                </a>
                <a href="#testimonials" className="btn-3d netrani-btn-blue">
                  <i className="ri-chat-check-line" aria-hidden="true"></i> See Booking Scenarios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight netrani-visual-section">
        <div className="service-container">
          <header className="netrani-section-head">
            <span className="section__subtitle">Dive day preview</span>
            <h2 className="section__title">What happens before you go underwater</h2>
            <p className="section__description">
              A good first dive feels predictable. These visuals show the three moments that make the experience feel
              safer: briefing, surface support, and equipment clarity.
            </p>
          </header>
          <div className="netrani-thumbnail-grid" aria-label="Netrani scuba dive day preview">
            <figure className="netrani-thumbnail-card">
              <img
                alt="Netrani scuba briefing on the dive boat before departure from Murudeshwar"
                loading="lazy"
                width={1200}
                height={675}
                className="netrani-thumbnail-card__img"
                style={{ color: "transparent" }}
                src="/images/blog/scuba-instructor-hand-signal.jpg"
              />
              <figcaption className="netrani-thumbnail-card__body">
                <strong>Briefing first</strong>
                <span>Boat-side briefing, hand signals, and gear checks before the dive.</span>
              </figcaption>
            </figure>
            <figure className="netrani-thumbnail-card">
              <img
                alt="Beginner-friendly scuba support for a non-swimmer at Netrani Island"
                loading="lazy"
                width={1200}
                height={675}
                className="netrani-thumbnail-card__img"
                style={{ color: "transparent" }}
                src="/images/blog/snorkelling-fish-netrani.jpg"
              />
              <figcaption className="netrani-thumbnail-card__body">
                <strong>Beginner support</strong>
                <span>Close instructor support after participant eligibility and skills checks.</span>
              </figcaption>
            </figure>
            <figure className="netrani-thumbnail-card">
              <img
                alt="Scuba gear and package planning on a Murudeshwar dive boat"
                loading="lazy"
                width={1200}
                height={675}
                className="netrani-thumbnail-card__img"
                style={{ color: "transparent" }}
                src="/images/netrani-scuba-cover.png"
              />
              <figcaption className="netrani-thumbnail-card__body">
                <strong>Gear clarity</strong>
                <span>Clean equipment layout and a simple checklist for the dive day.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight netrani-soft" id="why-book">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <div className="netrani-split">
                <div>
                  <span className="section__subtitle">Trusted booking help</span>
                  <h2 className="section__title netrani-h2">Why book Netrani scuba through Book Murudeshwar?</h2>
                  <p className="section__description">
                    We provide local booking support for travellers comparing scuba diving in Murudeshwar. Ask us to
                    identify the proposed operator and set out the price, inclusions, reporting time and weather terms
                    in writing. Pay only after those details and the cancellation policy are clear.
                  </p>
                  <div className="netrani-proof-grid" aria-label="Book Murudeshwar scuba proof">
                    <div className="netrani-proof">
                      <i className="ri-whatsapp-line" aria-hidden="true"></i>
                      <strong>Written slot confirmation</strong>
                      <span>Date, group size, package, reporting time, and inclusions confirmed before travel.</span>
                    </div>
                    <div className="netrani-proof">
                      <i className="ri-shield-check-line" aria-hidden="true"></i>
                      <strong>Operator identity check</strong>
                      <span>
                        Ask for the centre name and credentials that apply to your actual slot; a general PADI logo or
                        third-party listing is not enough.
                      </span>
                    </div>
                    <div className="netrani-proof">
                      <i className="ri-money-rupee-circle-line" aria-hidden="true"></i>
                      <strong>Clear payment flow</strong>
                      <span>
                        No vague poster price. Confirm what is included, then pay as per the confirmed dive-center
                        terms.
                      </span>
                    </div>
                    <div className="netrani-proof">
                      <i className="ri-cloud-windy-line" aria-hidden="true"></i>
                      <strong>Weather-aware planning</strong>
                      <span>If the sea is not suitable, we help check reschedule options or a backup Murudeshwar plan.</span>
                    </div>
                  </div>
                  <div className="netrani-booking-flow" aria-label="Scuba booking flow">
                    <span>1. WhatsApp your date</span>
                    <span>2. Confirm package and inclusions</span>
                    <span>3. Reach the meeting point</span>
                    <span>4. Dive with instructor support</span>
                  </div>
                </div>
                <figure className="netrani-split__media netrani-split__figure">
                  <img
                    alt="Scuba gear and package clarity for Netrani Island booking"
                    loading="lazy"
                    width={1200}
                    height={675}
                    className="netrani-split__img"
                    style={{ color: "transparent" }}
                    src="/images/deep-dive.png"
                  />
                  <figcaption className="netrani-split__caption">
                    Clear equipment and package expectations make booking easier for first-time divers.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight" id="testimonials">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <span className="section__subtitle">Booking examples</span>
              <h2 className="section__title netrani-h2">Useful booking scenarios &amp; visual gallery</h2>
              <p className="section__description">
                These graphics are retained as <strong>editorial examples</strong> of useful booking conversations and actual scuba explorations around Netrani. Use them to see what to ask about price, eligibility, weather and media delivery; request independently verifiable recent reviews for the assigned operator if those matter to your decision.
              </p>
              <div className="netrani-testimonial-grid" aria-label="Illustrative scuba booking conversation scenarios">
                <figure className="netrani-testimonial-shot">
                  <img
                    alt="Illustrative booking scenario and actual scuba exploration photo 1"
                    loading="lazy"
                    width={1080}
                    height={1620}
                    className="netrani-testimonial-shot__img"
                    style={{ color: "transparent" }}
                    src="/images/gallery/gallery-4.webp"
                  />
                  <figcaption>Example questions about booking and dive-day guidance</figcaption>
                </figure>
                <figure className="netrani-testimonial-shot">
                  <img
                    alt="Illustrative booking scenario and actual scuba exploration photo 2"
                    loading="lazy"
                    width={1080}
                    height={1620}
                    className="netrani-testimonial-shot__img"
                    style={{ color: "transparent" }}
                    src="/images/gallery/gallery-5.webp"
                  />
                  <figcaption>Example questions about price and weather terms</figcaption>
                </figure>
                <figure className="netrani-testimonial-shot">
                  <img
                    alt="Illustrative booking scenario and actual scuba exploration photo 3"
                    loading="lazy"
                    width={1080}
                    height={1620}
                    className="netrani-testimonial-shot__img"
                    style={{ color: "transparent" }}
                    src="/images/gallery/gallery-6.webp"
                  />
                  <figcaption>Example questions about eligibility and media delivery</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight">
        <div className="service-container">
          <section className="pricing-section" aria-label="Choose the Right Netrani Scuba Plan">
            <div className="pricing-section__header">
              <span className="pricing-section__eyebrow">Scuba Pricing</span>
              <h2 className="pricing-section__title">Choose the Right Netrani Scuba Plan</h2>
              <p className="pricing-section__description">
                If you only need a quick budget decision, use this before reading the longer price and package breakdown
                below.
              </p>
            </div>
            <div className="pricing-section__grid">
              <article className="pricing-card">
                <div className="pricing-card__top">
                  <span className="pricing-card__badge">Relaxed</span>
                  <h3 className="pricing-card__title">Boat Ride Only</h3>
                  <div className="pricing-card__price-wrap">
                    <p className="pricing-card__price">₹1,200 - ₹1,500</p>
                    <p className="pricing-card__price-note">No dive session</p>
                  </div>
                  <p className="pricing-card__description">
                    A planning option for companions considering an offshore boat outing around Netrani without scuba. Landing on the island is prohibited; confirm whether boat-only passengers are accepted.
                  </p>
                </div>
                <ul className="pricing-card__features">
                  <li className="pricing-card__feature">
                    <span>Offshore ride only</span>
                  </li>
                  <li className="pricing-card__feature">
                    <span>No scuba briefing needed</span>
                  </li>
                  <li className="pricing-card__feature">
                    <span>Good for mixed groups</span>
                  </li>
                </ul>
                <div className="pricing-card__footer">
                  <a
                    href="https://wa.me/917829975777?text=Hi!%20Please%20share%20boat-only%20Netrani%20trip%20details."
                    className="pricing-card__cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask Boat Option
                  </a>
                </div>
              </article>
              <article className="pricing-card">
                <div className="pricing-card__top">
                  <span className="pricing-card__badge">Easy Start</span>
                  <h3 className="pricing-card__title">Snorkeling</h3>
                  <div className="pricing-card__price-wrap">
                    <p className="pricing-card__price">₹1,500 - ₹2,000</p>
                    <p className="pricing-card__price-note">Lower-commitment water option</p>
                  </div>
                  <p className="pricing-card__description">
                    A planning option for eligible non-divers who want a surface activity. Confirm swimming or water-comfort requirements and supervision.
                  </p>
                </div>
                <ul className="pricing-card__features">
                  <li className="pricing-card__feature">
                    <span>Surface-level activity</span>
                  </li>
                  <li className="pricing-card__feature">
                    <span>Life jacket support</span>
                  </li>
                  <li className="pricing-card__feature">
                    <span>Lower spend than scuba</span>
                  </li>
                </ul>
                <div className="pricing-card__footer">
                  <a
                    href="https://wa.me/917829975777?text=Hi!%20Please%20share%20Netrani%20snorkeling%20timings%20and%20price."
                    className="pricing-card__cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Snorkeling
                  </a>
                </div>
              </article>
              <article className="pricing-card pricing-card--featured">
                <div className="pricing-card__top">
                  <span className="pricing-card__badge">Most Popular</span>
                  <h3 className="pricing-card__title">Discover Scuba</h3>
                  <div className="pricing-card__price-wrap">
                    <p className="pricing-card__price">₹3,500 - ₹4,500</p>
                    <p className="pricing-card__price-note">Most booked first-timer package</p>
                  </div>
                  <p className="pricing-card__description">
                    The standard beginner plan for Murudeshwar visitors who want the full Netrani experience.
                  </p>
                </div>
                <ul className="pricing-card__features">
                  <li className="pricing-card__feature">
                    <span>Confirm boat + gear + training</span>
                  </li>
                  <li className="pricing-card__feature">
                    <span>Confirm supervision and skills</span>
                  </li>
                  <li className="pricing-card__feature">
                    <span>Confirm media deliverables</span>
                  </li>
                </ul>
                <div className="pricing-card__footer">
                  <a
                    href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                    className="pricing-card__cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Scuba Slot
                  </a>
                  <p className="pricing-card__cta-subtext">For eligible beginners after health and water-comfort checks.</p>
                </div>
              </article>
              <article className="pricing-card">
                <div className="pricing-card__top">
                  <span className="pricing-card__badge">Advanced</span>
                  <h3 className="pricing-card__title">Fun Dive / PADI Track</h3>
                  <div className="pricing-card__price-wrap">
                    <p className="pricing-card__price">₹4,000 - ₹25,000+</p>
                    <p className="pricing-card__price-note">Certified dives to full courses</p>
                  </div>
                  <p className="pricing-card__description">
                    Best when you already know your certification level or want a multi-day dive path.
                  </p>
                </div>
                <ul className="pricing-card__features">
                  <li className="pricing-card__feature">
                    <span>1-tank and 2-tank dives</span>
                  </li>
                  <li className="pricing-card__feature">
                    <span>PADI course options</span>
                  </li>
                  <li className="pricing-card__feature">
                    <span>Certification-dependent</span>
                  </li>
                </ul>
                <div className="pricing-card__footer">
                  <a
                    href="https://wa.me/917829975777?text=Hi!%20Please%20share%20fun-dive%20and%20PADI%20course%20options%20for%20Netrani."
                    className="pricing-card__cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask Advanced Options
                  </a>
                </div>
              </article>
            </div>
            <p className="pricing-section__note">
              Only the roughly ₹3,500 beginner starting point was matched to a current public operator example. Other
              retained bands are planning examples; confirm live rates, operator, eligibility and every inclusion.
            </p>
          </section>
        </div>
      </section>

      <section className="service-section service-section--tight netrani-soft">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <div className="netrani-split">
                <div>
                  <span className="section__subtitle">Quick answers</span>
                  <h2 className="section__title netrani-h2">Netrani scuba diving price, booking, timing, and day plan</h2>
                  <p className="section__description">
                    This page answers the main search questions first: Murudeshwar scuba diving price, what is included,
                    when to report, and how first-timers should book. For deeper package comparison, use the dedicated
                    packages guide.
                  </p>
                  <div className="netrani-facts" role="list" aria-label="Scuba diving quick facts">
                    <div className="netrani-fact" role="listitem">
                      <strong>Starting price:</strong> ₹3,500 per person
                    </div>
                    <div className="netrani-fact" role="listitem">
                      <strong>Trip type:</strong> Allow much of the day; get the operator's written schedule
                    </div>
                    <div className="netrani-fact" role="listitem">
                      <strong>Boat ride:</strong> Duration varies by departure, vessel and sea conditions
                    </div>
                    <div className="netrani-fact" role="listitem">
                      <strong>Swimming needed:</strong> Ask for an individual water-comfort and skills assessment
                    </div>
                    <div className="netrani-fact" role="listitem">
                      <strong>Best season:</strong> Typically Oct to May (monsoon may be limited)
                    </div>
                  </div>
                </div>
                <div className="netrani-split__media" aria-label="Netrani Island scuba diving photo">
                  <img
                    alt="Netrani Island scuba diving from Murudeshwar (beginner-friendly guided dive)"
                    width={1200}
                    height={675}
                    className="netrani-split__img"
                    style={{ color: "transparent" }}
                    src="/images/netrani-diver.png"
                  />
                </div>
              </div>
              <nav className="netrani-toc" aria-label="On this page">
                <span className="netrani-toc__label">On this page:</span>
                <a href="#booking-proof">Booking proof</a>
                <a href="#why-book">Why book</a>
                <a href="#guide">Complete guide</a>
                <a href="#how-it-works">How it works</a>
                <a href="#prices">Prices</a>
                <a href="#cost-breakdown">Cost breakdown</a>
                <a href="#package">Package</a>
                <a href="#schedule">Day plan</a>
                <a href="#safety">Safety and eligibility</a>
                <a href="#meeting-point">Meeting point</a>
                <a href="#packages">Packages</a>
                <a href="#compare-booking">Compare booking</a>
                <a href="#non-swimmers">Non-swimmers</a>
                <a href="#best-time">Best time</a>
                <a href="#what-to-carry">What to carry</a>
                <a href="#stay">Where to stay</a>
                <a href="#itinerary">Trip plan</a>
                <a href="#faq">FAQ</a>
                <a href="#testimonials">Booking examples</a>
                <a href="#book">Book now</a>
              </nav>
              <p className="section__description">
                Need a deeper package comparison after checking the price range here? Read{" "}
                <Link href="/blog/scuba-diving-packages-murudeshwar">scuba package comparison</Link>. Need island
                travel basics? Read <Link href="/blog/netrani-island-guide">Netrani Island timings</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="guide">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Guide</span>
            <h2 className="section__title">Scuba diving in Murudeshwar: price, booking, and the Netrani trip</h2>
            <p className="section__description">
              This page is for travellers who want a source-checked answer before booking. It covers Murudeshwar scuba
              diving price, what is included, how the Netrani trip works, and what first-timers should confirm before
              paying.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                When people search for <strong>scuba diving in Murudeshwar</strong>, they are usually looking for Netrani
                Island. For most beginners, the typical <strong>Murudeshwar scuba diving price</strong> is{" "}
                <strong>₹3,500 to ₹4,500 per person</strong>, depending on inclusions. Netrani (also called Pigeon Island)
                is offshore, and your scuba day is built around a morning boat departure, training, and a guided dive
                session.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are comparing results for <strong>scuba diving Murudeshwar</strong>,{" "}
                <strong>Murudeshwar scuba diving</strong>, or <strong>Netrani Island scuba diving</strong>, focus on three
                things first: <strong>operator quality</strong>, <strong>inclusions</strong>, and{" "}
                <strong>season/sea conditions</strong>. A good scuba experience is not only about the lowest price. It is
                about a calm plan, clear communication, and responsible decision-making on the day.
              </p>
              <h3 className="section__title netrani-h2">What exactly is Discover Scuba Diving (DSD)?</h3>
              <p className="service-lede service-lede--flush">
                DSD is the most common tourist scuba program. Think of it as a supervised “first dive” experience. You do
                not need a previous certification. However, PADI says a participant should be reasonably comfortable in
                the water, complete a medical questionnaire and learn the required skills. The instructor briefs and
                supervises you; eligibility should be assessed rather than promised from a chat message alone.
              </p>
              <p className="service-lede service-lede--spaced">
                A Murudeshwar DSD quote may include the offshore boat trip, but this must be confirmed. The programme
                should start with briefing and skills in suitable conditions. Feeling comfortable can take different
                amounts of time; tell the instructor immediately if breathing, the mask, ears or water entry feels wrong.
              </p>
              <h3 className="section__title netrani-h2">Why Netrani Island is the main dive spot</h3>
              <p className="service-lede service-lede--flush">
                Murudeshwar is the base town, but the diving happens at Netrani Island. People choose Netrani because it is
                known for clearer water (in the right season), coral reefs, and a better chance of seeing marine life
                compared to many near-shore locations. Your actual view under water always depends on the day's
                visibility, and we did not find authoritative comparative data proving a “best” or “most popular” rank
                against every west-coast dive site.
              </p>
              <p className="service-lede service-lede--spaced">
                If you want a travel-planning view (boat timings, season notes, and how the island trip works), read{" "}
                <Link href="/blog/netrani-island-guide">Netrani Island timings and boat guide</Link>. If your
                focus is only the diving itself, the detailed dive-site guide is{" "}
                <Link href="/blog/scuba-diving-murudeshwar-netrani-island-guide">Netrani dive-site visibility guide</Link>.
              </p>
              <h3 className="section__title netrani-h2">What you will do on the day (simple walkthrough)</h3>
              <p className="service-lede service-lede--flush">
                A well-run scuba day is predictable. You report at the meeting point, complete a basic briefing, and then
                board the boat. On the boat, the team explains safety rules, shows you the equipment, and helps you with
                the right fit for mask and fins. Once you reach the dive area, you will do a short practice and then the
                guided dive.
              </p>
              <p className="service-lede service-lede--spaced">
                Calm breathing and following instructions matter, but they do not replace the programme's water-comfort,
                health and skills requirements. A responsible instructor should stop or postpone the dive if you cannot
                complete the required skills or conditions are unsuitable.
              </p>
              <h3 className="section__title netrani-h2">Underwater photos and videos: set expectations</h3>
              <p className="service-lede service-lede--flush">
                Photos and videos are one of the main reasons people book Netrani scuba. It is a special experience, and you
                want memories. However, this is also where expectations can mismatch. Some packages include a standard set
                of photos and a short video clip. Other packages include longer coverage or better angles. Quality also
                depends on water clarity and sunlight on that day.
              </p>
              <p className="service-lede service-lede--spaced">
                When you book, confirm these points: how many photos you receive, whether there is a separate photographer
                or shared coverage, and how delivery works (same day or later). If your priority is media, choose a
                package designed for that goal. It is the simplest way to avoid disappointment.
              </p>
              <h3 className="section__title netrani-h2">How to compare Murudeshwar scuba diving packages (without confusion)</h3>
              <p className="service-lede service-lede--flush">
                The keyword “packages” is popular because people want a single number. But packages are not equal unless
                inclusions are equal. Two listings can show the same price while delivering a very different experience.
                Use a comparison checklist:
              </p>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                <li>
                  <strong className="text-white">Boat transfer:</strong> Confirm it is included and whether timings
                  depend on sea conditions.
                </li>
                <li>
                  <strong className="text-white">Instructor support:</strong> Beginners should have close supervision.
                  Ask how the team manages first-timers.
                </li>
                <li>
                  <strong className="text-white">Dive time:</strong> Underwater time varies by conditions and your
                  comfort. Avoid rigid promises and focus on “guided, safe dive”.
                </li>
                <li>
                  <strong className="text-white">Photos/videos:</strong> Confirm deliverables and delivery method.
                </li>
                <li>
                  <strong className="text-white">Reporting time:</strong> Early morning reporting is common. Plan
                  your stay and taxi accordingly.
                </li>
                <li>
                  <strong className="text-white">Safety:</strong> Ask about equipment checks and emergency readiness.
                </li>
              </ul>
              <p className="service-lede service-lede--spaced">
                For a detailed packages breakdown, read{" "}
                <Link href="/blog/scuba-diving-packages-murudeshwar">Netrani scuba package comparison</Link>. If you are
                planning a full trip, our bundle guide is{" "}
                <Link href="/contact">stay + taxi + scuba complete package</Link>
                .
              </p>
              <h3 className="section__title netrani-h2">What you will see under water (realistic expectations)</h3>
              <p className="service-lede service-lede--flush">
                Most first-timers expect a “movie scene” instantly. In reality, your underwater view depends on visibility
                and sunlight on the day. On a good day at Netrani, you can see coral patches, small reef fish, and larger
                schools passing through. On an average day, you still get a beautiful experience, but the visibility can
                be lower and colours look softer.
              </p>
              <p className="service-lede service-lede--spaced">
                For beginners, the goal is not to chase rare sightings. The goal is to enjoy the feeling of weightlessness,
                the calm breathing rhythm, and a safe guided exploration. If you treat the first dive as a foundation, you
                enjoy it more. And if you later decide to do a certification course, your first experience will give you a
                better idea of what scuba is actually like.
              </p>
              <h3 className="section__title netrani-h2">How scuba equipment works (simple explanation for beginners)</h3>
              <p className="service-lede service-lede--flush">
                Many travellers feel nervous because the equipment looks technical. The good news is: you do not need to
                memorise anything. You only need to understand what each part does, so you feel confident when the
                instructor explains it.
              </p>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                <li>
                  <strong className="text-white">Mask:</strong> Helps you see clearly under water. If water enters, the
                  instructor teaches a simple clearing technique.
                </li>
                <li>
                  <strong className="text-white">Regulator:</strong> The mouthpiece you breathe through. You breathe
                  normally, just a bit slower.
                </li>
                <li>
                  <strong className="text-white">BCD (buoyancy control device):</strong> Helps you float on the surface
                  and maintain comfort under water.
                </li>
                <li>
                  <strong className="text-white">Tank:</strong> Holds compressed air. The team must monitor pressure
                  and time, and you must follow the briefing and signal any problem immediately.
                </li>
                <li>
                  <strong className="text-white">Fins:</strong> Help you move with less effort. For beginners, slow
                  fin kicks are enough.
                </li>
                <li>
                  <strong className="text-white">Wetsuit (seasonal):</strong> Helps with comfort and reduces heat loss
                  in water.
                </li>
              </ul>
              <p className="service-lede service-lede--spaced">
                If you are worried about breathing, remember this: the instructor controls the pace. The first few minutes
                are only about getting comfortable. Once you settle, scuba becomes surprisingly calming because your focus
                goes to breath and movement.
              </p>
              <h3 className="section__title netrani-h2">Safety signals and what instructors look for</h3>
              <p className="service-lede service-lede--flush">
                Before your dive, you learn a few simple hand signals. You do not need a long list. For a first dive, these
                are the important ones: “OK”, “not OK”, “up”, “down”, and “ear problem”. Instructors also watch your
                breathing rhythm and comfort level. If you are tense, they slow down. If you are comfortable, they
                continue.
              </p>
              <p className="service-lede service-lede--spaced">
                The biggest beginner issue is ear pressure. That is normal. You will be guided to equalise (release ear
                pressure) slowly. A responsible operator never forces depth. The descent should stop if you cannot
                equalise or feel pain; do not push through it.
              </p>
              <h3 className="section__title netrani-h2">Who should not scuba dive (common restrictions)</h3>
              <p className="service-lede service-lede--flush">
                Scuba is an adventure activity with medical and environmental risks. Complete the operator's recognised
                medical questionnaire honestly. Depending on your answers—including conditions, symptoms, pregnancy,
                surgery or medication—you may need written clearance from a physician familiar with diving medicine. A
                cold, congestion or ear problem can also make participation unsuitable.
              </p>
              <p className="service-lede service-lede--spaced">
                This page is not medical advice, and booking support cannot declare you fit to dive. Be transparent with
                the dive professional and consult an appropriately qualified doctor when the questionnaire or your health
                history requires it.
              </p>
              <h3 className="section__title netrani-h2">Scuba and flights: how to plan if you are travelling</h3>
              <p className="service-lede service-lede--flush">
                Do not fly immediately after scuba diving. PADI's published guidance cites at least 12 hours after a single
                no-decompression dive, at least 18 hours after multiple dives or multiple diving days, and longer when
                your dive computer or dive professional requires it. Many travellers choose a 24-hour buffer. Confirm the
                rule that applies to your actual dive profile before finalising a flight.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are doing a longer coastal trip with multiple destinations, a weekend plan with a buffer day is
                more comfortable than a tight one-day plan. If you are visiting from Bangalore, this is another reason a
                weekend itinerary works better.
              </p>
              <h3 className="section__title netrani-h2">What if weather cancels the trip?</h3>
              <p className="service-lede service-lede--flush">
                Weather and sea conditions are part of coastal activities. A cancellation can feel disappointing, but it is
                also a sign that the operator is not taking unnecessary risks. If conditions are not safe, the right choice
                is to reschedule or switch to an alternative plan in Murudeshwar for that day.
              </p>
              <p className="service-lede service-lede--spaced">
                If scuba is your main reason for travel, choose a commonly workable season and keep a buffer day if
                possible. For a fuller planning view, the cluster guide{" "}
                <Link href="/blog/scuba-diving-murudeshwar-netrani-island-guide">Netrani dive-site guide</Link> covers
                season advice and backup planning in more detail.
              </p>
              <h3 className="section__title netrani-h2">Go straight to the answer you need</h3>
              <p className="service-lede service-lede--flush">
                If you came here to confirm price: go to the <a href="#prices">price section</a> and message us for
                today’s inclusions. If you came here to check safety for non-swimmers: go to the{" "}
                <a href="#non-swimmers">non-swimmers section</a> and read the detailed guide. If you came here to plan a
                weekend: go to the <a href="#itinerary">trip plan section</a> and choose the right stay location.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are ready to book, use the <a href="#book">booking CTA</a>. We confirm slots, share the meeting
                point, and guide you with a clear plan for your scuba day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="how-it-works">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">How it works</span>
            <h2 className="section__title">How scuba diving in Murudeshwar works (from booking to dive)</h2>
            <p className="section__description">
              If you are booking scuba for the first time, the process can feel unclear. This section explains the full
              flow in plain Indian English, so you know what happens at each stage.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <h3 className="section__title netrani-h2">Step 1: Confirm availability and reporting time</h3>
              <p className="service-lede service-lede--flush">
                Scuba at Netrani Island is not like a “walk-in ticket”. The boat has limited capacity, and the sea
                conditions decide whether the trip runs at full strength. When you message to book, ask for your date,
                group size, assigned operator and reporting time in writing. Anyone who does not swim confidently and
                every child should be assessed against the operator's health, water-comfort, skills and age rules—not
                automatically placed into a “suitable” plan.
              </p>
              <h3 className="section__title netrani-h2">Step 2: Reach the meeting point and complete briefing</h3>
              <p className="service-lede service-lede--flush">
                On the day, report to the exact point named by the assigned operator; no single universal Murudeshwar
                meeting point was verified. The team should explain the boat procedure, equipment, required skills and
                dive plan. Ask questions before boarding and again before entering the water.
              </p>
              <h3 className="section__title netrani-h2">Step 3: Boat ride to Netrani Island</h3>
              <p className="service-lede service-lede--flush">
                The boat ride is part of the experience. It is also where you should protect yourself from sun and salt
                spray. Carry a cap, sunscreen, and water. If you get motion sickness, inform the team early. Simple
                preparation can make the ride comfortable.
              </p>
              <h3 className="section__title netrani-h2">Step 4: Training and comfort checks</h3>
              <p className="service-lede service-lede--flush">
                For beginners, training is practical. You learn how to breathe through the regulator, how to clear the
                mask, and how to communicate with the instructor. The goal is not to “pass a test”. The goal is to feel
                comfortable. Once you are comfortable at the surface, the underwater part becomes easier.
              </p>
              <h3 className="section__title netrani-h2">Step 5: The guided dive</h3>
              <p className="service-lede service-lede--flush">
                The guided dive is the highlight. Your instructor stays with you and manages the pace. If you feel any
                discomfort, you signal and the team responds. You are not expected to be perfect. You are expected to
                be honest about comfort so the dive stays safe.
              </p>
              <h3 className="section__title netrani-h2">Step 6: Return and media delivery</h3>
              <p className="service-lede service-lede--flush">
                After the dive, you return to Murudeshwar. Photos and videos may be shared the same day or later, depending
                on the package and operator workflow. If media is important to you, confirm delivery method before you
                book. A clear expectation protects your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="prices">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Price</span>
            <h2 className="section__title">Murudeshwar scuba diving price (per person) and what it includes</h2>
            <p className="section__description">
              Most searches end at the same question: “What is the <strong>scuba diving price in Murudeshwar</strong>
              ?” Below is a practical breakdown of the common <strong>Netrani Island scuba diving price</strong> range
              and the inclusions you must confirm.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                For beginners, the most popular option is <strong>Discover Scuba Diving (DSD)</strong>. This is a guided
                experience, not a certification course. You get training and a supervised dive with an instructor.
              </p>
              <p className="service-lede service-lede--spaced">
                Quick answer: most people pay <strong>₹3,500 to ₹4,500 per person</strong> for beginner scuba diving in
                Murudeshwar. On this page, we explain price the way a traveller can actually use it: per person, what is
                included, and what changes the final cost.
              </p>
              <div className="service-table-wrap">
                <table className="service-table" aria-label="Scuba diving price per person in Murudeshwar">
                  <thead>
                    <tr>
                      <th scope="col">Package type</th>
                      <th scope="col">Typical price (per person)</th>
                      <th scope="col">Best for</th>
                      <th scope="col">Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>DSD (Beginner)</strong>
                      </td>
                      <td>₹3,500 to ₹4,500</td>
                      <td>Eligible first-timers after health, water-comfort and skills checks</td>
                      <td>Confirm boat + training + equipment + guided dive + media; plans vary</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Premium / Add-ons</strong>
                      </td>
                      <td>Varies by inclusion</td>
                      <td>Travellers comparing media or group-size add-ons</td>
                      <td>May offer extra media or smaller groups; require a written deliverable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="section__title netrani-h2">Why prices vary</h3>
              <p className="service-lede service-lede--flush">
                When you compare “Murudeshwar scuba diving price” online, you will see a wide range. It is not always
                the same activity. The biggest difference is usually the package inclusions. Some plans include a standard
                set of underwater photos/videos, while others include a dedicated photographer or extended coverage.
                Season and sea conditions also affect scheduling and capacity.
              </p>
              <p className="service-lede service-lede--spaced">
                If you want the best value, decide the result you want: a safe first dive, clear photos, or an all-in
                trip bundle (stay + taxi + scuba). Then book the correct package rather than chasing the lowest number
                on a poster.
              </p>
              <div className="service-stack text-center">
                <a
                  href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d--red service-btn-center"
                >
                  Ask for today’s scuba price and inclusions
                </a>
                <p className="service-note mt-2">
                  Prefer a call?{" "}
                  <a href="tel:+917829975777" className="external-link">
                    +91 78299 75777
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="cost-breakdown">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Cost</span>
            <h2 className="section__title">Cost of scuba diving in Murudeshwar: a transparent breakdown</h2>
            <p className="section__description">
              If you are comparing prices across websites, you may wonder why the same activity shows different numbers.
              This section explains what you are actually paying for, and how to spot genuine value.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                The cost of scuba diving in Murudeshwar is not only the “dive” itself. Netrani is offshore, so you are
                paying for a full operational setup: the boat, crew, instructors, equipment, and safety readiness. A
                higher price does not prove good maintenance or safer practice, so verify the operator, equipment
                checks, supervision and emergency plan separately from price.
              </p>
              <h3 className="section__title netrani-h2">What your payment typically covers</h3>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                <li>
                  <strong className="text-white">Boat operations:</strong> Boat crew, fuel, and timing coordination.
                </li>
                <li>
                  <strong className="text-white">Instructor team:</strong> Certified staff for briefing, training, and
                  guided diving.
                </li>
                <li>
                  <strong className="text-white">Scuba equipment:</strong> Mask, fins, BCD, regulator, and tank usage
                  for the activity.
                </li>
                <li>
                  <strong className="text-white">Safety readiness:</strong> Procedures, checks, and emergency
                  preparedness on the boat.
                </li>
                <li>
                  <strong className="text-white">Media:</strong> Underwater photos/videos (package dependent).
                </li>
              </ul>
              <h3 className="section__title netrani-h2">Common “hidden cost” confusion (how to avoid it)</h3>
              <p className="service-lede service-lede--flush">
                The simplest way to avoid confusion is to confirm inclusions in one line before you pay anything. Ask
                for a message that clearly states: boat included, guided dive included, and media included (if
                promised). If something is important to you, do not assume it is included. Confirm it.
              </p>
              <p className="service-lede service-lede--spaced">
                For a detailed package comparison, the best cluster guide is{" "}
                <Link href="/blog/scuba-diving-packages-murudeshwar">scuba package comparison</Link>. If you want the
                best value for a full trip, choose a bundle plan via{" "}
                <Link href="/contact">
                  complete package (stay + taxi + scuba)
                </Link>
                .
              </p>
              <h3 className="section__title netrani-h2">Practical advice for best value</h3>
              <p className="service-lede service-lede--flush">
                If your goal is “best value”, decide the outcome you want. For most first-timers, the best value is a
                standard DSD with clear inclusions and a calm operator. For content-focused travellers, the best value is
                a photo/video-oriented plan. For families and groups, the best value is often a bundle that reduces
                morning stress and travel uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Why Netrani</span>
            <h2 className="section__title">Clear water, coral reefs, real diving</h2>
            <p className="section__description">
              Netrani Island (Pigeon Island) is about 10 nautical miles off Murudeshwar. It is known as an offshore
              diving area, but visibility and marine-life sightings vary by day and no species can be guaranteed.
              Landing on the island is prohibited.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                New to the island? Read our{" "}
                <Link href="/blog/netrani-island-guide">Netrani Island timings guide</Link> for boat timings,
                season tips, and travel planning.
              </p>
              <p className="service-lede service-lede--spaced">
                Want a beginner-first explanation? Read{" "}
                <Link href="/blog/scuba-diving-murudeshwar-non-swimmers">non-swimmer scuba guide</Link>. Planning
                your stay? See{" "}
                <Link href="/contact">
                  where to stay for early scuba reporting
                </Link>
                .
              </p>
              <div className="service-stats">
                <div className="service-stat netrani-stat">
                  <span className="service-stat__value">Variable</span>
                  <span className="service-stat__label">Daily visibility</span>
                </div>
                <div className="service-stat netrani-stat">
                  <span className="service-stat__value">No promise</span>
                  <span className="service-stat__label">Species sightings</span>
                </div>
                <div className="service-stat netrani-stat">
                  <span className="service-stat__value">Assess</span>
                  <span className="service-stat__label">Water comfort &amp; skills</span>
                </div>
                <div className="service-stat netrani-stat">
                  <span className="service-stat__value">Confirm</span>
                  <span className="service-stat__label">Photo/video inclusion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="package">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Package</span>
            <h2 className="section__title">Discover Scuba Diving (DSD)</h2>
            <p className="section__description">
              A first-experience option for eligible beginners. Allow much of the day and use the assigned operator's
              written reporting and return schedule.
            </p>
          </header>
          <div className="service-card">
            <div className="service-price-card__head service-price-card__head--split netrani-cta">
              <div>
                <h3>Beginner-friendly scuba + boat ride</h3>
                <p>Confirm boat, training, equipment, instructor support and photos/videos</p>
              </div>
              <div className="service-price-card__price">
                <small>Starting at</small>
                <div className="service-price-card__amount">₹3,500</div>
              </div>
            </div>
            <div className="service-card__body">
              <ul className="service-feature-list">
                <li className="service-feature netrani-feature">
                  <i className="ri-ship-line" aria-hidden="true"></i>
                  <span>Confirm the offshore boat route around Netrani (about 19 km)</span>
                </li>
                <li className="service-feature netrani-feature">
                  <i className="ri-camera-lens-line" aria-hidden="true"></i>
                  <span>Confirm underwater photo/video quantity and delivery</span>
                </li>
                <li className="service-feature netrani-feature">
                  <i className="ri-restaurant-line" aria-hidden="true"></i>
                  <span>Confirm food and drinking-water inclusion</span>
                </li>
                <li className="service-feature netrani-feature">
                  <i className="ri-shield-check-line" aria-hidden="true"></i>
                  <span>Ask for the assigned centre and instructor credentials</span>
                </li>
              </ul>
              <div className="service-stack text-center mt-6">
                <a href="tel:+917829975777" className="btn-3d netrani-btn-blue service-btn-center">
                  Check Slot, Operator &amp; Payment Terms
                </a>
                <p className="service-note mt-2">
                  Prefer WhatsApp?{" "}
                  <a
                    href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Chat to confirm slots and inclusions
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="packages">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Packages</span>
            <h2 className="section__title">Scuba diving in Murudeshwar packages: how to choose the right one</h2>
            <p className="section__description">
              “Packages” can sound confusing because every operator lists a slightly different set of inclusions. Use
              this section as a practical checklist so you choose the right plan for your budget and expectations.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <h3 className="section__title netrani-h2">1) Standard beginner package (most common)</h3>
              <p className="service-lede service-lede--flush">
                This is the best fit for most travellers searching “<strong>scuba diving in Murudeshwar price per person</strong>
                ” because it keeps the comparison simple. Ask whether the specific quote includes the boat, basic
                training, equipment, guided dive and underwater photos/videos. A “standard” label does not make those
                inclusions universal.
              </p>
              <h3 className="section__title netrani-h2">2) Photo/video focused package (for better memories)</h3>
              <p className="service-lede service-lede--flush">
                If your main goal is good content, ask for a package with clear deliverables: number of photos, length of
                video, delivery timeline, and whether the photographer is shared across a group. This avoids
                disappointment where the activity is excellent but the media is limited.
              </p>
              <h3 className="section__title netrani-h2">3) Trip bundle (stay + taxi + scuba)</h3>
              <p className="service-lede service-lede--flush">
                For families and groups, logistics matter. If your hotel is far from the harbour, you may end up stressed
                about early morning reporting. In that case, a bundle is easier: choose a stay close to the pickup area
                and arrange a taxi at the correct time. See{" "}
                <Link href="/contact">Murudeshwar complete package</Link> for
                the all-in approach.
              </p>
              <p className="service-lede service-lede--spaced">
                Detailed package comparisons are covered in our guide:{" "}
                <Link href="/blog/scuba-diving-packages-murudeshwar">Murudeshwar scuba diving packages</Link>. If you
                want a quick recommendation for your date and group size, message us on WhatsApp and we will shortlist
                the right option.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="compare-booking">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Compare</span>
            <h2 className="section__title">
              Best value scuba diving in Murudeshwar: direct center vs local booking support
            </h2>
            <p className="section__description">
              The lowest visible price is not always the best choice. Compare the booking route, proof, inclusions, and
              support before you confirm a Netrani slot.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <div className="service-table-wrap">
                <table className="service-table" aria-label="Compare scuba booking options in Murudeshwar">
                  <thead>
                    <tr>
                      <th scope="col">Booking route</th>
                      <th scope="col">Best for</th>
                      <th scope="col">What to verify</th>
                      <th scope="col">Risk if unclear</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Book Murudeshwar local support</strong>
                      </td>
                      <td>Travellers who want price, slot, pickup, and inclusion clarity</td>
                      <td>Package type, reporting time, media, payment terms, weather plan</td>
                      <td>Written details reduce ambiguity but do not remove activity risk</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Direct dive center</strong>
                      </td>
                      <td>Divers who already know the operator and package</td>
                      <td>Certification status, inclusions, refund/reschedule rule</td>
                      <td>You may still need separate stay/taxi coordination</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Marketplace or review listing</strong>
                      </td>
                      <td>Researching operators and reviews before deciding</td>
                      <td>Recent reviews, actual operator contact, final package price</td>
                      <td>Listing quality may not equal current slot availability</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="service-lede service-lede--spaced">
                Our recommendation is simple: choose the route that gives you the clearest written inclusions. If you want
                a fast decision, message us with your date, group size, and comfort level. We will guide you to the
                best-fit Netrani scuba option for that day.
              </p>
              <div className="service-stack text-center mt-6">
                <a
                  href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d--red service-btn-center"
                >
                  Compare Today's Netrani Scuba Options
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="schedule">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Schedule</span>
            <h2 className="section__title">Day plan (typical)</h2>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <ol className="service-ol">
                <li>
                  <strong>Reporting</strong> at the time and meeting point stated by your operator
                </li>
                <li>
                  <strong>Boat ride</strong> to Netrani Island (Pigeon Island)
                </li>
                <li>
                  <strong>Training</strong> and shallow-water practice with instructor
                </li>
                <li>
                  <strong>Guided dive</strong> (time varies by conditions and package)
                </li>
                <li>
                  <strong>Return</strong> at the operator's condition-dependent estimate
                </li>
              </ol>
              <p className="service-note">
                The sequence is useful, but no universal reporting time, boat duration or return time was independently
                verified. Do not book a tight train, bus or flight connection around an estimated sea-trip schedule.
              </p>
              <p className="service-lede service-lede--spaced">
                For seasons, conditions, and tips, read our{" "}
                <Link href="/blog/scuba-diving-murudeshwar-netrani-island-guide">Netrani dive-site conditions guide</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="non-swimmers">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Beginners</span>
            <h2 className="section__title">Scuba diving for non-swimmers in Murudeshwar: what it really means</h2>
            <p className="section__description">
              This is one of the most common concerns. The accurate short answer is: DSD may be possible for a person
              who does not swim confidently, but only after the operator checks water comfort, health, required skills
              and conditions. Instructor support does not remove participant requirements or risk.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <div className="netrani-split">
                <div>
                  <p className="service-lede service-lede--flush">
                    “Non-swimmer friendly” should never mean automatic eligibility. PADI says DSD participants should
                    be comfortable in the water and able to maintain themselves at the surface. The assigned professional
                    must also complete the medical, briefing and skills process. If those checks or the sea conditions are
                    unsuitable, the activity should be changed, postponed or stopped.
                  </p>
                  <p className="service-lede service-lede--spaced">
                    If you want a detailed walkthrough of what happens from the moment you reach the harbour until you
                    get back, read <Link href="/blog/scuba-diving-murudeshwar-non-swimmers">non-swimmer scuba guide</Link>
                    . It covers the practical questions people ask: fear of water, breathing, masks, and what to do if
                    you feel anxious.
                  </p>
                </div>
                <figure className="netrani-split__media netrani-split__figure">
                  <img
                    alt="Beginner diver with close instructor support at Netrani Island"
                    loading="lazy"
                    width={1200}
                    height={675}
                    className="netrani-split__img"
                    style={{ color: "transparent" }}
                    src="/images/blog/snorkelling-fish-netrani.jpg"
                  />
                  <figcaption className="netrani-split__caption">
                    Instructor support follows—not replaces—health, water-comfort and skills checks.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="safety">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Safety</span>
            <h2 className="section__title">Eligibility and safety checklist</h2>
            <p className="section__description">
              Netrani Island scuba diving is designed for beginners, but it is still an adventure activity. Use this
              as a quick self-check before you book.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <ul className="service-feature-list">
                <li className="service-feature netrani-feature">
                  <i className="ri-user-smile-line" aria-hidden="true"></i>
                  <span>
                    <strong>Beginner-friendly:</strong> Discover Scuba Diving (DSD) with instructor support.
                  </span>
                </li>
                <li className="service-feature netrani-feature">
                  <i className="ri-heart-pulse-line" aria-hidden="true"></i>
                  <span>
                    <strong>Medical conditions:</strong> If you have asthma, recent surgery, pregnancy, medication
                    questions, or heart/lung issues, complete the medical form and seek a physician's clearance when
                    required; booking support cannot approve fitness to dive.
                  </span>
                </li>
                <li className="service-feature netrani-feature">
                  <i className="ri-parent-line" aria-hidden="true"></i>
                  <span>
                    <strong>Kids:</strong> PADI's DSD minimum age is 10. The operator may be stricter, and guardian
                    consent, medical screening, skills and suitable conditions still apply.
                  </span>
                </li>
                <li className="service-feature netrani-feature">
                  <i className="ri-cloud-windy-line" aria-hidden="true"></i>
                  <span>
                    <strong>Sea conditions:</strong> Trips depend on weather and visibility. Safety comes first.
                  </span>
                </li>
              </ul>
              <p className="service-note mt-4">
                Want the full beginner explanation? Read{" "}
                <Link href="/blog/scuba-diving-murudeshwar-non-swimmers">non-swimmer scuba safety guide</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="operator">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Quality</span>
            <h2 className="section__title">How to choose a reliable scuba operator in Murudeshwar</h2>
            <p className="section__description">
              Many listings look similar online. This checklist helps you pick an operator that prioritises safety,
              clarity, and a good first-time experience.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                If you are price-shopping, it is easy to miss the most important part: operator quality. A reliable
                operator is not only about certification logos. It is about how the team communicates, how they manage
                beginners, and whether they make sensible decisions when sea conditions change.
              </p>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                <li>
                  <strong className="text-white">Clear inclusions:</strong> You get a written confirmation of what is
                  included in your package.
                </li>
                <li>
                  <strong className="text-white">Beginner-first briefing:</strong> The team is patient and explains
                  without rushing.
                </li>
                <li>
                  <strong className="text-white">Equipment checks:</strong> They check mask fit and regulator comfort
                  before starting.
                </li>
                <li>
                  <strong className="text-white">Responsible decisions:</strong> They do not promise a “guaranteed”
                  underwater time regardless of conditions.
                </li>
                <li>
                  <strong className="text-white">Comfort over speed:</strong> They allow extra time for breathing
                  practice for non-swimmers.
                </li>
              </ul>
              <p className="service-lede service-lede--spaced">
                Use these basics to question any operator proposed for your group. We can help compare options, but you
                should ask for the assigned centre name, instructor credentials, emergency readiness and written terms
                rather than relying on a general “verified partner” statement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="best-time">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Season</span>
            <h2 className="section__title">Best time for scuba diving in Murudeshwar (Netrani Island)</h2>
            <p className="section__description">
              Visibility and sea conditions matter more than temperature. Outside-monsoon months are commonly used as the
              planning window, but no month guarantees clear water or a departure.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                Use <strong>October to May</strong> as a broad planning range only. Karnataka Tourism notes that
                monsoon access may be restricted, while each operator and captain makes the actual safety decision. Ask
                for current status close to the date and keep a land-based backup plan.
              </p>
              <p className="service-lede service-lede--spaced">
                For a month-wise trip plan, read{" "}
                <Link href="/blog/best-time-scuba-diving-murudeshwar">Murudeshwar season and weather guide</Link>. It helps
                you plan your stay, temple visit, and scuba day without rushing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="what-to-carry">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Checklist</span>
            <h2 className="section__title">What to carry for your scuba day (simple packing list)</h2>
            <p className="section__description">
              Your scuba experience becomes smoother when you bring the right basics. This list is designed for Indian
              travellers doing a one-day trip from Murudeshwar.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <div className="service-grid">
                <div className="service-card">
                  <div className="service-card__body">
                    <h3 className="section__title netrani-h2">Carry</h3>
                    <ul className="service-feature-list">
                      <li className="service-feature netrani-feature">
                        <i className="ri-t-shirt-2-line" aria-hidden="true"></i>
                        <span>Swimwear or quick-dry clothes</span>
                      </li>
                      <li className="service-feature netrani-feature">
                        <i className="ri-drop-line" aria-hidden="true"></i>
                        <span>Towel and a change of clothes</span>
                      </li>
                      <li className="service-feature netrani-feature">
                        <i className="ri-sun-line" aria-hidden="true"></i>
                        <span>Sunscreen and cap (boat ride)</span>
                      </li>
                      <li className="service-feature netrani-feature">
                        <i className="ri-id-card-line" aria-hidden="true"></i>
                        <span>Valid ID proof</span>
                      </li>
                      <li className="service-feature netrani-feature">
                        <i className="ri-medicine-bottle-line" aria-hidden="true"></i>
                        <span>Personal medicines (if any)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-card__body">
                    <h3 className="section__title netrani-h2">Avoid</h3>
                    <ul className="service-feature-list">
                      <li className="service-feature netrani-feature">
                        <i className="ri-restaurant-2-line" aria-hidden="true"></i>
                        <span>Very heavy meals right before the dive</span>
                      </li>
                      <li className="service-feature netrani-feature">
                        <i className="ri-goblet-line" aria-hidden="true"></i>
                        <span>Alcohol the night before</span>
                      </li>
                      <li className="service-feature netrani-feature">
                        <i className="ri-timer-line" aria-hidden="true"></i>
                        <span>Late reporting (harbour timings are strict)</span>
                      </li>
                      <li className="service-feature netrani-feature">
                        <i className="ri-alert-line" aria-hidden="true"></i>
                        <span>Ignoring the safety briefing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="service-note mt-4">
                If you are combining scuba with other water activities, see{" "}
                <Link href="/blog/water-sports-murudeshwar">Murudeshwar water sports and activities</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="meeting-point">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Location</span>
            <h2 className="section__title">Meeting point in Murudeshwar</h2>
            <p className="section__description">
              The meeting point depends on the assigned operator and departure arrangement. Get the exact map pin,
              landmark, contact person and reporting time in the same written confirmation; do not travel only to a
              generic “harbour” pin.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                Staying outside Murudeshwar? Use our <Link href="/contact">Murudeshwar taxi service</Link> for
                the confirmed early-morning meeting point,{" "}
                <Link href="/contact">Mangalore Airport to Murudeshwar taxi</Link> for
                flight arrivals, or check{" "}
                <Link href="/contact">where to stay for scuba diving</Link> to
                reduce travel time.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are planning a full trip, see{" "}
                <Link href="/contact">
                  Murudeshwar complete package (stay + taxi + scuba)
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="stay">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Stay</span>
            <h2 className="section__title">Where to stay for scuba diving in Murudeshwar</h2>
            <p className="section__description">
              If you are coming mainly for scuba, choose your hotel based on morning reporting convenience first, and views
              second. A good location helps you start early without stress.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                Many people search for “scuba diving in Murudeshwar packages” and forget that the most common trip
                problem is logistics: late reporting, long travel time, and confusion about pickup. A stay that is
                aligned with your scuba timing makes the day smoother.
              </p>
              <p className="service-lede service-lede--spaced">
                Use this guide to choose the right area and style of accommodation:{" "}
                <Link href="/contact">
                  where to stay for early scuba reporting
                </Link>
                . If you want an all-in approach, see{" "}
                <Link href="/contact">Murudeshwar complete package</Link>.
              </p>
              <p className="service-note mt-2">
                Looking for stays now? Browse <Link href="/contact">Murudeshwar accommodations</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="itinerary">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Trip plan</span>
            <h2 className="section__title">How to plan your Murudeshwar scuba trip (1 day or weekend)</h2>
            <p className="section__description">
              A good trip plan increases your success rate. The earlier you reach Murudeshwar the previous evening,
              the calmer your scuba day will be.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <h3 className="section__title netrani-h2">Option A: One-day scuba plan (best for nearby cities)</h3>
              <p className="service-lede service-lede--flush">
                If you are staying in Murudeshwar already, a one-day scuba plan is straightforward. Keep the previous
                night light, sleep early, and be ready for early reporting. After you return, you can relax at the
                beach or do temple darshan depending on your energy levels.
              </p>
              <p className="service-lede service-lede--spaced">
                If you want a timed itinerary, read{" "}
                <Link href="/blog/ultimate-murudeshwar-itinerary-guide">Murudeshwar one-day trip itinerary</Link>. It also
                explains why same-day arrival from far cities is risky for scuba, because the boats usually start early.
              </p>
              <h3 className="section__title netrani-h2">Option B: Weekend plan (recommended for Bangalore and longer travel)</h3>
              <p className="service-lede service-lede--flush">
                For travellers coming from Bangalore or other longer routes, a weekend plan reduces stress. Reach
                Murudeshwar on Saturday, do temple and beach in the evening, and keep Sunday morning for scuba. This
                gives you buffer time even if there is traffic, a delayed train, or a late check-in.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are planning from Bangalore, use our detailed travel guide:{" "}
                <Link href="/blog/murudeshwar-trip-from-bangalore">Murudeshwar trip from Bangalore</Link>. For private
                vehicle planning, <Link href="/blog/bangalore-to-murudeshwar-by-cab">Bangalore to Murudeshwar by cab</Link>{" "}
                is the practical route and cost guide.
              </p>
              <h3 className="section__title netrani-h2">Transport tips (so you do not miss reporting)</h3>
              <p className="service-lede service-lede--flush">
                Early-morning reporting is the most common reason people feel stressed. If your stay is not walkable
                to the meeting point, plan transport in advance. You can use our{" "}
                <Link href="/contact">Murudeshwar taxi service</Link>,{" "}
                <Link href="/murudeshwar-railway-station-to-temple-taxi">
                  Murudeshwar Railway Station to Temple taxi
                </Link>
                , or read the detailed fare guide in{" "}
                <Link href="/blog/ultimate-murudeshwar-itinerary-guide">taxi rental Murudeshwar complete guide</Link>
                . Couples often prefer a bike for local sightseeing, but for scuba morning reporting, a taxi is more
                reliable for timings.
              </p>
              <h3 className="section__title netrani-h2">Finishing the trip: what else to do in Murudeshwar</h3>
              <p className="service-lede service-lede--flush">
                Scuba is usually the highlight, but a good Murudeshwar trip is balanced: temple, beach, food, and one
                adventure activity. If you want to add more activities, see{" "}
                <Link href="/blog/water-sports-murudeshwar">water sports and activities</Link>. If your focus
                is comfort, browse <Link href="/contact">accommodations</Link> and shortlist stays that match
                your morning reporting needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="people-also-ask">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Answers</span>
            <h2 className="section__title">People also ask (FAQ)</h2>
            <p className="section__description">
              These are the most common Google-style questions. Tap a question to jump to the FAQ section for the full
              answer.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <ul className="netrani-jump-list" aria-label="Jump to FAQ questions">
                <li>
                  <a href="#faq">What is the Netrani Island scuba diving price from Murudeshwar?</a>
                </li>
                <li>
                  <a href="#faq">What is the scuba diving price per person in Murudeshwar?</a>
                </li>
                <li>
                  <a href="#faq">How do I book scuba diving in Murudeshwar?</a>
                </li>
                <li>
                  <a href="#faq">What is included in the Netrani Island scuba diving price?</a>
                </li>
                <li>
                  <a href="#faq">Do I need to know swimming for scuba diving in Murudeshwar?</a>
                </li>
                <li>
                  <a href="#faq">What is the best time for Netrani Island scuba diving?</a>
                </li>
                <li>
                  <a href="#faq">How long is the scuba diving trip to Netrani Island?</a>
                </li>
                <li>
                  <a href="#faq">Is scuba diving at Netrani Island safe?</a>
                </li>
                <li>
                  <a href="#faq">What should I carry for scuba diving in Murudeshwar?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="netrani-faq relative overflow-hidden bg-white py-20" id="faq">
        <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="service-container">
          <div className="mb-12 text-center">
            <span className="section__subtitle">FAQ</span>
            <h2 className="section__title">Scuba diving questions</h2>
            <p className="section__description">
              Answers about Murudeshwar scuba diving price, booking, swimming, and safety.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="service-section service-section--tight netrani-soft" id="sources">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <span className="section__subtitle">Sources checked</span>
              <h2 className="section__title netrani-h2">What is verified—and what still needs a live check</h2>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                <li>
                  <a href="https://blog.padi.com/discover-scuba-diving-faqs/" target="_blank" rel="noopener noreferrer">
                    PADI's Discover Scuba Diving FAQ
                  </a>{" "}
                  supports the minimum age of 10, water-comfort requirement and medical questionnaire. It does not
                  approve a specific Netrani participant or operator.
                </li>
                <li>
                  <a href="https://www.padi.com/dive-center/india/scuba-spirit/" target="_blank" rel="noopener noreferrer">
                    PADI's Murudeshwar centre directory
                  </a>{" "}
                  lists Scuba Spirit. It does not prove that every package sold locally is operated by that centre.
                </li>
                <li>
                  <a href="https://dolphindive.net/" target="_blank" rel="noopener noreferrer">
                    Dolphin Dive's current public page
                  </a>{" "}
                  shows ₹3,499 and ₹4,499 examples with different inclusions. It supports the “from ₹3,500” comparison
                  point, not a universal market tariff.
                </li>
                <li>
                  <a href="https://karnatakatourism.org/en/destinations/gokarna" target="_blank" rel="noopener noreferrer">
                    Karnataka Tourism's coastal destination guidance
                  </a>{" "}
                  notes restricted landing at Netrani and possible monsoon access restrictions. Exact visibility,
                  sailing time, species sightings and the day's departure remain unverified until the assigned operator
                  confirms conditions.
                </li>
                <li>
                  <a
                    href="https://blog.padi.com/7-things-you-should-never-do-immediately-after-diving/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PADI's flying-after-diving guidance
                  </a>{" "}
                  explains the minimum surface intervals; the actual dive profile and dive professional's advice still
                  control your plan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="guides">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Guides</span>
            <h2 className="section__title">Helpful scuba reads</h2>
            <p className="section__description">
              Quick, practical guides for season, packages, stays, and what to expect as a beginner.
            </p>
          </header>
          <div className="service-links netrani-links">
            <div className="service-link-card netrani-link-card">
              <Link
                className="netrani-link-card__media"
                aria-label="Netrani Dive Site Guide"
                href="/blog/scuba-diving-murudeshwar-netrani-island-guide"
              >
                <img
                  alt="Scuba diving in Murudeshwar guide"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-link-card__img"
                  style={{ color: "transparent" }}
                  src="/images/blog/hero-scuba-diver-netrani-reef.jpg"
                />
              </Link>
              <div className="netrani-link-card__head">
                <span className="netrani-link-card__icon" aria-hidden="true">
                  <i className="ri-compass-3-line"></i>
                </span>
                <h3>
                  <Link href="/blog/scuba-diving-murudeshwar-netrani-island-guide">Netrani Dive Site Guide</Link>
                </h3>
                <span className="netrani-link-card__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              <p>Dive-site conditions, visibility, marine life, and first-dive expectations.</p>
            </div>

            <div className="service-link-card netrani-link-card">
              <Link
                className="netrani-link-card__media"
                aria-label="Scuba Diving for Non-Swimmers"
                href="/blog/scuba-diving-murudeshwar-non-swimmers"
              >
                <img
                  alt="Scuba diving for non-swimmers guide"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-link-card__img"
                  style={{ color: "transparent" }}
                  src="/images/blog/netrani-coral-reef-fish.jpg"
                />
              </Link>
              <div className="netrani-link-card__head">
                <span className="netrani-link-card__icon" aria-hidden="true">
                  <i className="ri-lifebuoy-line"></i>
                </span>
                <h3>
                  <Link href="/blog/scuba-diving-murudeshwar-non-swimmers">Scuba Diving for Non-Swimmers</Link>
                </h3>
                <span className="netrani-link-card__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              <p>Non-swimmer safety steps, instructor support, and beginner confidence tips.</p>
            </div>

            <div className="service-link-card netrani-link-card">
              <Link
                className="netrani-link-card__media"
                aria-label="Netrani Scuba Package Comparison"
                href="/blog/scuba-diving-packages-murudeshwar"
              >
                <img
                  alt="Murudeshwar scuba diving packages"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-link-card__img"
                  style={{ color: "transparent" }}
                  src="/images/netrani-scuba-cover.png"
                />
              </Link>
              <div className="netrani-link-card__head">
                <span className="netrani-link-card__icon" aria-hidden="true">
                  <i className="ri-price-tag-3-line"></i>
                </span>
                <h3>
                  <Link href="/blog/scuba-diving-packages-murudeshwar">Netrani Scuba Package Comparison</Link>
                </h3>
                <span className="netrani-link-card__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              <p>Scuba package comparison by inclusions, media, group type, and budget.</p>
            </div>

            <div className="service-link-card netrani-link-card">
              <Link
                className="netrani-link-card__media"
                aria-label="Netrani Island Complete Guide"
                href="/blog/netrani-island-guide"
              >
                <img
                  alt="Netrani Island complete guide"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-link-card__img"
                  style={{ color: "transparent" }}
                  src="/images/blog/snorkelling-fish-netrani.jpg"
                />
              </Link>
              <div className="netrani-link-card__head">
                <span className="netrani-link-card__icon" aria-hidden="true">
                  <i className="ri-map-2-line"></i>
                </span>
                <h3>
                  <Link href="/blog/netrani-island-guide">Netrani Island Complete Guide</Link>
                </h3>
                <span className="netrani-link-card__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              <p>Netrani Island timings, distance, season, and boat-day planning.</p>
            </div>

            <div className="service-link-card netrani-link-card">
              <Link
                className="netrani-link-card__media"
                aria-label="Scuba Operator Guide"
                href="/blog/murudeshwar-scuba-diving-operator"
              >
                <img
                  alt="Where to stay for scuba diving in Murudeshwar"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-link-card__img"
                  style={{ color: "transparent" }}
                  src="/images/gallery/gallery-1.webp"
                />
              </Link>
              <div className="netrani-link-card__head">
                <span className="netrani-link-card__icon" aria-hidden="true">
                  <i className="ri-shield-user-line"></i>
                </span>
                <h3>
                  <Link href="/blog/murudeshwar-scuba-diving-operator">Scuba Operator Guide</Link>
                </h3>
                <span className="netrani-link-card__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              <p>How to choose the right scuba diving operator and verify PADI credentials.</p>
            </div>

            <div className="service-link-card netrani-link-card">
              <Link
                className="netrani-link-card__media"
                aria-label="Best Time to Visit Murudeshwar"
                href="/blog/best-time-scuba-diving-murudeshwar"
              >
                <img
                  alt="Best time to visit Murudeshwar weather guide"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-link-card__img"
                  style={{ color: "transparent" }}
                  src="/images/blog/netrani-coral-reef-fish.jpg"
                />
              </Link>
              <div className="netrani-link-card__head">
                <span className="netrani-link-card__icon" aria-hidden="true">
                  <i className="ri-sun-line"></i>
                </span>
                <h3>
                  <Link href="/blog/best-time-scuba-diving-murudeshwar">Best Time to Visit Murudeshwar</Link>
                </h3>
                <span className="netrani-link-card__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              <p>Month-wise planning patterns with daily weather and sea checks.</p>
            </div>

            <div className="service-link-card netrani-link-card">
              <Link
                className="netrani-link-card__media"
                aria-label="Murudeshwar Water Sports &amp; Activities"
                href="/blog/water-sports-murudeshwar"
              >
                <img
                  alt="Murudeshwar water sports and activities"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-link-card__img"
                  style={{ color: "transparent" }}
                  src="/images/blog/snorkelling-fish-netrani.jpg"
                />
              </Link>
              <div className="netrani-link-card__head">
                <span className="netrani-link-card__icon" aria-hidden="true">
                  <i className="ri-sailboat-line"></i>
                </span>
                <h3>
                  <Link href="/blog/water-sports-murudeshwar">
                    Murudeshwar Water Sports &amp; Activities
                  </Link>
                </h3>
                <span className="netrani-link-card__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              <p>Other water activities to combine with scuba.</p>
            </div>

            <div className="service-link-card netrani-link-card">
              <Link
                className="netrani-link-card__media"
                aria-label="Scuba Diving Booking Guide"
                href="/blog/scuba-diving-booking-murudeshwar"
              >
                <img
                  alt="Murudeshwar scuba diving booking guide"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-link-card__img"
                  style={{ color: "transparent" }}
                  src="/images/group-divers.png"
                />
              </Link>
              <div className="netrani-link-card__head">
                <span className="netrani-link-card__icon" aria-hidden="true">
                  <i className="ri-bookmark-3-line"></i>
                </span>
                <h3>
                  <Link href="/blog/scuba-diving-booking-murudeshwar">Scuba Diving Booking Guide</Link>
                </h3>
                <span className="netrani-link-card__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              <p>Simple booking steps, slots, online confirmation, and payment tips.</p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="service-cta" id="book">
        <div className="service-container">
          <div className="service-cta__card netrani-cta">
            <h2>Ready to dive?</h2>
            <p>
              Check the latest scuba price, slot availability, and inclusions before you travel. Ask who will operate
              the dive and receive payment. Pay at the dive centre on the day{" "}
              <strong>only when that is stated in your written confirmation</strong>.
            </p>
            <div className="service-cta__actions">
              <a
                href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d--red btn-3d--lg"
              >
                <i className="ri-whatsapp-line" aria-hidden="true"></i> Check Price &amp; Slots
              </a>
              <a href="tel:+917829975777" className="btn-3d btn-3d--lg netrani-btn-blue">
                <i className="ri-phone-line" aria-hidden="true"></i> Call: +91 78299 75777
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
