import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.murudeshwarscubadive.in";

  // Define static routes with priority and change frequencies
  const staticRoutes: Array<{
    route: string;
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  }> = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/netrani-scuba-diving", priority: 0.95, changeFrequency: "weekly" },
    { route: "/bulk-scuba-booking", priority: 0.85, changeFrequency: "weekly" },
    { route: "/contact", priority: 0.9, changeFrequency: "weekly" },
    { route: "/how-to-reach-murudeshwar", priority: 0.85, changeFrequency: "monthly" },
    { route: "/gallery", priority: 0.8, changeFrequency: "monthly" },
    { route: "/team", priority: 0.8, changeFrequency: "monthly" },
    { route: "/blog", priority: 0.85, changeFrequency: "daily" },
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticSitemaps = staticRoutes.map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date("2026-11-03T08:00:00+05:30"),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // Dynamic blog routes from full list of posts with real lastmod
  const allPosts = getAllPosts();
  const blogSitemaps = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.isoDate ? new Date(post.isoDate) : new Date("2026-11-03T08:00:00+05:30"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticSitemaps, ...blogSitemaps];
}
