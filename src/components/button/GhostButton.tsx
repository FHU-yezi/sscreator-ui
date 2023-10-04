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
  hoverBackgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
  ariaLabel?: string;
}

export default function GhostButton({
  children,
  className,
  onClick,
  hoverBackgroundColor = "hover:bg-blue-100 dark:hover:bg-blue-950",
  loading = false,
  disabled = false,
  fullWidth = false,
  iconOnly = false,
  ariaLabel,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(className, "transition-all duration-250 rounded-md", {
        [hoverBackgroundColor]: !loading && !disabled,
        "active:scale-95 duration-300": !loading && !disabled,
        "hover:shadow": !loading && !disabled,
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
        <Text color="text-blue-600 dark:text-blue-400" bold>
          <Row gap="gap-2" className="items-center">
            {children}
            {loading && <LoadingIcon noWrapInText />}
          </Row>
        </Text>
      </Center>
    </button>
  );
}
