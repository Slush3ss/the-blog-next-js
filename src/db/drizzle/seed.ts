import { PostRepo } from "@/repositories/post";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";
import { sql } from "drizzle-orm";

(async () => {
  const post = await drizzleDb.select().from(postsTable).where(sql`${postsTable.author} = ${"Lucas Lima"}`)
  console.log(post)
})();
