import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { SemanticColorType } from "../utils/colorSchemeTypes";

interface CustomStyle {
  backgroundColor?: string;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ComponentChildren;
  colorScheme?: SemanticColorType;
  customStyle?: CustomStyle;
}

export default function Notice({
  children,
  colorScheme,
  customStyle = {},
  ...props
}: Props) {
  return (
    <div
      className={clsx("p-4 rounded-lg shadow", {
        "bg-green-100 dark:bg-green-950": colorScheme === "success",
        "bg-blue-100 dark:bg-blue-950": colorScheme === "info",
        "bg-orange-100 dark:bg-orange-950": colorScheme === "warning",
        "bg-red-100 dark:bg-red-950": colorScheme === "danger",
        [customStyle.backgroundColor ?? ""]: colorScheme === undefined,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
