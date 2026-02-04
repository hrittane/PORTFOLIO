"use client";

import { getPostBySlug } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import Image from 'next/image';

type Props = {
    slug: string;
};

export default function Post({ slug }: Props) {
    const { data } = useQuery({
        queryKey: ["post", slug],
        queryFn: () => getPostBySlug(slug),
    });

    if (!data) return notFound();

    return (
        <div className=""  >
            <div className="relative w-full h-[400px] lg:h-[600px]">
                <Image
                    src={data?.coverImage.url}
                    alt={data?.title || "Blog post cover image"}
                    fill
                    className="object-cover"
                />
            </div>
            <h1 className="text-4xl lg:text-6xl text-center leading-relaxed font-bold mt-5">
                {data?.title}
            </h1>
            <p className="my-5 text-center text-xl text-gray-400">{data?.subtitle}</p>
            <div className="my-5 flex items-center justify-center text-lg">
                by:&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.moroccan.dev/" className=" flex flex-row items-center " >
                    {data?.author.profilePicture && (
                        <Image
                            src={data?.author.profilePicture}
                            alt={data?.author.name}
                            width={40}
                            height={40}
                            className="rounded-full h-10 w-10 mr-5"
                        />
                    )}
                    {data?.author.name}
                </a>
            </div>
            <div
                className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
                dangerouslySetInnerHTML={{ __html: data!.content.html }}
            ></div>
        </div>
    );
}