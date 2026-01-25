import { FormatDate } from "@/utils/format-date";
import clsx from "clsx";
import Link from "next/link";

type PostSummaryProps = {
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  postTag: "h1" | "h2";
};

const PostClasses = {
  h1: "font-bold text-2xl sm:text-4xl pt-4 pb-4",
  h2: "text-xl font-bold py-2",
};

export function PostSummary({
  createdAt,
  slug,
  title,
  excerpt,
  postTag,
}: PostSummaryProps) {
  return (
    <div className={clsx("py-3")}>
      <time
        className={clsx("text-xs text-slate-600/80 dark:text-slate-300/80")}
        dateTime={createdAt}
      >
        {FormatDate(createdAt)}
      </time>
      <Link href={`/post/${slug}`}>
        <h1 className={`${PostClasses[postTag]}`}>{title}</h1>
      </Link>
      <p className={clsx("text-xs text-slate-600/80 dark:text-slate-300/80")}>
        {excerpt}
      </p>
    </div>
  );
}
