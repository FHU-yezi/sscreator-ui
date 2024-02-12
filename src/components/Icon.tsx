import clsx from "clsx";
import type { HTMLAttributes } from "preact/compat";
import type {
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../types/colorTypes";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "icon"> {
  className?: string;
  icon: string;
  color?: UnsetColorType | SemanticColorType | GrayColorType;
}

export default function Icon({ className, icon, color, ...props }: Props) {
  return (
    <span
      className={clsx(className, icon, {
        "text-zinc-950 dark:text-zinc-50": color === undefined,
        "text-zinc-500 dark:text-zinc-400": color === "gray",
        "text-green-600 dark:text-green-400": color === "success",
        "text-blue-600 dark:text-blue-400": color === "info",
        "text-orange-600 dark:text-orange-400": color === "warning",
        "text-red-600 dark:text-red-400": color === "danger",
      })}
      {...props}
    />
  );
}
