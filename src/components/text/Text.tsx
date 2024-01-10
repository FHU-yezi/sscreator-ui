import { clsx } from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  color?: string;
}

export default function Text({
  children,
  className,
  color = "text-zinc-950 dark:text-zinc-50",
}: Props) {
  return <p className={clsx(className, color)}>{children}</p>;
}
