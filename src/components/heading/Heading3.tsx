import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  BlackColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../types/colorTypes";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ComponentChildren;
  className?: string;
  color?: UnsetColorType | BlackColorType | SemanticColorType;
}

export default function Heading3({
  children,
  className,
  color = "black",
  ...props
}: Props) {
  return (
    <h3
      className={clsx("text-xl font-bold", className, {
        "text-zinc-950 dark:text-zinc-50": color === "black",
        "text-green-600 dark:text-green-400": color === "success",
        "text-blue-600 dark:text-blue-400": color === "info",
        "text-orange-600 dark:text-orange-400": color === "warning",
        "text-red-600 dark:text-red-400": color === "danger",
      })}
      {...props}
    >
      {children}
    </h3>
  );
}
