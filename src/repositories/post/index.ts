import { DrizzlePostRepository } from "./drizzle-post-repository";
import type { PostRepository } from "./post-repositories";

export const PostRepo: PostRepository = new DrizzlePostRepository();
