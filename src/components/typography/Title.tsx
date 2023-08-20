import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  color?: string;
}

export default function Title({
  children,
  className,
  color = "text-zinc-950 dark:text-zinc-50",
}: Props) {
  return (
    <h1 className={clsx(className, "font-bold text-2xl", color)}>{children}</h1>
  );
}
