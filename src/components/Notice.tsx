import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../utils/colorType";

interface Props {
  children: ComponentChildren;
  type?: BasicColorType;
  backgroundColor?: string;
}

export default function Notice({
  children,
  type,
  backgroundColor = "",
}: Props) {
  return (
    <div
      className={clsx("p-4 rounded-lg shadow", {
        "bg-green-100 dark:bg-green-950": type === "success",
        "bg-blue-100 dark:bg-blue-950": type === "info",
        "bg-orange-100 dark:bg-orange-950": type === "warning",
        "bg-red-100 dark:bg-red-950": type === "danger",
        [backgroundColor]: type === undefined,
      })}
    >
      {children}
    </div>
  );
}
