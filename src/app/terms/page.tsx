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
            Our booking details, cancellation policy, refund process, and weather policies.
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
              To confirm a scuba diving slot at Netrani Island, a booking advance of <strong className="text-white font-semibold">₹500 per person</strong> is required. The balance amount must be settled at the reporting office on the day of the dive before boarding the boat.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">2. Cancellation &amp; Refunds</h2>
            <ul className="space-y-2 list-disc pl-5 text-gray-300 font-medium">
              <li>Cancellations made <strong className="text-white font-semibold">48 hours or more</strong> before the scheduled dive day are eligible for a <strong className="text-white font-semibold">100% refund</strong> of the booking advance.</li>
              <li>Cancellations made within <strong className="text-white font-semibold">48 hours</strong> of the scheduled dive day are non-refundable.</li>
              <li>No-shows on the morning of the scheduled dive will forfeit the booking advance.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">3. Weather-Related Policies</h2>
            <p>
              Netrani Island is in the deep sea. The local coast guard or harbor patrol regulates all boat movements. In case of unexpected storms, rough seas, high winds, or security alerts, we will cancel the trip for guest safety. 
            </p>
            <p>
              In such cases, you will receive a <strong className="text-white font-semibold">100% refund</strong> of your advance payment or can choose to reschedule to any upcoming date.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">4. Medical Guidelines</h2>
            <p>
              Guests must ensure they do not suffer from any conditions that prevent diving (such as uncontrolled high blood pressure, active asthma, pregnancy, or recent surgeries). Instructors reserve the right to deny diving to anyone deemed medically unfit for their own safety.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
