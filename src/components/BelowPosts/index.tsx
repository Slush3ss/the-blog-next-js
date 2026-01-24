import { PostRepo } from "@/repositories/post";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export async function BelowPosts() {
  const posts = await PostRepo.findAll();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-14 cursor-pointer"
      )}
    >
      {posts.slice(1).map((post) => (
        <div key={post.id} className="group">
          <Link href={`/post/${post.slug}`}>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="group-hover:scale-107 rounded-xl transition duration-500"
                src={post.coverImageUrl}
                width={1200}
                height={720}
                alt={post.excerpt}
              />
            </div>
          </Link>
          <div className={clsx("py-3")}>
            <p
              className={clsx(
                "text-xs text-slate-600/80 dark:text-slate-300/80"
              )}
            >
              {post.createdAt}
            </p>
            <h1 className={clsx("text-xl font-bold py-2")}>{post.title}</h1>
            <p
              className={clsx(
                "text-xs text-slate-600/80 dark:text-slate-300/80"
              )}
            >
              {post.excerpt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
