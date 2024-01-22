import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ComponentChildren;
  className?: string;
  shadow?: boolean;
  borderless?: boolean;
  noRounded?: boolean;
  withPadding?: boolean;
}

export default function Card({
  children,
  className,
  shadow = false,
  borderless = false,
  noRounded = false,
  withPadding = false,
  ...props
}: Props) {
  return (
    <div
      className={clsx(className, {
        shadow,
        "border border-zinc-300 dark:border-zinc-700": !borderless,
        rounded: !noRounded,
        "p-4": withPadding,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
