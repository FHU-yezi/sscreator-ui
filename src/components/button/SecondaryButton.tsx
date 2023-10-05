import clsx from "clsx";
import type { ComponentChildren } from "preact";
import LoadingIcon from "../LoadingIcon";
import Center from "../layout/Center";
import Row from "../layout/Row";
import Text from "../typography/Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  onClick?(): void;
  color?: string;
  hoverColor?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
  ariaLabel?: string;
}

export default function SecondaryButton({
  children,
  className,
  onClick,
  color = "bg-blue-200 dark:bg-blue-900",
  hoverColor = "hover:bg-blue-300 dark:hover:bg-blue-800",
  loading = false,
  disabled = false,
  fullWidth = false,
  iconOnly = false,
  ariaLabel,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(className, "transition-all rounded-md shadow", color, {
        [hoverColor]: !loading && !disabled,
        "active:scale-95 duration-300": !loading && !disabled,
        "opacity-70": loading || disabled,
        "cursor-wait": loading,
        "cursor-not-allowed": disabled,

        "w-full": fullWidth,
        "px-4 py-2": !iconOnly,
        "p-2": iconOnly,
      })}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <Center className="h-fit">
        <Text bold>
          <Row gap="gap-2" verticalCenter>
            {children}
            {loading && <LoadingIcon />}
          </Row>
        </Text>
      </Center>
    </button>
  );
}
