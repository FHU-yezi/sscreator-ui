import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  gap?: string;
}

export default function Row({ children, className, gap = "gap-4" }: Props) {
  return <div className={clsx(className, "flex", gap)}>{children}</div>;
}
