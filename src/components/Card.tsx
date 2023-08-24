import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  padding?: string;
  margin?: string;
  rounded?: string;
  borderColor?: string;
  isBorderLess?: boolean;
}

export default function Card({
  children,
  className,
  padding = "p-4",
  margin = "m-0",
  rounded = "rounded-lg",
  borderColor = "border-zinc-200 dark:border-zinc-700",
  isBorderLess = false,
}: Props) {
  return (
    <div
      className={clsx(className, padding, margin, rounded, {
        "border shadow": !isBorderLess,
        [borderColor]: !isBorderLess,
      })}
    >
      {children}
    </div>
  );
}
