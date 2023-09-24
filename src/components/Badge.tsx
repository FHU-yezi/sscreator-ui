import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Text from "./typography/Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  textColor?: string;
  backgroundColor: string;
  rounded?: string;
}

export default function Badge({
  children,
  className,
  textColor,
  backgroundColor,
  rounded = "rounded",
}: Props) {
  return (
    <Text
      className={clsx(className, "w-fit py-1 px-2", backgroundColor, rounded)}
      color={textColor}
      small
      bold
      nowrap
      truncate
      inline
    >
      {children}
    </Text>
  );
}
