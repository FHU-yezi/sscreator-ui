import { clsx } from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  GrayColorType,
  PrimaryColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../types/colorTypes";
import Icon from "../Icon";
import Row from "../layout/Row";
import LoadingIcon from "../loading/LoadingIcon";
import SmallText from "../text/SmallText";
import Text from "../text/Text";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "loading"> {
  children?: ComponentChild;
  className?: string;
  color?: UnsetColorType | PrimaryColorType | GrayColorType | SemanticColorType;
  leftIcon?: string;
  rightIcon?: string;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  fullWidth?: boolean;
}

export default function OutlineButton({
  children,
  className,
  color = "primary",
  leftIcon,
  rightIcon,
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
        "border shadow rounded disabled:opacity-70 inline-flex justify-center items-center",
        {
          "gap-2": !small,
          "px-3 py-1.5": !small && !leftIcon && !rightIcon,
          "pl-2 pr-3 py-1.5": !small && leftIcon && !rightIcon,
          "pl-3 pr-2 py-1.5": !small && !leftIcon && rightIcon,
          "px-2 py-1.5": !small && leftIcon && rightIcon,
          "gap-1 p-1": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
          "w-min": !fullWidth,
          "w-full": fullWidth,
        },
        className,
        {
          "border-blue-600 enabled:hover:(border-blue-700 bg-blue-700)":
            color === "primary",
          "border-zinc-500 enabled:(hover:border-zinc-300 hover:bg-zinc-300 hover:dark:border-zinc-700 hover:dark:bg-zinc-700)":
            color === "gray",
          "border-green-600 enabled:hover:(border-green-700 bg-green-700)":
            color === "success",
          "border-orange-600 enabled:hover:(border-orange-700 bg-orange-700)":
            color === "warning",
          "border-red-600 enabled:hover:(border-red-700 bg-red-700)":
            color === "danger",
        },
        color !== "unset" && "text-zinc-950 dark:text-zinc-50",
        color !== "unset" && color !== "gray" && "enabled:hover:text-zinc-50",
      )}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
      {...props}
    >
      <Row gap="gap-1" itemsCenter>
        {leftIcon && (
          <Icon className="text-2xl" color="unset" icon={leftIcon} />
        )}
        {children &&
          (small ? (
            <SmallText className="whitespace-nowrap" color="unset">
              {children}
            </SmallText>
          ) : (
            <Text className="whitespace-nowrap" color="unset">
              {children}
            </Text>
          ))}
        {rightIcon && <Icon color="unset" icon={rightIcon} />}
      </Row>
      {loading && (
        <LoadingIcon className={small ? "text-lg" : "text-xl"} color="unset" />
      )}
    </button>
  );
}
