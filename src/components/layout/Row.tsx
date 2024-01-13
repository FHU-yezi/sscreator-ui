import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  gap?: string;
  itemsCenter?: boolean;
  nowrap?: boolean;
}

export default function Row({
  children,
  className,
  gap = "gap-4",
  itemsCenter = false,
  nowrap = false,
}: Props) {
  return (
    <div
      className={clsx(className, "flex", gap, {
        "items-center": itemsCenter,
        "flex-nowrap": nowrap,
      })}
    >
      {children}
    </div>
  );
}
