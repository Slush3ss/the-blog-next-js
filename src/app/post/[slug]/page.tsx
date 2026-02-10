import { PostSlug } from "@/components/PostSlug";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  console.log("teste page.tsx")
  return (
    <Suspense fallback={<SpinLoader size={40} />}>
      <PostSlug params={params} />
    </Suspense>
  );
}
