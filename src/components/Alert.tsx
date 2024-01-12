import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../utils/colorType";

interface Props {
  children: ComponentChildren;
  type?: BasicColorType;
  borderColor?: string;
}

export default function Alert({ children, type, borderColor = "" }: Props) {
  return (
    <div
      className={clsx("p-4 rounded-lg border-2 shadow", {
        "border-green-600": type === "success",
        "border-blue-600": type === "info",
        "border-orange-600": type === "warning",
        "border-red-600": type === "danger",
        [borderColor]: type === undefined,
      })}
    >
      {children}
    </div>
  );
}
