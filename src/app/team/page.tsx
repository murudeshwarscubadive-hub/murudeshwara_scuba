import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet the Team: PADI Certified Instructors & Guides",
  description:
    "Meet the experienced PADI certified scuba instructors, divemasters, and boat captains at Murudeshwar Scuba Dive.",
  keywords: [
    "padi instructors murudeshwar",
    "scuba diving team murudeshwara",
    "certified divemasters netrani island",
    "murudeshwar scuba guides",
    "safe scuba diving in murudeshwar",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/team",
  },
  openGraph: {
    title: "Meet the Team: PADI Certified Instructors & Guides",
    description:
      "Meet the experienced PADI certified scuba instructors, divemasters, and boat captains at Murudeshwar Scuba Dive.",
    url: "https://www.murudeshwarscubadive.in/team",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/images/gallery/gallery-1.webp",
        width: 1200,
        height: 630,
        alt: "PADI Certified Instructors and Guides at Murudeshwar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PADI Certified Instructors & Guides Murudeshwar",
    description:
      "Meet the experienced PADI certified scuba instructors, divemasters, and boat captains at Murudeshwar Scuba Dive.",
    images: ["/images/gallery/gallery-1.webp"],
  },
};

export default function Team() {
  const members = [
    {
      name: "Captain Raghu",
      role: "Lead Boat Captain",
      desc: "Raghu has over 15 years of experience navigating the waters between Murudeshwar beach and Netrani Island. He handles our custom speedboats with absolute precision.",
      image: "/images/gallery/gallery-7.jpg",
    },
    {
      name: "Vikram Shenoy",
      role: "PADI Master Scuba Diver Trainer",
      desc: "Vikram has logged over 3,000 dives and specializes in teaching deep specialties and emergency response. He ensures that our training standard remains top class.",
      image: "/images/gallery/gallery-8.jpg",
    },
    {
      name: "Pooja Hegde",
      role: "PADI Scuba Instructor",
      desc: "Pooja has been guiding first-time and beginner divers at Netrani for over 5 seasons. Her calm briefing style makes nervous first-timers feel completely at ease.",
      image: "/images/gallery/gallery-9.jpg",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.murudeshwarscubadive.in/team/#aboutpage",
      "url": "https://www.murudeshwarscubadive.in/team",
      "name": "Meet the Team: PADI Certified Instructors & Guides",
      "description": "Meet the experienced PADI certified scuba instructors, divemasters, and boat captains at Murudeshwar Scuba Dive.",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": members.length,
        "itemListElement": members.map((m, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "Person",
            "name": m.name,
            "jobTitle": m.role,
            "description": m.desc,
            "image": `https://www.murudeshwarscubadive.in${m.image}`
          }
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
          "name": "Meet the Team",
          "item": "https://www.murudeshwarscubadive.in/team"
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
      <section className="pt-24 pb-16 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-2 text-[#00D4FF] font-bold text-xs uppercase tracking-widest font-display">
            Our Crew
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            Meet Our Team
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            The certified PADI instructors, divemasters, and crew members making
            every dive safe and memorable.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-[#00D4FF]/30 hover:shadow-[0_20px_45px_rgba(0,212,255,0.08)] hover:-translate-y-1.5 transition-all duration-500 shadow-2xl"
            >
              <div className="h-64 relative overflow-hidden">
                <Image src={m.image} alt={`${m.name} - ${m.role} at Murudeshwar Scuba Dive`} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00111F] via-transparent to-transparent"></div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-[#00111F]/90">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                    {m.role}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">{m.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-medium">
                    {m.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
