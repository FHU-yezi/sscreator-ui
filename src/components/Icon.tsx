import clsx from "clsx";
import type { HTMLAttributes } from "preact/compat";
import type {
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../utils/colorSchemeTypes";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "icon"> {
  className?: string;
  icon: string;
  colorScheme?: UnsetColorType | SemanticColorType | GrayColorType;
}

export default function Icon({
  className,
  icon,
  colorScheme,
  ...props
}: Props) {
  return (
    <span
      className={clsx(className, icon, {
        "text-zinc-950 dark:text-zinc-50": colorScheme === undefined,
        "text-zinc-500 dark:text-zinc-400": colorScheme === "gray",
        "text-green-600 dark:text-green-400": colorScheme === "success",
        "text-blue-600 dark:text-blue-400": colorScheme === "info",
        "text-orange-600 dark:text-orange-400": colorScheme === "warning",
        "text-red-600 dark:text-red-400": colorScheme === "danger",
      })}
      {...props}
    />
  );
}
