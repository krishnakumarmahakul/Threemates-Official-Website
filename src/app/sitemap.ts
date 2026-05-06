import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://threemates.tech";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPages = [
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/work`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/privacy-policy`,
            lastModified: now,
            changeFrequency: "yearly" as const,
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/refund-terms`,
            lastModified: now,
            changeFrequency: "yearly" as const,
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/dpdp-compliance`,
            lastModified: now,
            changeFrequency: "yearly" as const,
            priority: 0.5,
        },
    ];

    return staticPages;
}
