import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Text from "./Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export default function Key({
  children,
  className,
  textColor,
  borderColor = "border-zinc-200 dark:border-zinc-700",
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
}: Props) {
  return (
    <Text
      className={clsx(
        className,
        "shadow mx-1 px-1 border inline-block rounded",
        borderColor,
        backgroundColor,
      )}
      color={textColor}
      nowrap
      inline
    >
      {" "}
      {children}{" "}
    </Text>
  );
}
