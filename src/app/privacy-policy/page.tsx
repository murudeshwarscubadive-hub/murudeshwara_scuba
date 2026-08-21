import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy: Murudeshwar Scuba Dive",
  description:
    "Learn how we collect, store, and protect your information when booking scuba diving packages.",
  keywords: [
    "murudeshwar scuba dive privacy policy",
    "netrani scuba booking privacy",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy: Murudeshwar Scuba Dive",
    description:
      "Learn how we collect, store, and protect your information when booking scuba diving packages.",
    url: "https://www.murudeshwarscubadive.in/privacy-policy",
    siteName: "Murudeshwar Scuba Dive",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Murudeshwar Scuba Dive",
    description:
      "Learn how we collect, store, and protect your information when booking scuba diving packages.",
  },
};

export default function PrivacyPolicy() {
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
          "name": "Privacy Policy",
          "item": "https://www.murudeshwarscubadive.in/privacy-policy"
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
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            How we manage and protect the contact details you share with us.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-panel border border-white/10 rounded-3xl p-8 md:p-12 space-y-10 font-medium text-gray-300 leading-relaxed text-sm md:text-base shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">1. Information Collection</h2>
            <p>
              We collect minimal contact details (such as your Name, Phone number, and Email address) only when you submit inquiry forms, book slots, or call our coordinator desk.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">2. Use of Information</h2>
            <p>
              We use your contact information solely to coordinate boat seats, send reporting locations, confirm advance transactions, and deliver the HD underwater photos/videos of your dive.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">3. Data Protection</h2>
            <p>
              Your contact details are stored securely. We do not sell, rent, share, or lease your personal information to third-party marketing services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase font-display tracking-wider border-b border-white/5 pb-2">4. Photo and Video Consent</h2>
            <p>
              During your dive, our instructors capture photos and videos for your personal records. By booking, you consent to our team taking underwater media. If you prefer your media not to be utilized for general promotional gallery purposes on our site, please notify our coordinator desk in advance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
