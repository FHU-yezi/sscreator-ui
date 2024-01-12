import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../../utils/colorType";

interface Props {
  children: ComponentChildren;
  className?: string;
  type?: BasicColorType;
  color?: string;
  bold?: boolean;
  inline?: boolean;
}

export default function Text({
  children,
  className,
  type,
  color = "text-zinc-950 dark:text-zinc-50",
  bold = false,
  inline = false,
}: Props) {
  return (
    <p
      className={clsx(
        className,
        {
          "text-green-600": type === "success",
          "text-blue-600": type === "info",
          "text-orange-600": type === "warning",
          "text-red-600": type === "danger",
          [color]: type === undefined,
        },
        {
          "font-bold": bold,
          inline,
        },
      )}
    >
      {children}
    </p>
  );
}
