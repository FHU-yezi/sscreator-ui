import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  backgroundColor?: string;
}

export default function Header({
  children,
  className,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-800",
}: Props) {
  return (
    <>
      <header
        className={clsx(
          className,
          "fixed left-0 top-0 h-14 w-full px-[5vw] shadow z-10",
          backgroundColor,
        )}
      >
        {children}
      </header>
      <div className="h-14" />
    </>
  );
}
