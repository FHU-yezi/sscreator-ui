import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  BlackColorType,
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../types/colorTypes";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ComponentChildren;
  className?: string;
  color?: UnsetColorType | BlackColorType | GrayColorType | SemanticColorType;
  bold?: boolean;
  inline?: boolean;
  nowrap?: boolean;
}

export default function SmallText({
  children,
  className,
  color = "black",
  bold = false,
  inline = false,
  nowrap = false,
  ...props
}: Props) {
  return (
    <p
      className={clsx(
        "text-sm",
        className,
        {
          "text-zinc-950 dark:text-zinc-50": color === "black",
          "text-zinc-500 dark:text-zinc-400": color === "gray",
          "text-green-600 dark:text-green-400": color === "success",
          "text-blue-600 dark:text-blue-400": color === "info",
          "text-orange-600 dark:text-orange-400": color === "warning",
          "text-red-600 dark:text-red-400": color === "danger",
        },
        {
          "font-semibold": bold,
          inline,
          "whitespace-nowrap": nowrap,
        },
      )}
      {...props}
    >
      {children}
    </p>
  );
}
