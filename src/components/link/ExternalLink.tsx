import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../../utils/colorType";

interface Props {
  children: ComponentChildren;
  className?: string;
  href: string;
  type?: BasicColorType;
  color?: string;
  openInCurrentTab?: boolean;
}

export default function ExternalLink({
  children,
  className,
  href,
  type,
  color = "text-blue-600 dark:text-blue-400",
  openInCurrentTab = false,
}: Props) {
  return (
    <a
      className={clsx("underline", className, {
        "text-green-600 dark:text-green-400": type === "success",
        "text-blue-600 dark:text-blue-400": type === "info",
        "text-orange-600 dark:text-orange-400": type === "warning",
        "text-red-600 dark:text-red-400": type === "danger",
        [color]: type === undefined,
      })}
      href={href}
      target={openInCurrentTab ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
