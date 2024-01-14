import clsx from "clsx";
import type { ComponentChild } from "preact";

interface Props {
  icon: ComponentChild;
  className?: string;
  color?: string;
}

export default function Icon({
  icon,
  className,
  color = "text-zinc-950 dark:text-zinc-50",
}: Props) {
  return (
    <span className={clsx(className, "inline-block align-middle", color)}>
      {icon}
    </span>
  );
}
