import { findBySlugPost } from "@/lib/post/queries";
import { FormatDate } from "@/utils/format-date";
import Image from "next/image";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostPageProps = {
  slug: string;
};

export async function SinglePostPage({ slug }: SinglePostPageProps) {
  const post = await findBySlugPost(slug);

  return (
    <div className="mb-16 mt-8">
      <div>
        <Image
          className="rounded-xl mb-4"
          width={1200}
          height={920}
          src={post.coverImageUrl}
          alt={post.title}
        />
        <p className="text-sm mb-4 sm:text-lg">{post.author} | {FormatDate(post.createdAt)}</p>
      </div>
      <p className="text-xl font-bold mb-4 sm:text-2xl">{post.excerpt}</p>
      <SafeMarkdown markdown={post.content} />
    </div>
  );
}
