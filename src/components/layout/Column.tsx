import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  gap?: string;
  itemsCenter?: boolean;
  nowrap?: boolean;
}

export default function Column({
  children,
  className,
  gap = "gap-4",
  itemsCenter = false,
  nowrap = false,
}: Props) {
  return (
    <div
      className={clsx(className, "flex flex-col", gap, {
        "items-center": itemsCenter,
        "flex-nowrap": nowrap,
      })}
    >
      {children}
    </div>
  );
}