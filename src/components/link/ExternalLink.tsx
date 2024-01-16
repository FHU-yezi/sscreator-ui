import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { SemanticColorType } from "../../utils/colorSchemeTypes";

interface CustomStyle {
  textColor?: string;
}

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: ComponentChildren;
  className?: string;
  colorScheme?: SemanticColorType;
  openInCurrentTab?: boolean;
  customStyle?: CustomStyle;
}

export default function ExternalLink({
  children,
  className,
  colorScheme,
  openInCurrentTab = false,
  customStyle = { textColor: "text-blue-600 dark:text-blue-400" },
  ...props
}: Props) {
  return (
    <a
      className={clsx("underline", className, {
        "text-green-600 dark:text-green-400": colorScheme === "success",
        "text-blue-600 dark:text-blue-400": colorScheme === "info",
        "text-orange-600 dark:text-orange-400": colorScheme === "warning",
        "text-red-600 dark:text-red-400": colorScheme === "danger",
        [customStyle.textColor ?? ""]: colorScheme === undefined,
      })}
      target={openInCurrentTab ? "_self" : "_blank"}
      {...props}
    >
      {children}
    </a>
  );
}
