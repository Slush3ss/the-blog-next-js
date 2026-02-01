import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose",
        "dark:prose-invert",
        "w-full",
        "max-w-none",
        "prose-a:text-blue-500",
        "prose-a:hover:text-blue-700",
        "prose-a:transition",
        "prose-a:duration-300",
        "prose-img:rounded-xl",
        "prose-img:w-full",
        "md:prose-lg"
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
