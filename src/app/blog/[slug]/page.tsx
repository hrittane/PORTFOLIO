import Post from "@/components/post";
import { getPostBySlug } from "@/lib/requests";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = await getPostBySlug(slug);
    if (data != null) {
        return {
            title: data.title,
            description: data.seo.description || data.brief,
            alternates: {
                canonical: `https://www.moroccan.dev/blog/${slug}`,
            },
            openGraph: {
                title: data.title,
                description: data.seo.description || data.brief,
                url: `https://www.moroccan.dev/blog/${slug}`,
                type: 'article',
                images: [{
                    url: data.coverImage.url,
                    alt: data.title,
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: data.title,
                description: data.seo.description || data.brief,
                images: [data.coverImage.url],
            }
        };
    } else {
        notFound()
    }
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const queryClient = new QueryClient();
    const data = await queryClient.fetchQuery({
        queryKey: ["post", slug],
        queryFn: () => getPostBySlug(slug),
    });

    if (!data) return notFound();

    const blogPostSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.title,
        "image": data.coverImage.url,
        "author": {
            "@type": "Person",
            "name": data.author.name
        },
        "publisher": {
            "@type": "Organization",
            "name": "Soufiane Hrittane",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.moroccan.dev/favicon.ico"
            }
        },
        "description": data.seo.description || data.brief
    };

    return (
        <div className="max-w-6xl w-full px-3 xl:p-0 mx-auto my-20">
            <JsonLd data={blogPostSchema} />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Post slug={slug} />
            </HydrationBoundary>
        </div>
    );
}