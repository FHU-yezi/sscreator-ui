import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { PrimaryColorType, UnsetColorType } from "../../types/colorTypes";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: ComponentChildren;
  className?: string;
  color?: UnsetColorType | PrimaryColorType;
  openInCurrentTab?: boolean;
}

export default function ExternalLink({
  children,
  className,
  color = "primary",
  openInCurrentTab = false,
  ...props
}: Props) {
  return (
    <a
      className={clsx("underline", className, {
        "text-blue-600 dark:text-blue-400": color === "primary",
      })}
      target={openInCurrentTab ? "_self" : "_blank"}
      {...props}
    >
      {children}
    </a>
  );
}
