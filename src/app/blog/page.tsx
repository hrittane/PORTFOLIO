import Posts from "@/components/posts";
import { getPosts } from "@/lib/requests";
import { PostMetadata } from "@/lib/types";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import { getBlogName } from "@/lib/requests";
import NewsletterCard from "@/components/newsletter-card";


export async function generateMetadata() {
    const data = await getBlogName();

    return {
        title: data.displayTitle || data.title,
    };
}

async function page() {

    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        getNextPageParam: (
            lastPage: {
                node: PostMetadata;
                cursor: string;
            }[]
        ) =>
            lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
        initialPageParam: "",
    });

    return (
        <div className="flex items-center justify-center h-screen p-10">
            <main className="max-w-7xl w-full px-3 xl:p-0 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <Posts />
                        <NewsletterCard />
                    </HydrationBoundary>
                </div>
            </main>
        </div>
    )
}

export default page