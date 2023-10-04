import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  gap?: string;
  verticalCenter?: boolean;
}

export default function Row({
  children,
  className,
  gap = "gap-4",
  verticalCenter = false,
}: Props) {
  return (
    <div
      className={clsx(className, "flex", gap, {
        "items-center": verticalCenter,
      })}
    >
      {children}
    </div>
  );
}
