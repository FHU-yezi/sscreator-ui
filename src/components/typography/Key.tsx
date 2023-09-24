import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Text from "./Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export default function Key({
  children,
  className,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
  borderColor = "border-zinc-200 dark:border-zinc-700",
}: Props) {
  return (
    <Text
      className={clsx(
        className,
        "shadow mx-1 px-1 border inline-block rounded",
        backgroundColor,
        borderColor,
      )}
      bold
    >
      {" "}
      {children}{" "}
    </Text>
  );
}
