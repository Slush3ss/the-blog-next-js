import { SinglePostPage } from "../SinglePost";

type PostSlugProps = {
  params: Promise<{ slug: string }>
}

export async function PostSlug({ params }: PostSlugProps) {
  const { slug } = await params;
  return (
    <SinglePostPage slug={slug} />
  );
}