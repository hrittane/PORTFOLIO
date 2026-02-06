



import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.moroccan.dev';
    const currentDate = new Date().toISOString();

    return [
        {
            url: `${baseUrl}/`,
            lastModified: currentDate,
        },
        {
            url: `${baseUrl}/skills`,
            lastModified: currentDate,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: currentDate,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
        },
        {
            url: `${baseUrl}/thankyou`,
            lastModified: currentDate,
        }

    ];
}