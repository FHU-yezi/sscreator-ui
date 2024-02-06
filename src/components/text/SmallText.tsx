import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../types/colorSchemeTypes";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ComponentChildren;
  className?: string;
  colorScheme?: UnsetColorType | SemanticColorType | GrayColorType;
  bold?: boolean;
  inline?: boolean;
  nowrap?: boolean;
}

export default function SmallText({
  children,
  className,
  colorScheme,
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
          "text-zinc-950 dark:text-zinc-50": colorScheme === undefined,
          "text-zinc-500 dark:text-zinc-400": colorScheme === "gray",
          "text-green-600 dark:text-green-400": colorScheme === "success",
          "text-blue-600 dark:text-blue-400": colorScheme === "info",
          "text-orange-600 dark:text-orange-400": colorScheme === "warning",
          "text-red-600 dark:text-red-400": colorScheme === "danger",
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
