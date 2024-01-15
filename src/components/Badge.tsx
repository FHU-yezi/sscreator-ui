import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type {
  GrayColorType,
  SemanticColorType,
} from "../utils/colorSchemeTypes";

interface Props {
  children: ComponentChildren;
  className?: string;
  colorScheme?: SemanticColorType | GrayColorType;
  textColor?: string;
  backgroundColor?: string;
}

export default function Badge({
  children,
  className,
  colorScheme,
  textColor = "",
  backgroundColor = "",
}: Props) {
  return (
    <span
      className={clsx("w-fit rounded px-2 whitespace-nowrap", className, {
        "bg-zinc-100 dark:bg-zinc-700 text-zinc-950 dark:text-zinc-50":
          colorScheme === "gray",
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300":
          colorScheme === "success",
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
          colorScheme === "info",
        "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300":
          colorScheme === "warning",
        "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300":
          colorScheme === "danger",
        [textColor]: colorScheme === undefined,
        [backgroundColor]: colorScheme === undefined,
      })}
    >
      {children}
    </span>
  );
}
