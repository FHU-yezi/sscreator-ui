import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  gap?: string;
  cols: string;
}

export default function Grid({
  children,
  className,
  gap = "gap-4",
  cols,
}: Props) {
  return <div className={clsx(className, "grid", gap, cols)}>{children}</div>;
}
