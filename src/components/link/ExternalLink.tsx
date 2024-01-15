import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { SemanticColorType } from "../../utils/colorSchemeTypes";

interface Props {
  children: ComponentChildren;
  className?: string;
  href: string;
  colorScheme?: SemanticColorType;
  color?: string;
  openInCurrentTab?: boolean;
}

export default function ExternalLink({
  children,
  className,
  href,
  colorScheme,
  color = "text-blue-600 dark:text-blue-400",
  openInCurrentTab = false,
}: Props) {
  return (
    <a
      className={clsx("underline", className, {
        "text-green-600 dark:text-green-400": colorScheme === "success",
        "text-blue-600 dark:text-blue-400": colorScheme === "info",
        "text-orange-600 dark:text-orange-400": colorScheme === "warning",
        "text-red-600 dark:text-red-400": colorScheme === "danger",
        [color]: colorScheme === undefined,
      })}
      href={href}
      target={openInCurrentTab ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
