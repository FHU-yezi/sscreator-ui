import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  gap?: string;
}

export default function Column({ children, className, gap = "gap-4" }: Props) {
  return (
    <div className={clsx(className, "flex flex-col", gap)}>{children}</div>
  );
}
