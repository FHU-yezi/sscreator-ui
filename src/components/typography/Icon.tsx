import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  iconColor?: string;
}

export default function Icon({ children, className, iconColor }: Props) {
  return (
    <span className={clsx(className, "inline-block", iconColor)}>
      {children}
    </span>
  );
}
