import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Text from "./typography/Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  color: string;
}

export default function Badge({ children, className, color }: Props) {
  return (
    <Text
      className={clsx(className, "rounded-full w-fit py-1 px-3")}
      color={color}
      isSmall
      isBold
      isInline
    >
      {children}
    </Text>
  );
}
