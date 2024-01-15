import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { BasicColorType } from "../../utils/colorType";

interface Props {
  children: ComponentChildren;
  className?: string;
  path: string;
  onClick(): void;
  type?: BasicColorType;
  color?: string;
}

export default function InternalLink({
  children,
  className,
  path,
  onClick,
  type,
  color = "text-blue-600 dark:text-blue-400",
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
      href={path}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}
