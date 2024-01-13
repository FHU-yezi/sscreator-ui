import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function VerticalScoll({ children, className }: Props) {
  return <div className={clsx(className, "overflow-y-auto")}>{children}</div>;
}