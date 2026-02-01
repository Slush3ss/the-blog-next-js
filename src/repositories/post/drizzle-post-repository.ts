import type { PostModel } from "@/models/post/post-model";
import type { PostRepository } from "./post-repositories";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { and, eq, sql } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.select().from(postsTable);
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.published, true));
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const [post] = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id));

    if (!post) throw new Error("Post não encontrado");

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const [post] = await drizzleDb
      .select()
      .from(postsTable)
      .where(and(eq(postsTable.slug, slug), eq(postsTable.published, true)));

    if (!post) throw new Error("Post não encontrado");

    return post;
  }
}