import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { PrimaryColorType, UnsetColorType } from "../../types/colorTypes";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: ComponentChildren;
  className?: string;
  path: string;
  color?: UnsetColorType | PrimaryColorType;
}

export default function InternalLink({
  children,
  className,
  color = "primary",
  path,
  ...props
}: Props) {
  return (
    <a
      className={clsx("underline", className, {
        "text-blue-700 dark:text-blue-500": color === "primary",
      })}
      href={path}
      {...props}
    >
      {children}
    </a>
  );
}
