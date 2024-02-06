import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { UnsetColorType } from "../../types/colorSchemeTypes";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: ComponentChildren;
  className?: string;
  colorScheme?: UnsetColorType;
  openInCurrentTab?: boolean;
}

export default function ExternalLink({
  children,
  className,
  colorScheme,
  openInCurrentTab = false,
  ...props
}: Props) {
  return (
    <a
      className={clsx("underline", className, {
        "text-blue-600 dark:text-blue-400": !colorScheme,
      })}
      target={openInCurrentTab ? "_self" : "_blank"}
      {...props}
    >
      {children}
    </a>
  );
}
