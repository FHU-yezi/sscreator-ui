import clsx from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../types/colorSchemeTypes";
import Icon from "./Icon";
import Row from "./layout/Row";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: ComponentChild;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
  colorScheme?: UnsetColorType | SemanticColorType | GrayColorType;
}

export default function Badge({
  children,
  className,
  leftIcon,
  rightIcon,
  colorScheme = "gray",
  ...props
}: Props) {
  return (
    <span
      className={clsx(
        "w-fit rounded px-1.5 py-0.5 whitespace-nowrap",
        className,
        {
          "bg-zinc-200 dark:bg-zinc-700 text-zinc-950 dark:text-zinc-50":
            colorScheme === "gray",
          "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300":
            colorScheme === "success",
          "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300":
            colorScheme === "info",
          "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300":
            colorScheme === "warning",
          "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300":
            colorScheme === "danger",
        },
      )}
      {...props}
    >
      <Row gap="gap-1" itemsCenter>
        {leftIcon && (
          <Icon className="text-xl" colorScheme={colorScheme} icon={leftIcon} />
        )}
        {children}
        {rightIcon && (
          <Icon
            className="text-xl"
            colorScheme={colorScheme}
            icon={rightIcon}
          />
        )}
      </Row>
    </span>
  );
}
