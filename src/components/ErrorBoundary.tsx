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

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{error ? <FallbackComponent error={error} /> : children}</>
  );
}
