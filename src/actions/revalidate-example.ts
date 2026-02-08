"use server";

import { revalidateTag } from "next/cache";

export async function RevalidateExampleAction(FormData: FormData) {
  revalidateTag("posts", "max")
  revalidateTag("post-como-a-escrita-pode-mudar-sua-carreira", "max")
}