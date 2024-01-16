import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ComponentChildren;
  className?: string;
}

export default function Center({ children, className, ...props }: Props) {
  return (
    <div className={clsx(className, "grid place-content-center")} {...props}>
      {children}
    </div>
  );
}
