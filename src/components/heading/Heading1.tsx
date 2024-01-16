import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { SemanticColorType } from "../../utils/colorSchemeTypes";

interface CustomStyle {
  textColor?: string;
}

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ComponentChildren;
  className?: string;
  colorScheme?: SemanticColorType;
  customStyle?: CustomStyle;
}

export default function Heading1({
  children,
  className,
  colorScheme,
  customStyle = { textColor: "text-zinc-950 dark:text-zinc-50" },
  ...props
}: Props) {
  return (
    <h1
      className={clsx("text-3xl font-bold", className, {
        "text-green-600 dark:text-green-400": colorScheme === "success",
        "text-blue-600 dark:text-blue-400": colorScheme === "info",
        "text-orange-600 dark:text-orange-400": colorScheme === "warning",
        "text-red-600 dark:text-red-400": colorScheme === "danger",
        [customStyle.textColor ?? ""]: colorScheme === undefined,
      })}
      {...props}
    >
      {children}
    </h1>
  );
}
