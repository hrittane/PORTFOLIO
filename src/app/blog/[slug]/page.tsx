import Post from "@/components/post";
import { getPostBySlug } from "@/lib/requests";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";

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
            description: data.seo.description,
            openGraph: {
                images: [{
                    url: data.coverImage.url,
                    alt: data.title,
                }]
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
    await queryClient.prefetchQuery({
        queryKey: ["post", slug],
        queryFn: () => getPostBySlug(slug),
    });
    return (
        <div className="max-w-6xl w-full px-3 xl:p-0 mx-auto my-20">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Post slug={slug} />
            </HydrationBoundary>
        </div>
    );
}