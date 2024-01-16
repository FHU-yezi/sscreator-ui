import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ComponentChildren;
  className?: string;
}

export default function VerticalScoll({
  children,
  className,
  ...props
}: Props) {
  return (
    <div className={clsx(className, "overflow-y-auto")} {...props}>
      {children}
    </div>
  );
}
