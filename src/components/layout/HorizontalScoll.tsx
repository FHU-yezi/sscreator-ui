import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function HorizontalScoll({ children, className }: Props) {
  return <div className={clsx(className, "overflow-x-auto")}>{children}</div>;
}