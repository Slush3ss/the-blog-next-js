import { findBySlugPost } from "@/lib/post/queries";

type SinglePostPageProps = {
  slug: string
}

export async function SinglePostPage({ slug }: SinglePostPageProps) {
  const post = await findBySlugPost(slug);

  return (<div><p>Teste</p></div>)
}