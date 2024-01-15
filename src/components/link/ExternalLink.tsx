import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { SemanticColorType } from "../../utils/colorSchemeTypes";

interface CustomStyle {
  textColor?: string;
}

interface Props {
  children: ComponentChildren;
  className?: string;
  href: string;
  colorScheme?: SemanticColorType;
  openInCurrentTab?: boolean;
  customStyle?: CustomStyle;
}

export default function ExternalLink({
  children,
  className,
  href,
  colorScheme,
  openInCurrentTab = false,
  customStyle = { textColor: "text-blue-600 dark:text-blue-400" },
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
      href={href}
      target={openInCurrentTab ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
