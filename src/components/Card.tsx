import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  padding?: string;
  margin?: string;
  rounded?: string;
  borderColor?: string;
}

export default function Card({
  children,
  className,
  padding = "p-4",
  margin = "m-0",
  rounded = "rounded-lg",
  borderColor = "border-zinc-200 dark:border-zinc-700",
}: Props) {
  return (
    <div
      className={clsx(
        className,
        "shadow border",
        padding,
        margin,
        rounded,
        borderColor,
      )}
    >
      {children}
    </div>
  );
}
