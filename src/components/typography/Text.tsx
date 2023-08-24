import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
  color?: string;
  isGray?: boolean;
  isSmall?: boolean;
  isLarge?: boolean;
  isBold?: boolean;
  isCenter?: boolean;
  isNoWrap?: boolean;
  isInline?: boolean;
}

export default function Text({
  children,
  className,
  color = "text-zinc-950 dark:text-zinc-50",
  isGray = false,
  isSmall = false,
  isLarge = false,
  isBold = false,
  isCenter = false,
  isNoWrap = false,
  isInline = false,
}: Props) {
  return (
    <p
      className={clsx(className, {
        [color]: !isGray,
        "text-zinc-500 dark:text-zinc-400": isGray,

        "text-sm": isSmall,
        "text-lg": isLarge,
        "font-semibold": isBold,

        "text-center": isCenter,
        "whitespace-nowrap": isNoWrap,
        inline: isInline,
      })}
    >
      {children}
    </p>
  );
}
