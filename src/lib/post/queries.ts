import { PostRepo } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPosts = cache(async () => {
  return await PostRepo.findAllPublic();
});
