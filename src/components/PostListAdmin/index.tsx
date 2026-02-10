import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export async function PostListAdminPage() {
  const posts = await findAllPostsAdmin();

  return (
    <div className="py-6">
      {posts.map((post) => (
        <div className="py-3 flex gap-6 justify-between items-center" key={post.id}>
          <Link className="block text-sm lg:text-lg" href={`/admin/post/${post.id}`}>
            {post.title}
          </Link>
          <div className="flex gap-3 items-center">
            <span
              className={clsx(
                "bg-emerald-500",
                "rounded-full",
                "w-3",
                "h-3",
                "inline-block",
                `${!post.published && "bg-red-500"}`
              )}
            ></span>
            <button className="text-red-700 cursor-pointer hover:scale-110 transition duration-300"><Trash2 size={28} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
