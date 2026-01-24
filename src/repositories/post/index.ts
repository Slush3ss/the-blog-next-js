import { JsonPostRepository } from "./json-post-repository";
import type { PostRepository } from "./post-repositories";

export const PostRepo: PostRepository = new JsonPostRepository();
