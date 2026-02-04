

import { MetadataRoute } from "next";



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


    return [
        {
            url: `https://www.moroccan.dev/`,
        },
        {
            url: `https://www.moroccan.dev/skills`,
        },
        {
            url: `https://www.moroccan.dev/services`,
        },
        {
            url: `https://www.moroccan.dev/portfolio`,
        },
        {
            url: `https://www.moroccan.dev/contact`,
        },
        {
            url: `https://www.moroccan.dev/blog`,
        }

    ];
}