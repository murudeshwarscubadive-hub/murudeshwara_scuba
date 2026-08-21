import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Murudeshwar Scuba Guides (2026): Price, Timings, Age Limit & Booking",
  description:
    "Price, timings, booking, age limit, travel planning, and safety guides for Murudeshwar scuba diving.",
  keywords: [
    "murudeshwar scuba guide",
    "murudeshwara scuba diving blog",
    "netrani scuba diving tips",
    "murudeshwar scuba price guide",
    "netrani island diving guide",
    "scuba diving age limit murudeshwar",
    "scuba diving timings murudeshwara",
    "best time for scuba diving in murudeshwar",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/blog",
  },
  openGraph: {
    title: "Murudeshwar Scuba Guides (2026): Price, Timings, Age Limit & Booking",
    description:
      "Price, timings, booking, age limit, travel planning, and safety guides for Murudeshwar scuba diving.",
    url: "https://www.murudeshwarscubadive.in/blog",
    siteName: "Murudeshwar Scuba Dive",
    images: [
      {
        url: "/images/netrani-scuba-cover.png",
        width: 1200,
        height: 630,
        alt: "Murudeshwar Scuba Guides and Journal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murudeshwar Scuba Guides (2026)",
    description:
      "Price, timings, booking, age limit, travel planning, and safety guides for Murudeshwar scuba diving.",
    images: ["/images/netrani-scuba-cover.png"],
  },
};

export default function BlogListing() {
  const posts = getAllPosts();

  // Featured Priority Guides
  const featuredSlugs = [
    "murudeshwar-scuba-diving-first-timer-guide",
    "scuba-diving-murudeshwar-netrani-island-guide",
    "gandhada-gudi-netrani-scuba-diving-puneeth-rajkumar",
    "best-time-scuba-diving-murudeshwar",
    "scuba-diving-timings",
    "how-to-reach-murudeshwar",
    "scuba-diving-booking-murudeshwar",
    "scuba-diving-packages-murudeshwar",
  ];

  const priorityGuides = posts.filter((p) => featuredSlugs.includes(p.slug));
  const generalPosts = posts.filter((p) => !featuredSlugs.includes(p.slug));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://www.murudeshwarscubadive.in/blog/#blog",
      "url": "https://www.murudeshwarscubadive.in/blog",
      "name": "Murudeshwar Scuba Guides & Journal",
      "description": "Your ultimate guide to diving in Murudeshwar. Discover Netrani Island, plan your travel, and see safety guidelines.",
      "blogPost": posts.map((post) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "url": `https://www.murudeshwarscubadive.in/blog/${post.slug}`,
        "datePublished": post.date,
        "image": `https://www.murudeshwarscubadive.in${post.coverImage || '/images/netrani-diver.png'}`
      }))
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
          "name": "Blog",
          "item": "https://www.murudeshwarscubadive.in/blog"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#00111F] text-white selection:bg-[#00D4FF] selection:text-black font-sans overflow-x-hidden pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-[#00D4FF]/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 mb-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase font-display">
                Official Dive Journal
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight leading-tight uppercase">
              Explore The{" "}
              <span className="text-[#00D4FF] italic relative inline-block">
                Deep Blue
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-[#00D4FF]/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  ></path>
                </svg>
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
              Your ultimate guide to diving in Murudeshwar. Discover Netrani
              Island, plan your underwater adventures, and uncover the secrets
              of the Arabian Sea.
            </p>
          </div>
        </div>

        {/* Priority Guides Section */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-24">
          <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-md">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D4FF] font-display">
                  Priority Guides
                </p>
                <h2 className="mt-3 text-2xl font-black text-white md:text-3xl font-display uppercase">
                  Plan Your Dive Before You Book
                </h2>
              </div>
              <p className="max-w-xl text-sm text-gray-400 leading-relaxed font-medium">
                These planning guides cover the six support questions we see
                most often: seasonality, daily timing, directions, booking
                workflow, package choice, and included photos/videos.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {priorityGuides.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.01] p-6 md:p-8 transition-all duration-300 hover:border-[#00D4FF]/30 hover:bg-white/[0.03] hover:-translate-y-1 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00D4FF] font-display">
                    {post.category}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-[#00D4FF] font-display min-h-[3.5rem] leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-400 line-clamp-3 font-medium">
                    {post.description}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-white transition-transform group-hover:translate-x-1 uppercase tracking-widest font-display text-[#00D4FF]">
                  Read guide <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* General Articles Grid */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="border-t border-white/5 pt-16 mb-12">
            <h2 className="text-3xl font-black text-white font-display uppercase tracking-tight">All Guides &amp; Articles</h2>
            <p className="text-gray-400 text-sm mt-2 font-medium">
              Browse our complete library of local scuba diving guides and tips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col h-full bg-[#00111F] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,212,255,0.08)] hover:border-[#00D4FF]/25 shadow-2xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.coverImage || "/images/netrani-diver.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00111F] via-[#00111F]/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-[9px] font-bold text-white tracking-wider uppercase font-display">
                    {post.readTime}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow relative -mt-8 bg-[#00111F] z-10 rounded-t-3xl border-t border-white/5">
                  <div className="flex gap-2 mb-4">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-black bg-[#00D4FF] px-3 py-0.5 rounded-full font-display">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#00D4FF] transition-colors leading-snug line-clamp-2 font-display">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3 font-medium">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-semibold font-display">
                    <span>{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-bold text-white group-hover:text-[#00D4FF] transition-colors inline-flex items-center gap-1.5"
                    >
                      Read Article <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
