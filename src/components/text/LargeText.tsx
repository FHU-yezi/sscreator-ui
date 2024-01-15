import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../../utils/colorType";

interface Props {
  children: ComponentChildren;
  className?: string;
  type?: "gray" | BasicColorType;
  color?: string;
  bold?: boolean;
  inline?: boolean;
}

export default function LargeText({
  children,
  className,
  type,
  color = "text-zinc-950 dark:text-zinc-50",
  bold = false,
  inline = false,
}: Props) {
  return (
    <p
      className={clsx(
        "text-lg",
        className,
        {
          "text-zinc-500 dark:text-zinc-400": type === "gray",
          "text-green-600 dark:text-green-400": type === "success",
          "text-blue-600 dark:text-blue-400": type === "info",
          "text-orange-600 dark:text-orange-400": type === "warning",
          "text-red-600 dark:text-red-400": type === "danger",
          [color]: type === undefined,
        },
        {
          "font-semibold": bold,
          inline,
        },
      )}
    >
      {children}
    </p>
  );
}
