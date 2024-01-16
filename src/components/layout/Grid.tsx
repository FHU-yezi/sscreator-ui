import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "cols"> {
  children: ComponentChildren;
  className?: string;
  gap?: string;
  cols: string;
}

export default function Grid({
  children,
  className,
  gap = "gap-4",
  cols,
  ...props
}: Props) {
  return (
    <div className={clsx(className, "grid", gap, cols)} {...props}>
      {children}
    </div>
  );
}
