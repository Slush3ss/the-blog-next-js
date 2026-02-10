import Image from "next/image";
import Link from "next/link";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries/public"

export async function HeaderPost() {
  const posts = await findAllPublicPosts()
  return (
    <div className="w-full gap-4 md:gap-6 mb-16 grid grid-cols-1 md:grid-cols-2 mt-3 items-center group hover:cursor-pointer">
      <Link
        href={`/post/${posts[0].slug}`}
        className="w-full h-full overflow-hidden rounded-xl"
      >
        <Image
          className="group-hover:scale-105 rounded-xl transition duration-400"
          src={posts[0].coverImageUrl}
          width={1200}
          height={720}
          alt={posts[0].excerpt}
        />
      </Link>
      <PostSummary
        postTag="h1"
        createdAt={posts[0].createdAt}
        slug={posts[0].slug}
        title={posts[0].title}
        excerpt={posts[0].excerpt}
      />
    </div>
  );
}
