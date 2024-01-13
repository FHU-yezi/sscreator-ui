import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../../utils/colorType";

interface Props {
  children: ComponentChildren;
  className?: string;
  type?: "gray" | BasicColorType;
  color?: string;
}

export default function Heading3({
  children,
  className,
  type,
  color = "text-zinc-950 dark:text-zinc-50",
}: Props) {
  return (
    <h3
      className={clsx("text-xl font-bold", className, {
        "text-zinc-500": type === "gray",
        "text-green-600": type === "success",
        "text-blue-600": type === "info",
        "text-orange-600": type === "warning",
        "text-red-600": type === "danger",
        [color]: type === undefined,
      })}
    >
      {children}
    </h3>
  );
}
