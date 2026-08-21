import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Murudeshwar Scuba Dive: Direct Phone Number & Booking Desk",
  description:
    "Get the direct Murudeshwar scuba diving contact number, WhatsApp desk, map directions, and reporting location details for Netrani Island bookings.",
  keywords: [
    "murudeshwar scuba diving contact number",
    "murudeshwara scuba booking office",
    "netrani scuba diving phone number",
    "scuba diving murudeshwar direct contact",
    "murudeshwara scuba whatsapp number",
    "scuba dive reporting point murudeshwar",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/contact",
  },
  openGraph: {
    title: "Contact Murudeshwar Scuba Dive: Direct Phone Number & Booking Desk",
    description:
      "Get the direct Murudeshwar scuba diving contact number, WhatsApp desk, map directions, and reporting location details for Netrani Island bookings.",
    url: "https://www.murudeshwarscubadive.in/contact",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Contact Murudeshwar Scuba Dive desk and support",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Murudeshwar Scuba Diving Direct Desk",
    description:
      "Get the direct Murudeshwar scuba diving contact number, WhatsApp desk, directions, and reporting location.",
    images: ["/hero.webp"],
  },
};

export default function Contact() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://www.murudeshwarscubadive.in/contact/#contactpage",
      "url": "https://www.murudeshwarscubadive.in/contact",
      "name": "Contact Murudeshwar Scuba Dive",
      "description": "Direct Murudeshwar scuba diving contact number, WhatsApp desk, map directions, and reporting location details.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917829975777",
        "contactType": "customer service",
        "email": "murudeshwar.scuba.dive@gmail.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada", "Hindi"]
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
          "name": "Contact",
          "item": "https://www.murudeshwarscubadive.in/contact"
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
      {/* Contact Header */}
      <section className="pt-24 pb-16 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-2 text-[#00D4FF] font-bold text-xs uppercase tracking-widest font-display">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Ready to dive? Get in touch for instant booking confirmation. We
            respond within 5 minutes during business hours!
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Card 1: Call */}
          <a
            href="tel:+917829975777"
            className="group bg-[#00D4FF] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] shadow-[0_15px_40px_rgba(0,212,255,0.15)] hover:shadow-[0_20px_50px_rgba(0,212,255,0.25)]"
          >
            <div className="w-20 h-20 bg-black/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
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
                className="w-8 h-8 text-black"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-black mb-2 uppercase tracking-widest font-display">Call Us</h2>
            <p className="text-black text-2xl font-black mb-1 font-display">
              +91 78299 75777
            </p>
            <p className="text-black/75 text-sm font-semibold uppercase tracking-wider">Instant slot confirmation</p>
            <span className="mt-6 bg-black text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-widest transition-colors font-display shadow-lg">
              Call Now →
            </span>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20book%20scuba%20diving%20in%20Murudeshwar.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-panel hover:border-emerald-500/30 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-emerald-500/5"
          >
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
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
                className="w-8 h-8 text-emerald-400"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-widest font-display">WhatsApp</h2>
            <p className="text-white text-2xl font-black mb-1 font-display">
              +91 74063 29777
            </p>
            <p className="text-gray-400 text-sm font-medium">Send photos &amp; questions</p>
            <span className="mt-6 bg-white text-emerald-600 font-bold py-3 px-8 rounded-full text-xs uppercase tracking-widest transition-colors font-display shadow-lg">
              Message Now →
            </span>
          </a>

          {/* Card 3: Email */}
          <a
            href="mailto:murudeshwar.scuba.dive@gmail.com"
            className="group glass-panel hover:border-blue-500/30 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-blue-500/5"
          >
            <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
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
                className="w-8 h-8 text-blue-400"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-widest font-display">Email</h2>
            <p className="text-white text-2xl font-black mb-1 font-display">
              murudeshwar.scuba.dive@gmail.com
            </p>
            <p className="text-gray-400 text-sm font-medium">For detailed inquiries</p>
            <span className="mt-6 border border-white/20 text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-widest transition-colors font-display">
              Send Email →
            </span>
          </a>

          {/* Card 4: Location */}
          <div className="glass-panel border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
            <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mb-6">
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
                className="w-8 h-8 text-red-400"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-widest font-display">Location</h2>
            <p className="text-gray-300 font-semibold text-lg">Temple Main Road</p>
            <p className="text-gray-300 font-semibold text-lg">Murudeshwar, Karnataka 581350</p>
            <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider font-bold">Near Murudeshwar Temple</p>
            <Link
              href="/how-to-reach-murudeshwar"
              className="mt-6 text-[#00D4FF] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors font-display"
            >
              Get Directions →
            </Link>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-panel border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="flex items-center justify-center gap-3 mb-8">
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
              className="w-6 h-6 text-[#00D4FF]"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight font-display">Business Hours</h2>
          </div>
          <div className="grid grid-cols-2 gap-y-8 gap-x-6 text-center">
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold mb-1">
                Office Hours
              </p>
              <p className="text-white font-bold font-display text-lg">7:00 AM - 8:00 PM</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold mb-1">
                Dive Times
              </p>
              <p className="text-white font-bold font-display text-lg">8:00 AM - 3:00 PM</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold mb-1">
                Days Open
              </p>
              <p className="text-white font-bold font-display text-lg">All 7 Days</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold mb-1">
                Season
              </p>
              <p className="text-white font-bold font-display text-lg">October - May</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs font-semibold uppercase tracking-wider mt-10">
            Diving closed during monsoon (June - September)
          </p>
        </div>
      </section>

      {/* Quick Booking Links */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight font-display">
            Quick Booking Links
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto font-display text-xs font-bold uppercase tracking-widest">
            <Link
              href="/netrani-scuba-diving"
              className="flex-1 bg-[#00D4FF] text-black py-4 px-6 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,212,255,0.2)]"
            >
              Full Dive ₹3,500
            </Link>
            <Link
              href="/intro-scuba-diving"
              className="flex-1 bg-white/5 border border-white/10 text-white py-4 px-6 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
            >
              Intro Dive ₹1,999
            </Link>
            <Link
              href="/bulk-scuba-booking"
              className="flex-1 bg-white/5 border border-white/10 text-white py-4 px-6 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
            >
              Group Booking
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest font-display pt-2">
            <Link
              href="/blog/scuba-diving-booking-murudeshwar"
              className="text-[#00D4FF] hover:text-white transition-colors"
            >
              Booking Guide →
            </Link>
            <Link
              href="/how-to-reach-murudeshwar"
              className="text-[#00D4FF] hover:text-white transition-colors"
            >
              Directions &amp; Map →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
