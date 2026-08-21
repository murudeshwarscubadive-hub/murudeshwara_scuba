import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/data/posts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const pageTitle = post.metaTitle || post.title;
  const pageDescription = post.description;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      ...post.tags.map((t) => `${t.toLowerCase()} murudeshwar`),
      "murudeshwara scuba diving",
      "murudeshwar scuba diving",
      "netrani island scuba diving",
      "scuba diving in murudeshwar",
      "netrani scuba",
      "gandhada gudi netrani",
      "puneeth rajkumar netrani scuba",
      "amoghavarsha netrani",
      "scuba diving in karnataka",
    ],
    alternates: {
      canonical: `https://www.murudeshwarscubadive.in/blog/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://www.murudeshwarscubadive.in/blog/${slug}`,
      siteName: "Murudeshwar Scuba Dive",
      images: [
        {
          url: post.coverImage || "/images/netrani-scuba-cover.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [post.coverImage || "/images/netrani-scuba-cover.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const isGandhadaGudi = slug === "gandhada-gudi-netrani-scuba-diving-puneeth-rajkumar";

  // Helper to parse inline markdown (bold, italic, links)
  const parseInlineMarkdown = (text: string) => {
    // Match markdown links [label](url), bold **text**, and italic *text*
    const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*)/g;
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
        const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (match) {
          const [, label, url] = match;
          const isExternal = url.startsWith("http");
          return (
            <Link
              key={idx}
              href={url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-[#00D4FF] hover:text-white underline underline-offset-4 decoration-[#00D4FF]/40 hover:decoration-white font-semibold transition-colors"
            >
              {label}
            </Link>
          );
        }
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={idx} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
        return (
          <em key={idx} className="italic text-cyan-200/90 font-serif">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  const renderMarkdown = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];

    let currentList: { text: string; idx: number }[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-6 space-y-3">
            {currentList.map((item, lidx) => (
              <li key={lidx} className="flex items-start gap-3 text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#00D4FF] shrink-0 shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
                <span className="flex-1">{parseInlineMarkdown(item.text)}</span>
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((rawLine, idx) => {
      const trimmed = rawLine.trim();

      // Heading 1 (ignored inside body if single H1 is already in Hero)
      if (trimmed.startsWith("# ")) {
        flushList();
        // Single H1 is handled by the editorial Hero section, render as a secondary kicker or skip
        return;
      }

      // Heading 2
      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <div key={idx} className="pt-8 pb-3 mt-6 border-b border-white/10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight font-display flex items-center gap-3">
              <span className="w-2.5 h-6 bg-[#00D4FF] rounded-full inline-block shadow-[0_0_12px_rgba(0,212,255,0.6)]"></span>
              {trimmed.slice(3)}
            </h2>
          </div>
        );
        return;
      }

      // Heading 3
      if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3
            key={idx}
            className="text-xl md:text-2xl font-bold text-[#00D4FF] mt-8 mb-3 font-display tracking-wide uppercase"
          >
            {trimmed.slice(4)}
          </h3>
        );
        return;
      }

      // Unordered list item
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        currentList.push({ text: trimmed.slice(2), idx });
        return;
      }

      // Flush any list when encountering non-list items
      flushList();

      // Horizontal rule
      if (trimmed === "---") {
        elements.push(
          <div key={idx} className="my-10 flex items-center justify-center gap-3">
            <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-white/15"></div>
            <div className="w-2 h-2 rounded-full bg-[#00D4FF]/40"></div>
            <div className="h-[1px] w-1/3 bg-gradient-to-l from-transparent to-white/15"></div>
          </div>
        );
        return;
      }

      // Empty line
      if (trimmed === "") {
        elements.push(<div key={idx} className="h-4" />);
        return;
      }

      // Blockquote / Pull-Quote
      if (trimmed.startsWith("> ")) {
        const quoteText = trimmed.slice(2).replace(/^"/, "").replace(/"$/, "");
        elements.push(
          <div
            key={idx}
            className="my-10 relative overflow-hidden rounded-3xl border border-[#00D4FF]/30 bg-gradient-to-br from-[#002B5B]/40 via-[#00111F]/80 to-[#00111F] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,212,255,0.08)] backdrop-blur-md"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.8)]"></div>
            <div className="text-4xl text-[#00D4FF]/30 font-serif leading-none mb-2">“</div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide font-display italic leading-snug">
              {quoteText}
            </blockquote>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#00D4FF] font-semibold">
              — Gandhada Gudi (2022) &amp; Netrani Island
            </p>
          </div>
        );
        return;
      }

      // Callout box with 👉
      if (trimmed.startsWith("👉")) {
        elements.push(
          <div
            key={idx}
            className="my-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#002B5B]/60 to-[#00111F] border border-[#00D4FF]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00D4FF] font-display">
                Featured Experience
              </span>
              <p className="text-white font-bold text-lg md:text-xl font-display">
                Experience Netrani Scuba Diving from Murudeshwar
              </p>
              <p className="text-gray-300 text-xs md:text-sm font-medium">
                PADI certified instructors, 1:1 guidance, boat transport &amp; free underwater HD photos/videos.
              </p>
            </div>
            <Link
              href="https://www.murudeshwarscubadive.in/?utm_source=chatgpt.com"
              className="inline-flex items-center justify-center gap-2 bg-[#00D4FF] text-black font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.4)] whitespace-nowrap font-display"
            >
              Explore Packages →
            </Link>
          </div>
        );
        return;
      }

      // Standard Paragraph
      elements.push(
        <p
          key={idx}
          className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg font-normal"
        >
          {parseInlineMarkdown(trimmed)}
        </p>
      );
    });

    flushList();
    return elements;
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `https://www.murudeshwarscubadive.in/blog/${slug}/#article`,
      "url": `https://www.murudeshwarscubadive.in/blog/${slug}`,
      "headline": post.title,
      "description": post.description,
      "datePublished": post.date,
      "image": `https://www.murudeshwarscubadive.in${post.coverImage || "/images/netrani-scuba-cover.png"}`,
      "author": {
        "@type": "Organization",
        "name": "Murudeshwar Scuba Dive",
        "url": "https://www.murudeshwarscubadive.in",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Murudeshwar Scuba Dive",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.murudeshwarscubadive.in/favicon-32x32.png",
        },
      },
      "mainEntityOfPage": `https://www.murudeshwarscubadive.in/blog/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          "name": "Blog",
          "item": "https://www.murudeshwarscubadive.in/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://www.murudeshwarscubadive.in/blog/${slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Murudeshwar Scuba Dive",
      "image": "https://www.murudeshwarscubadive.in/images/netrani-scuba-cover.png",
      "telephone": "+917829975777",
      "email": "murudeshwar.scuba.dive@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Temple Main Road, Murudeshwar Beach",
        "addressLocality": "Murudeshwar",
        "addressRegion": "Karnataka",
        "postalCode": "581350",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 14.0945,
        "longitude": 74.4844,
      },
      "url": "https://www.murudeshwarscubadive.in",
      "priceRange": "₹1,999 - ₹3,500",
    },
  ];

  return (
    <main className="min-h-screen bg-[#00111F] text-white selection:bg-[#00D4FF] selection:text-black font-sans overflow-x-hidden pt-20 md:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Cinematic Hero Section */}
      <section className="relative w-full min-h-[520px] md:min-h-[620px] flex items-end pb-16 pt-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.coverImage || "/images/netrani-scuba-cover.png"}
            alt={`${post.title} - Netrani Island Scuba Diving Karnataka`}
            fill
            priority
            className="object-cover object-center transform scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00111F] via-[#00111F]/80 to-black/60" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#00111F]/40 to-[#00111F]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-[1200px]">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 font-display">
            <Link href="/" className="hover:text-[#00D4FF] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#00D4FF] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#00D4FF] truncate max-w-[240px] md:max-w-none">
              {post.category}
            </span>
          </nav>

          {/* Category Tag & Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-black bg-[#00D4FF] px-3.5 py-1 rounded-full font-display shadow-[0_0_15px_rgba(0,212,255,0.4)]">
              {post.category}
            </span>
            <span className="text-xs text-gray-300 font-semibold tracking-wider uppercase font-display bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {post.readTime}
            </span>
            <span className="text-xs text-gray-400 font-medium">
              {post.date}
            </span>
          </div>

          {/* Editorial H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] font-display uppercase tracking-tight max-w-4xl drop-shadow-2xl">
            {post.title}
          </h1>

          {/* Editorial Subtitle */}
          {post.subtitle && (
            <p className="mt-4 text-base md:text-xl text-cyan-100/90 font-medium max-w-3xl leading-relaxed">
              {post.subtitle}
            </p>
          )}

          {/* Author / Editorial Credit */}
          <div className="mt-6 pt-6 border-t border-white/15 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#002B5B] border border-[#00D4FF]/50 flex items-center justify-center text-[#00D4FF] font-bold font-display text-sm">
              MSD
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider font-display">
                Murudeshwar Scuba Dive Editorial
              </p>
              <p className="text-[11px] text-gray-400">
                PADI Certified Ocean Guides &amp; Explorers • Netrani Island, Karnataka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-16 relative">
        {/* Atmospheric Gradients */}
        <div className="absolute top-10 left-1/4 w-[700px] h-[500px] bg-blue-900/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[400px] bg-[#00D4FF]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Main Article Column */}
            <article className="lg:col-span-2 space-y-8">

              {/* Special Story Connection Box for Gandhada Gudi */}
              {isGandhadaGudi && (
                <div className="rounded-3xl border border-[#00D4FF]/25 bg-gradient-to-b from-[#002B5B]/30 to-[#00111F]/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D4FF] font-display">
                      The Editorial Connection
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black uppercase text-white font-display">
                    Where Cinema, Wildlife &amp; The Arabian Sea Intersect
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <p className="text-[10px] text-[#00D4FF] font-bold uppercase font-display">Icon</p>
                      <p className="text-sm font-bold text-white mt-1">Dr. Puneeth Rajkumar</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">Appu’s authentic curiosity &amp; love for nature</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <p className="text-[10px] text-[#00D4FF] font-bold uppercase font-display">Filmmaker</p>
                      <p className="text-sm font-bold text-white mt-1">Amoghavarsha JS</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">National Award winning conservation storyteller</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 col-span-2 sm:col-span-1">
                      <p className="text-[10px] text-[#00D4FF] font-bold uppercase font-display">Destination</p>
                      <p className="text-sm font-bold text-white mt-1">Netrani Island</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">Karnataka’s premier coral reef diving paradise</p>
                    </div>
                  </div>

                  {/* Puneeth Rajkumar Authentic Press & Photo Showcase */}
                  <div className="mt-6 rounded-2xl overflow-hidden border border-[#00D4FF]/30 bg-black/50 relative shadow-2xl">
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-[#002B5B] to-[#00111F] border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                          Archival Press Archive • Prajavani
                        </span>
                      </div>
                      <span className="text-[9px] uppercase tracking-widest text-gray-400 font-display">
                        Netrani Island, Murudeshwar
                      </span>
                    </div>

                    <div className="relative w-full bg-white p-2 sm:p-4">
                      <Image
                        src="/images/puneeth-rajkumar-netrani.png"
                        alt="Dr. Puneeth Rajkumar Scuba Diving at Netrani Island Murudeshwar Prajavani Newspaper Report"
                        width={1080}
                        height={720}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                        priority
                      />
                    </div>

                    <div className="p-5 sm:p-6 bg-[#00111F] border-t border-white/10 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider font-display">
                          &ldquo;ಸ್ಕೂಬಾ ಡೈವಿಂಗ್ ಸಾಹಸ — ಮುರ್ಡೇಶ್ವರ&rdquo;
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                        &ldquo;After scuba diving here, he expressed that diving at Netrani Island in Karnataka brought him even greater happiness than diving in foreign destinations abroad.&rdquo;
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">
                        Dr. Puneeth Rajkumar during his scuba diving exploration at Netrani Island for <em>Gandhada Gudi</em>, capturing the unseen underwater beauty of Karnataka.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Rendered Article Body */}
              <div className="prose prose-invert max-w-none text-gray-300">
                {renderMarkdown(post.content)}
              </div>

              {/* Mid-Article Editorial Callout */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#002B5B]/50 via-[#00111F] to-[#002B5B]/30 p-8 md:p-10 my-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D4FF]/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D4FF] font-display">
                    Live the Legacy
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white font-display">
                    Inspired by Gandhada Gudi? Experience Netrani For Yourself.
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Step off the shore of Murudeshwar into the turquoise waters of Netrani Island. Our certified PADI divemasters provide dedicated 1:1 supervision for beginners, non-swimmers, and experienced adventurers alike.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4">
                    <Link
                      href="https://www.murudeshwarscubadive.in/?utm_source=chatgpt.com"
                      className="inline-flex items-center gap-2 bg-[#00D4FF] text-black font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 shadow-[0_0_25px_rgba(0,212,255,0.4)] font-display"
                    >
                      Explore Netrani Scuba Diving
                    </Link>
                    <a
                      href="tel:+917829975777"
                      className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 font-display"
                    >
                      Call +91 78299 75777
                    </a>
                  </div>
                </div>
              </div>

              {/* Internal Quick Links to Explore Karnataka Scuba */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] font-display mb-4">
                  Explore More Murudeshwar Resources
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/netrani-scuba-diving"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all font-medium"
                  >
                    Netrani Island Package (₹3,500)
                  </Link>
                  <Link
                    href="/intro-scuba-diving"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all font-medium"
                  >
                    Intro Try Dive for Beginners (₹1,999)
                  </Link>
                  <Link
                    href="/how-to-reach-murudeshwar"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all font-medium"
                  >
                    How to Reach Murudeshwar
                  </Link>
                  <Link
                    href="/gallery"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all font-medium"
                  >
                    Photos &amp; Videos Gallery
                  </Link>
                  <Link
                    href="/team"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all font-medium"
                  >
                    Meet Our PADI Dive Team
                  </Link>
                </div>
              </div>
            </article>

            {/* Right Sidebar Booking Pane */}
            <aside className="space-y-6">
              <div className="glass-panel rounded-3xl p-6 md:p-8 space-y-6 sticky top-28 shadow-2xl bg-[#00111F]/90 border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/10 rounded-full blur-[50px] pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-3 font-display">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Season Active: Oct – May
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-display">
                    Netrani Island Scuba Packages
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-medium mt-1">
                    Book direct with Murudeshwar’s premier PADI dive team. 100% transparent pricing.
                  </p>
                </div>

                <hr className="border-white/10" />

                <div className="space-y-3.5 font-display text-xs uppercase tracking-wider">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div>
                      <p className="text-white font-bold">Intro Try Dive</p>
                      <p className="text-[10px] text-gray-400 font-sans normal-case">Non-swimmers &amp; beginners</p>
                    </div>
                    <span className="text-[#00D4FF] font-black text-sm">₹1,999</span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div>
                      <p className="text-white font-bold">Full Netrani Dive</p>
                      <p className="text-[10px] text-gray-400 font-sans normal-case">Extended reef bottom time</p>
                    </div>
                    <span className="text-[#00D4FF] font-black text-sm">₹3,500</span>
                  </div>

                  <div className="flex justify-between items-center px-3 py-2 text-emerald-400 text-[11px] font-semibold">
                    <span>HD Photos &amp; Video Pack</span>
                    <span className="font-bold">INCLUDED FREE</span>
                  </div>
                </div>

                <hr className="border-white/10" />

                <div className="space-y-3 font-display text-xs font-bold uppercase tracking-widest">
                  <a
                    href="tel:+917829975777"
                    className="w-full flex items-center justify-center gap-2 bg-[#00D4FF] text-black py-4 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.25)] text-center cursor-pointer"
                  >
                    Call Booking Desk
                  </a>
                  <a
                    href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20book%20scuba%20diving%20at%20Netrani%20Island%20in%20Murudeshwar.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white py-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 text-center"
                  >
                    WhatsApp Desk
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-1">
                  <p className="text-[11px] text-gray-300 font-semibold">
                    Reserve with ₹500 Advance
                  </p>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                    Balance payable upon morning reporting. Free cancellation up to 48 hrs prior.
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-[#00111F] to-[#001c33] relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D4FF] font-display">
                Curated Travel Journal
              </p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-white font-display mt-2">
                Discover More Netrani Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors font-display inline-flex items-center gap-1.5"
            >
              View All 20+ Guides →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Discover Netrani Island */}
            <Link
              href="/blog/netrani-island-guide"
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#00D4FF]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Island Guide
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors mt-3 font-display leading-snug">
                  Discover Netrani Island: Distance, Marine Life &amp; Travel
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-3 line-clamp-3 font-medium">
                  Everything you need to know about Karnataka’s heart-shaped Pigeon Island, situated 19 km off Murudeshwar beach.
                </p>
              </div>
              <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider font-display mt-6 inline-flex items-center gap-1">
                Read guide <span>→</span>
              </span>
            </Link>

            {/* Card 2: Complete Guide to Netrani Scuba Diving */}
            <Link
              href="/blog/murudeshwar-scuba-diving-price-cost"
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#00D4FF]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Pricing &amp; Cost
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors mt-3 font-display leading-snug">
                  Complete Guide to Netrani Scuba Diving Prices &amp; Packages (2026)
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-3 line-clamp-3 font-medium">
                  Compare ₹1,999 Intro and ₹3,500 Netrani packages, equipment inclusions, and how to get group booking discounts.
                </p>
              </div>
              <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider font-display mt-6 inline-flex items-center gap-1">
                Read guide <span>→</span>
              </span>
            </Link>

            {/* Card 3: Best Time for Scuba Diving */}
            <Link
              href="/blog/best-time-scuba-diving-murudeshwar"
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#00D4FF]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#00D4FF] font-display">
                  Best Season
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors mt-3 font-display leading-snug">
                  Best Time for Scuba Diving in Murudeshwar &amp; Netrani
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-3 line-clamp-3 font-medium">
                  Month-by-month ocean visibility breakdown (15-30m), weather conditions, and monsoon safety schedule.
                </p>
              </div>
              <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider font-display mt-6 inline-flex items-center gap-1">
                Read guide <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Booking Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#001c33] to-[#00111F] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/group-divers.png"
            alt="Netrani Scuba Adventure Team"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00111F] via-[#00111F]/90 to-[#001c33]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl text-center space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D4FF] font-display bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
            Start Your Ocean Journey
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tight leading-tight">
            Your Netrani Adventure Starts Here.
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Come to Murudeshwar. Meet the Arabian Sea. Dive into Netrani and discover the Karnataka beneath the waves.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://www.murudeshwarscubadive.in/?utm_source=chatgpt.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00D4FF] text-black font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-full hover:bg-[#80e9ff] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,212,255,0.5)] font-display"
            >
              Book Your Scuba Diving Experience
            </Link>
            <a
              href="tel:+917829975777"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 font-display"
            >
              Direct Desk: +91 78299 75777
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

