import { clsx } from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  PrimaryAndSecondaryColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../utils/colorSchemeTypes";
import Icon from "../Icon";
import Row from "../layout/Row";
import LoadingIcon from "../loading/LoadingIcon";
import SmallText from "../text/SmallText";
import Text from "../text/Text";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "loading"> {
  children?: ComponentChild;
  leftIcon?: ComponentChild;
  rightIcon?: ComponentChild;
  className?: string;
  colorScheme?:
    | UnsetColorType
    | PrimaryAndSecondaryColorType
    | SemanticColorType;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  fullWidth?: boolean;
}

export default function OutlineButton({
  children,
  leftIcon,
  rightIcon,
  className,
  colorScheme = "primary",
  loading = false,
  disabled = false,
  small = false,
  fullWidth = false,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "border shadow rounded disabled:opacity-70",
        {
          "px-3 py-1.5": !small && !leftIcon && !rightIcon,
          "pl-2 pr-3 py-1.5": !small && leftIcon && !rightIcon,
          "pl-3 pr-2 py-1.5": !small && !leftIcon && rightIcon,
          "px-2 py-1.5": !small && leftIcon && rightIcon,
          "p-1": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
          "w-min": !fullWidth,
          "w-full": fullWidth,
        },
        className,
        {
          "border-blue-600 enabled:hover:(border-blue-700 bg-blue-700)":
            colorScheme === "primary",
          "border-zinc-500 enabled:(hover:border-zinc-300 hover:bg-zinc-300 hover:dark:border-zinc-700 hover:dark:bg-zinc-700)":
            colorScheme === "secondary",
          "border-green-600 enabled:hover:(border-green-700 bg-green-700)":
            colorScheme === "success",
          "border-orange-600 enabled:hover:(border-orange-700 bg-orange-700)":
            colorScheme === "warning",
          "border-red-600 enabled:hover:(border-red-700 bg-red-700)":
            colorScheme === "danger",
        },
        colorScheme !== "unset" && "text-zinc-950 dark:text-zinc-50",
        colorScheme !== "unset" &&
          colorScheme !== "secondary" &&
          "enabled:hover:text-zinc-50",
      )}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
      {...props}
    >
      <Row
        className="items-end justify-center"
        gap={small ? "gap-0.5" : "gap-1"}
        itemsCenter
        nowrap
      >
        {leftIcon && <Icon colorScheme="unset" icon={leftIcon} />}
        {children &&
          (small ? (
            <SmallText className="whitespace-nowrap" colorScheme="unset">
              {children}
            </SmallText>
          ) : (
            <Text className="whitespace-nowrap" colorScheme="unset">
              {children}
            </Text>
          ))}
        {rightIcon && <Icon colorScheme="unset" icon={rightIcon} />}
        {loading && <LoadingIcon colorScheme="unset" size={small ? 16 : 20} />}
      </Row>
    </button>
  );
}
