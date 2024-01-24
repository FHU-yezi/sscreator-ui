import type { ComponentChildren } from "preact";
import { Suspense } from "preact/compat";
import LoadingPage from "./loading/LoadingPage";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function Main({ children, className }: Props) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <main className={className}>{children} </main>
    </Suspense>
  );
}
