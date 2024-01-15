import clsx from "clsx";
import type { ComponentChild } from "preact";
import type { BasicColorType } from "../utils/colorType";

interface Props {
  icon: ComponentChild;
  className?: string;
  type?: "gray" | BasicColorType;
  color?: string;
}

export default function Icon({
  icon,
  className,
  type,
  color = "text-zinc-950 dark:text-zinc-50",
}: Props) {
  return (
    <span
      className={clsx(className, "inline-block align-middle", {
        "text-zinc-500 dark:text-zinc-400": type === "gray",
        "text-green-600 dark:text-green-400": type === "success",
        "text-blue-600 dark:text-blue-400": type === "info",
        "text-orange-600 dark:text-orange-400": type === "warning",
        "text-red-600 dark:text-red-400": type === "danger",
        [color]: type === undefined,
      })}
    >
      {icon}
    </span>
  );
}
