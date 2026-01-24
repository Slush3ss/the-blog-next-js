import type { PostModel } from "@/models/post/post-model";
import type { PostRepository } from "./post-repositories";
import { resolve } from "path";
import { readFileSync } from "fs";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const readPosts = readFileSync(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedPosts = JSON.parse(readPosts);
    const { posts } = parsedPosts;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts: PostModel[] = await this.readFromDisk();
    await this.simulateWait();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts: PostModel[] = await this.readFromDisk();
    const postById = posts.find((post) => post.id === id);

    if (!postById) throw new Error("post não encontado");

    return postById;
  }
}
