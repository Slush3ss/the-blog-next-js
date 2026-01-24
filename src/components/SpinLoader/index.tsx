import clsx from "clsx";

type SpinLoaderProps = {
  size: number;
};

export function SpinLoader({ size }: SpinLoaderProps) {
  return (
    <div
      className={clsx(
        "h-full",
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        "flex-col",
        "gap-4.5"
      )}
    >
      <div
        style={{ width: size, height: size }}
        className={clsx(
          "border-5",
          "border-t-white",
          "border-zinc-600/40",
          "rounded-full",
          "flex",
          "justify-center",
          "items-center",
          "animate-spin"
        )}
      ></div>
      <h1 className={clsx("font-bold text-4xl")}>Carregando dados...</h1>
    </div>
  );
}
