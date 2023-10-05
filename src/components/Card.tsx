import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  padding?: string;
  margin?: string;
  rounded?: string;
  borderColor?: string;
  shadowColor?: string;
  borderless?: boolean;
}

export default function Card({
  children,
  className,
  padding = "p-4",
  margin = "m-0",
  rounded = "rounded-md",
  borderColor = "border-zinc-300 dark:border-zinc-700",
  shadowColor = "shadow-zinc-300/20 dark:shadow-zinc-700/20",
  borderless = false,
}: Props) {
  return (
    <div
      className={clsx(className, padding, margin, rounded, {
        "border shadow-md": !borderless,
        [borderColor]: !borderless,
        [shadowColor]: !borderless,
      })}
    >
      {children}
    </div>
  );
}
