import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  color?: string;
  gray?: boolean;
  small?: boolean;
  large?: boolean;
  bold?: boolean;
  center?: boolean;
  nowrap?: boolean;
  truncate?: boolean;
  inline?: boolean;
}

export default function Text({
  children,
  className,
  color = "text-zinc-950 dark:text-zinc-50",
  gray = false,
  small = false,
  large = false,
  bold = false,
  center = false,
  nowrap = false,
  truncate = false,
  inline = false,
}: Props) {
  return (
    <p
      className={clsx(className, {
        [color]: !gray,
        "text-zinc-500 dark:text-zinc-400": gray,

        "text-sm": small,
        "text-lg": large,
        "font-semibold": bold,

        "text-center": center,
        "whitespace-nowrap": nowrap,
        "line-clamp-1 text-ellipsis": truncate,
        inline,
      })}
    >
      {children}
    </p>
  );
}
