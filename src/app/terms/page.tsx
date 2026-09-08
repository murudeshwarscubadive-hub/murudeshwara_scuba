import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions: Booking & Cancellations",
  description:
    "Review our booking policy, cancellation terms, refund procedures, and weather-related rescheduling guidelines.",
  keywords: [
    "murudeshwar scuba booking terms",
    "scuba diving cancellation policy murudeshwara",
    "netrani scuba refund policy",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/terms",
  },
  openGraph: {
    title: "Terms and Conditions: Booking & Cancellations",
    description:
      "Review our booking policy, cancellation terms, refund procedures, and weather-related rescheduling guidelines.",
    url: "https://www.murudeshwarscubadive.in/terms",
    siteName: "Murudeshwar Scuba Dive",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions - Murudeshwar Scuba Dive",
    description:
      "Review our booking policy, cancellation terms, refund procedures, and weather-related rescheduling guidelines.",
  },
};

export default function Terms() {
  const jsonLd = [
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
          "name": "Terms and Conditions",
          "item": "https://www.murudeshwarscubadive.in/terms"
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
            Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            Terms &amp; Conditions
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Clear guidelines covering reservation deposits, cancellation timeframes, weather policies, and medical safety requirements.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-panel border border-white/10 rounded-3xl p-8 md:p-12 space-y-10 font-medium text-gray-300 leading-relaxed text-sm md:text-base shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">1. Booking &amp; Slot Blocks</h2>
            <p>
              To confirm and hold a scuba diving reservation at Netrani Island, an advance deposit of <strong className="text-white font-semibold">₹500 per person</strong> is required. The remaining package balance is settled during morning check-in at our Murudeshwar dive desk before boarding the boat.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">2. Cancellation &amp; Refunds</h2>
            <ul className="space-y-2 list-disc pl-5 text-gray-300 font-medium">
              <li>Cancellations made <strong className="text-white font-semibold">48 hours or more</strong> prior to the scheduled dive date receive a <strong className="text-white font-semibold">100% full refund</strong> of the booking advance.</li>
              <li>Cancellations made within <strong className="text-white font-semibold">48 hours</strong> of the scheduled dive date are non-refundable.</li>
              <li>No-shows on the morning of the scheduled excursion forfeit the booking advance deposit.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">3. Weather-Related Policies</h2>
            <p>
              Netrani Island is located in the open Arabian Sea. All boat departures operate strictly subject to coastal maritime clearances and wave conditions. If unexpected weather events, high sea swells, or maritime safety advisories lead to trip cancellation, guest safety is our unconditional priority.
            </p>
            <p>
              Under any weather-related trip cancellation, guests receive a <strong className="text-white font-semibold">100% full refund</strong> of their deposit or may choose a complimentary reschedule to any future date.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">4. Medical Guidelines</h2>
            <p>
              Participants must confirm they do not suffer from medical conditions incompatible with scuba diving (such as severe asthma requiring active inhaler therapy, heart ailments, epilepsy, pregnancy, or recent major surgery). Certified instructors reserve the right to recommend surface snorkeling or deny sub-surface diving to anyone assessed as medically vulnerable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
