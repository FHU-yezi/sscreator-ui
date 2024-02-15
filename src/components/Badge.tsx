import clsx from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../types/colorTypes";
import Icon from "./Icon";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: ComponentChild;
  className?: string;
  color?: UnsetColorType | GrayColorType | SemanticColorType;
  leftIcon?: string;
  rightIcon?: string;
}

export default function Badge({
  children,
  className,
  color = "gray",
  leftIcon,
  rightIcon,
  ...props
}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex gap-1 items-center w-fit rounded px-1.5 py-0.5 whitespace-nowrap",
        className,
        {
          "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300":
            color === "gray",
          "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400":
            color === "success",
          "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400":
            color === "info",
          "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400":
            color === "warning",
          "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400":
            color === "danger",
        },
      )}
      {...props}
    >
      {leftIcon && <Icon className="text-xl" color="unset" icon={leftIcon} />}
      {children}
      {rightIcon && <Icon className="text-xl" color="unset" icon={rightIcon} />}
    </span>
  );
}
