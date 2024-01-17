import clsx from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  GrayColorType,
  SemanticColorType,
} from "../utils/colorSchemeTypes";
import Icon from "./Icon";
import Row from "./layout/Row";

interface CustomStyle {
  textColor?: string;
  backgroundColor?: string;
}

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: ComponentChild;
  leftIcon?: ComponentChild;
  rightIcon?: ComponentChild;
  className?: string;
  colorScheme?: SemanticColorType | GrayColorType;
  customStyle?: CustomStyle;
}

export default function Badge({
  children,
  leftIcon,
  rightIcon,
  className,
  colorScheme,
  customStyle = {},
  ...props
}: Props) {
  return (
    <span
      className={clsx("w-fit rounded px-2 whitespace-nowrap", className, {
        "bg-zinc-100 dark:bg-zinc-700 text-zinc-950 dark:text-zinc-50":
          colorScheme === "gray",
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300":
          colorScheme === "success",
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
          colorScheme === "info",
        "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300":
          colorScheme === "warning",
        "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300":
          colorScheme === "danger",
        [customStyle.textColor ?? ""]: colorScheme === undefined,
        [customStyle.backgroundColor ?? ""]: colorScheme === undefined,
      })}
      {...props}
    >
      <Row className="items-end justify-center" gap="gap-1" itemsCenter nowrap>
        {leftIcon && (
          <Icon
            className="transition-colors"
            colorScheme={colorScheme}
            icon={leftIcon}
          />
        )}
        {children}
        {rightIcon && (
          <Icon
            className="transition-colors"
            colorScheme={colorScheme}
            icon={rightIcon}
          />
        )}
      </Row>
    </span>
  );
}
