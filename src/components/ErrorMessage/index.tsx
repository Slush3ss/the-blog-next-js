"use client";
import clsx from "clsx";

type ErrorMessgeProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessgeProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          "min-h-[320px]",
          "bg-slate-900",
          "flex",
          "flex-col",
          "justify-center",
          "items-center",
          "dark:bg-slate-100",
          "p-8",
          "my-8",
          "rounded-xl"
        )}
      >
        <h1 className="text-slate-100 dark:text-slate-900 text-7xl/normal font-extrabold my-3">
          {contentTitle}
        </h1>
        <p className="text-slate-100 dark:text-slate-900 text-center">
          {content}
        </p>
      </div>
    </>
  );
}
