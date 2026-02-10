import { PostRepo } from "@/repositories/post";
import { unstable_cache } from "next/cache";

export const findPostByIdAdmin = async (id: string) => {
  return await PostRepo.findById(id);
};

export const findAllPostsAdmin = async () => {
  return await PostRepo.findAll()
}