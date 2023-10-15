import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Card from "../Card";

interface Props {
  children: ComponentChildren;
  className?: string;
  onClick?(): void;
  disabled?: boolean;
  ariaLabel?: string;
  padding?: string;
  margin?: string;
  rounded?: string;
  borderColor?: string;
  shadowColor?: string;
}

export default function CardButton({
  children,
  className,
  onClick,
  disabled = false,
  ariaLabel,
  padding,
  margin,
  rounded,
  borderColor,
  shadowColor,
}: Props) {
  return (
    <button
      type="button"
      className={clsx({
        "active:scale-95 duration-300 shadow": !disabled,
        "opacity-70": disabled,
        "cursor-not-allowed": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <Card
        className={className}
        padding={padding}
        margin={margin}
        rounded={rounded}
        borderColor={borderColor}
        shadowColor={shadowColor}
      >
        {children}
      </Card>
    </button>
  );
}
