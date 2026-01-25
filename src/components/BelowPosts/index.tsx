import { PostRepo } from "@/repositories/post";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries"

export async function BelowPosts() {
  const posts = await findAllPublicPosts()
  return (
    <div
      className={clsx(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-14"
      )}
    >
      {posts.slice(1).map((post) => (
        <div key={post.id} className="group cursor-pointer">
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
          <PostSummary
            postTag="h2"
            createdAt={post.createdAt}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
          />
        </div>
      ))}
    </div>
  );
}
