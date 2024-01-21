import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function Header({ children, className }: Props) {
  return (
    <>
      <header
        className={clsx(
          "fixed left-0 top-0 z-20 bg-zinc-100 dark:bg-zinc-900 flex gap-4 w-full px-[5%] h-12 items-center",
          className,
        )}
      >
        {children}
      </header>
      <div className="h-12" aria-hidden />
    </>
  );
}
