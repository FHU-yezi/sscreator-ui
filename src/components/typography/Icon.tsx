import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  iconColor?: string;
}

export default function Icon({
  children,
  className,
  iconColor = "text-zinc-950 dark:text-zinc-50",
}: Props) {
  return (
    <span className={clsx(className, "inline-block", iconColor)}>
      {children}
    </span>
  );
}
