import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";

interface Props extends HTMLAttributes<HTMLDivElement> {
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
  ...props
}: Props) {
  return (
    <div
      className={clsx(className, "flex flex-col", gap, {
        "items-center": itemsCenter,
        "flex-nowrap": nowrap,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
