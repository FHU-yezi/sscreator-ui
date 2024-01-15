import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../../utils/colorType";

interface Props {
  children: ComponentChildren;
  className?: string;
  type?: BasicColorType;
  color?: string;
}

export default function Heading2({
  children,
  className,
  type,
  color = "text-zinc-950 dark:text-zinc-50",
}: Props) {
  return (
    <h2
      className={clsx("text-2xl font-bold", className, {
        "text-green-600 dark:text-green-400": type === "success",
        "text-blue-600 dark:text-blue-400": type === "info",
        "text-orange-600 dark:text-orange-400": type === "warning",
        "text-red-600 dark:text-red-400": type === "danger",
        [color]: type === undefined,
      })}
    >
      {children}
    </h2>
  );
}
