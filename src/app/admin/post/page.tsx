import { PostListAdminPage } from "@/components/PostListAdmin";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader size={55} />}>
      <PostListAdminPage />
    </Suspense>
  );
}
