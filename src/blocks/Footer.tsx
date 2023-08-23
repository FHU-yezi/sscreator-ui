import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  backgroundColor?: string;
}

export default function Footer({
  children,
  className,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-800",
}: Props) {
  return (
    <footer className={clsx(className, "py-6", backgroundColor)}>
      <div className="mx-auto max-w-4xl w-[90vw]">{children}</div>
    </footer>
  );
}
