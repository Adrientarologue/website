import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function buildMetadata({
    title,
    description,
    path = "/",
}: {
    title: string;
    description: string;
    path?: string;
}): Metadata {
    const url = new URL(path, siteConfig.url).toString();

    return {
        title,
        description,
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: "fr_FR",
            type: "website",
            images: [
                {
                    url: "/og-image.svg",
                    width: 1200,
                    height: 630,
                    alt: siteConfig.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-image.svg"],
        },
    };
}
