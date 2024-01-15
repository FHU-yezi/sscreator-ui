import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
import type {
  GrayColorType,
  SemanticColorType,
} from "../../utils/colorSchemeTypes";

interface Props {
  children: ComponentChildren;
  className?: string;
  colorScheme?: SemanticColorType | GrayColorType;
  color?: string;
  bold?: boolean;
  inline?: boolean;
}

export default function SmallText({
  children,
  className,
  colorScheme,
  color = "text-zinc-950 dark:text-zinc-50",
  bold = false,
  inline = false,
}: Props) {
  return (
    <p
      className={clsx(
        "text-sm",
        className,
        {
          "text-zinc-500 dark:text-zinc-400": colorScheme === "gray",
          "text-green-600 dark:text-green-400": colorScheme === "success",
          "text-blue-600 dark:text-blue-400": colorScheme === "info",
          "text-orange-600 dark:text-orange-400": colorScheme === "warning",
          "text-red-600 dark:text-red-400": colorScheme === "danger",
          [color]: colorScheme === undefined,
        },
        {
          "font-semibold": bold,
          inline,
        },
      )}
    >
      {children}
    </p>
  );
}
