import { PostRepo } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = unstable_cache(
  cache(async () => {
    return await PostRepo.findAllPublic();
  }),
  ["posts"],
  { tags: ["posts"], revalidate: 60 }
);

export const findBySlugPost = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await PostRepo.findBySlug(slug);

      if (typeof post == "string") {
        notFound();
      }

      return post;
    }),
    ["posts"],
    { tags: [`post-${slug}`] }
  )(slug);
