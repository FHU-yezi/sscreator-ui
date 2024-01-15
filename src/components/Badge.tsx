import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../utils/colorType";

interface Props {
  children: ComponentChildren;
  className?: string;
  type?: "gray" | BasicColorType;
  textColor?: string;
  backgroundColor?: string;
}

export default function Badge({
  children,
  className,
  type,
  textColor = "",
  backgroundColor = "",
}: Props) {
  return (
    <span
      className={clsx("w-fit rounded px-2 whitespace-nowrap", className, {
        "bg-zinc-100 dark:bg-zinc-700 text-zinc-950 dark:text-zinc-50":
          type === "gray",
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300":
          type === "success",
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
          type === "info",
        "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300":
          type === "warning",
        "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300":
          type === "danger",
        [textColor]: type === undefined,
        [backgroundColor]: type === undefined,
      })}
    >
      {children}
    </span>
  );
}
