import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function Footer({ children, className }: Props) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <footer className={clsx(className, "flex flex-col gap-2 py-4")}>
        {children}
      </footer>
    </div>
  );
}
