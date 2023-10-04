import type { ComponentChildren, ComponentType } from "preact";
import { useErrorBoundary } from "preact/hooks";

export interface FallbackComponentProps {
  error: Error;
}

interface Props {
  children: ComponentChildren;
  FallbackComponent: ComponentType<FallbackComponentProps>;
}

export default function ErrorBoundary({ children, FallbackComponent }: Props) {
  const [error] = useErrorBoundary();

  if (error) {
    return <FallbackComponent error={error} />;
  }

  return children;
}
