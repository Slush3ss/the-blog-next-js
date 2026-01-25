import { BelowPosts } from "@/components/BelowPosts";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeaderPost } from "@/components/HeaderPost";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <HeaderPost />
      <Suspense fallback={<SpinLoader size={40} />}>
        <BelowPosts />
      </Suspense>
    </>
  );
}
