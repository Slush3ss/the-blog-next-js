import { PostRepo } from "@/repositories/post";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";
import { eq, sql } from "drizzle-orm";

(async () => {
  await drizzleDb.update(postsTable).set({ title: "Como a escrita pode mudar sua carreira", published: true }).where(eq(postsTable.slug, "como-a-escrita-pode-mudar-sua-carreira"))
})();
