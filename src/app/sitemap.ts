
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: `moroccan.dev/`,
        },
        {
            url: `moroccan.dev/skills`,
        },
        {
            url: `moroccan.dev/services`,
        },
        {
            url: `moroccan.dev/portfolio`,
        },
        {
            url: `moroccan.dev/contact`,
        },
        {
            url: `moroccan.dev/blog`,
        }

    ];
}