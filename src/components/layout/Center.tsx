import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function Center({ children, className }: Props) {
  return (
    <div className={clsx(className, "grid place-content-center")}>
      {children}
    </div>
  );
}