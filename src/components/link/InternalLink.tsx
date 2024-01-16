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
  path: string;
  onClick(): void;
  colorScheme?: SemanticColorType;
  customStyle?: CustomStyle;
}

export default function InternalLink({
  children,
  className,
  path,
  onClick,
  colorScheme,
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
      href={path}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      {...props}
    >
      {children}
    </a>
  );
}
