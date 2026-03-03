import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        "",
        "/services",
        "/a-propos",
        "/temoignages",
        "/contact",
        "/mentions-legales",
    ];

    const now = new Date();

    return pages.map((page) => ({
        url: `${siteConfig.url}${page}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
    }));
}
