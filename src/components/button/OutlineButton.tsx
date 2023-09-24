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
  borderColor?: string;
  hoverColor?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
  ariaLabel?: string;
}

export default function OutlineButton({
  children,
  className,
  onClick,
  borderColor = "border-blue-600",
  hoverColor = "hover:bg-blue-100 dark:hover:bg-blue-950",
  loading = false,
  disabled = false,
  fullWidth = false,
  iconOnly = false,
  ariaLabel,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        className,
        "transition-all border-2 rounded-md shadow",
        borderColor,
        {
          [hoverColor]: !loading && !disabled,
          "active:scale-95 duration-300": !loading && !disabled,
          "opacity-70": loading || disabled,
          "cursor-wait": loading,
          "cursor-not-allowed": disabled,

          "w-full": fullWidth,
          "px-4 py-2": !iconOnly,
          "p-2": iconOnly,
        },
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <Center className="h-fit">
        <Text bold>
          <Row gap="gap-2" className="items-center">
            {children}
            {loading && <LoadingIcon noWrapInText />}
          </Row>
        </Text>
      </Center>
    </button>
  );
}
