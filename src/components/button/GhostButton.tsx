import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import LoadingIcon from "../LoadingIcon";
import Row from "../layout/Row";
import Icon from "../typography/Icon";
import Text from "../typography/Text";

interface Props {
  children?: ComponentChildren;
  className?: string;
  icon?: ComponentChild;
  onClick?(): void;
  textColor?: string;
  hoverBackgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
}

export default function GhostButton({
  children,
  className,
  icon,
  onClick,
  textColor = "text-blue-600 dark:text-blue-400",
  hoverBackgroundColor = "hover:bg-blue-100 dark:hover:bg-blue-950",
  loading = false,
  disabled = false,
  fullWidth = false,
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

        "w-fit": !fullWidth,
        "w-full": fullWidth,
        "px-4 py-2": children,
        "p-2": icon && !children,
      })}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <Row
        className={fullWidth ? "justify-center" : undefined}
        gap="gap-2"
        verticalCenter
      >
        {icon && <Icon iconColor={textColor}>{icon}</Icon>}
        {children && (
          <Text color={textColor} bold>
            {children}
          </Text>
        )}
        {loading && <LoadingIcon iconColor={textColor} />}
      </Row>
    </button>
  );
}
