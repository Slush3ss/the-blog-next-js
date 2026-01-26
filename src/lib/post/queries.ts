import { PostRepo } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = cache(async () => {
  return await PostRepo.findAllPublic();
});

export const findBySlugPost = cache(async (slug: string) => {
  const post = await PostRepo.findBySlug(slug);

  if (typeof post == "string") {
    notFound();
  }

  return post;
});
