import { SinglePostPage } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findBySlugPost } from "@/lib/post/queries";
import type { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findBySlugPost(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  return (
    <Suspense fallback={<SpinLoader size={40} />}>
      <SinglePostPage slug={slug} />
    </Suspense>
  );
}
