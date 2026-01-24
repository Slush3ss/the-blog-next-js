import { BelowPosts } from "@/components/BelowPosts";
import { Container } from "@/components/Container";
import { HeaderPost } from "@/components/HeaderPost";

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-4xl md:text-6xl font-bold py-8">The Blog</h1>
      </header>
      <HeaderPost />
      <BelowPosts />
    </Container>
  );
}
