import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { SemanticColorType } from "../../utils/colorSchemeTypes";

interface Props {
  children: ComponentChildren;
  className?: string;
  colorScheme?: SemanticColorType;
  color?: string;
}

export default function Heading3({
  children,
  className,
  colorScheme,
  color = "text-zinc-950 dark:text-zinc-50",
}: Props) {
  return (
    <h3
      className={clsx("text-xl font-bold", className, {
        "text-green-600 dark:text-green-400": colorScheme === "success",
        "text-blue-600 dark:text-blue-400": colorScheme === "info",
        "text-orange-600 dark:text-orange-400": colorScheme === "warning",
        "text-red-600 dark:text-red-400": colorScheme === "danger",
        [color]: colorScheme === undefined,
      })}
    >
      {children}
    </h3>
  );
}
