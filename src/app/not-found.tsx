import clsx from "clsx";

export default function NotFoundPage() {
  return (
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
        404
      </h1>
      <p className="text-slate-100 dark:text-slate-900 text-center">
        Erro 404 - A página que você está tentando acessar não existe nesse site
      </p>
    </div>
  );
}
