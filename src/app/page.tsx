import { BelowPosts } from "@/components/BelowPosts";
import { HeaderPost } from "@/components/HeaderPost";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader size={40} />}>
        <HeaderPost />
        <BelowPosts />
      </Suspense>
    </>
  );
}
