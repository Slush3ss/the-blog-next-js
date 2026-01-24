import { PostRepo } from "@/repositories/post";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export async function HeaderPost() {
  const posts = await PostRepo.findAll();
  return (
    <div className="w-full gap-4 md:gap-6 mb-16 grid grid-cols-1 md:grid-cols-2 mt-3 items-center group hover:cursor-pointer">
      <Link href={`/post/${posts[0].slug}`} className="w-full h-full overflow-hidden rounded-xl">
        <Image
          className="group-hover:scale-105 rounded-xl transition duration-400"
          src={posts[0].coverImageUrl}
          width={1200}
          height={720}
          alt={posts[0].excerpt}
        />
      </Link>
      <div className="">
        <p className="text-xs sm:text-sm text-slate-600/80 dark:text-slate-300/80">
          {posts[0].createdAt}
        </p>
        <h1 className="font-bold text-2xl sm:text-4xl pt-4 pb-4">
          {posts[0].title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600/80 dark:text-slate-300/80">
          {posts[0].excerpt}
        </p>
      </div>
    </div>
  );
}
