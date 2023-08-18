import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Text({ children }: Props) {
  return <p>{children}</p>;
}
