import { AdminPostId } from "@/components/AdminPostId";
import { Suspense } from "react";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  return (
    <Suspense>
      <AdminPostId params={params} />
    </Suspense>
  );
}
