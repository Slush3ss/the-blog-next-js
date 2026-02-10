import { PostRepo } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export async function findAllPublicPosts() {
  "use cache";
  cacheLife("minutes");
  cacheTag("posts");
  return await PostRepo.findAllPublic();
}

export async function findBySlugPost(slug: string) {
  "use cache";
  cacheLife("seconds")
  cacheTag(`post-${slug}`);

  const post = await PostRepo.findBySlug(slug);

  if (typeof post == "string") {
    notFound();
  }

  return post;
}
