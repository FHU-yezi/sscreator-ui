import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { SemanticColorType } from "../utils/colorSchemeTypes";

interface Props {
  children: ComponentChildren;
  colorScheme?: SemanticColorType;
  backgroundColor?: string;
}

export default function Notice({
  children,
  colorScheme,
  backgroundColor = "",
}: Props) {
  return (
    <div
      className={clsx("p-4 rounded-lg shadow", {
        "bg-green-100 dark:bg-green-950": colorScheme === "success",
        "bg-blue-100 dark:bg-blue-950": colorScheme === "info",
        "bg-orange-100 dark:bg-orange-950": colorScheme === "warning",
        "bg-red-100 dark:bg-red-950": colorScheme === "danger",
        [backgroundColor]: colorScheme === undefined,
      })}
    >
      {children}
    </div>
  );
}
