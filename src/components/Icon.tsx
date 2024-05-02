import clsx from "clsx";
import type { HTMLAttributes } from "preact/compat";
import type {
  BlackColorType,
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../types/colorTypes";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "icon"> {
  className?: string;
  icon: string;
  color?: UnsetColorType | BlackColorType | GrayColorType | SemanticColorType;
}

export default function Icon({
  className,
  icon,
  color = "black",
  ...props
}: Props) {
  return (
    <span
      className={clsx(className, icon, {
        "!text-zinc-950 dark:!text-zinc-50": color === "black",
        "!text-zinc-600 dark:!text-zinc-400": color === "gray",
        "!text-green-700 dark:!text-green-600": color === "success",
        "!text-blue-600 dark:!text-blue-500": color === "info",
        "!text-orange-700 dark:!text-orange-600": color === "warning",
        "!text-red-600 dark:!text-red-500": color === "danger",
      })}
      {...props}
    />
  );
}
