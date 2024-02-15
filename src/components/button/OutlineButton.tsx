import { clsx } from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  BlackColorType,
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
  color?:
    | UnsetColorType
    | PrimaryColorType
    | BlackColorType
    | SemanticColorType;
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
        "border shadow rounded disabled:opacity-60 inline-flex justify-center items-center",
        {
          "px-3 py-1.5 gap-2": !small,
          "px-1.5 py-1 gap-2": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
          "w-min": !fullWidth,
          "w-full": fullWidth,
        },
        className,
        color !== "unset" &&
          "text-zinc-950 dark:text-zinc-50 enabled:hover:text-zinc-50",
        {
          "border-blue-600 enabled:hover:bg-blue-600": color === "primary",
          "border-zinc-700 enabled:hover:bg-zinc-700": color === "black",
          "border-green-700 enabled:hover:bg-green-700": color === "success",
          "border-orange-700 enabled:hover:bg-orange-700": color === "warning",
          "border-red-600 enabled:hover:bg-red-600": color === "danger",
        },
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
