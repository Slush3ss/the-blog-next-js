import clsx from "clsx";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-2xl text-center pb-8 font-medium">
      <p>
        Copyright &copy; {new Date().getFullYear()} -{" "}
        <Link
          className={clsx("hover:text-slate-400", "transition", "duration-300")}
          href="/"
        >
          The Blog
        </Link>
      </p>
    </footer>
  );
}
