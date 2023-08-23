import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function AppContainer({ children, className }: Props) {
  return (
    <main
      className={clsx(
        className,
        "mx-auto my-6 max-w-4xl min-h-screen w-[90vw]",
      )}
    >
      {children}
    </main>
  );
}
