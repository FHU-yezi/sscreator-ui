import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  rounded?: string;
  borderColor?: string;
}

export default function Card({
  children,
  className,
  padding = "p-4",
  margin = "m-0",
  gap = "gap-3",
  rounded = "rounded-lg",
  borderColor = "border-zinc-200 dark:border-zinc-700",
}: Props) {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col shadow border",
        padding,
        margin,
        gap,
        rounded,
        borderColor,
      )}
    >
      {children}
    </div>
  );
}
