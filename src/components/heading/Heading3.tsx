import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  SemanticColorType,
  UnsetColorType,
} from "../../utils/colorSchemeTypes";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ComponentChildren;
  className?: string;
  colorScheme?: UnsetColorType | SemanticColorType;
}

export default function Heading3({
  children,
  className,
  colorScheme,
  ...props
}: Props) {
  return (
    <h3
      className={clsx("text-xl font-bold", className, {
        "text-zinc-950 dark:text-zinc-50": colorScheme === undefined,
        "text-green-600 dark:text-green-400": colorScheme === "success",
        "text-blue-600 dark:text-blue-400": colorScheme === "info",
        "text-orange-600 dark:text-orange-400": colorScheme === "warning",
        "text-red-600 dark:text-red-400": colorScheme === "danger",
      })}
      {...props}
    >
      {children}
    </h3>
  );
}
