import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  textColor?: string;
}

export default function Heading({ children, className, textColor }: Props) {
  return (
    <h1 className={clsx(className, "font-bold text-2xl", textColor)}>
      {children}
    </h1>
  );
}
