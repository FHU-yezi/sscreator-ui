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

export default function SolidButton({
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
        "shadow rounded disabled:opacity-60 inline-flex justify-center items-center",
        {
          "px-3 py-1.5 gap-1": !small,
          "px-1.5 py-1 gap-1.5": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
          "w-min": !fullWidth,
          "w-full": fullWidth,
        },
        className,
        color !== "unset" && "text-zinc-50",
        {
          "bg-blue-600 enabled:hover:bg-blue-700": color === "primary",
          "bg-zinc-700 enabled:hover:bg-zinc-800": color === "black",
          "bg-green-700 enabled:hover:bg-green-800": color === "success",
          "bg-orange-700 enabled:hover:bg-orange-800": color === "warning",
          "bg-red-600 enabled:hover:bg-red-700": color === "danger",
        },
      )}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
      {...props}
    >
      {leftIcon && (
        <Icon
          className={small ? "text-lg" : "text-xl"}
          color="unset"
          icon={leftIcon}
        />
      )}
      {children &&
        (small ? (
          <SmallText color="unset" nowrap>
            {children}
          </SmallText>
        ) : (
          <Text color="unset" nowrap>
            {children}
          </Text>
        ))}
      {rightIcon && (
        <Icon
          className={small ? "text-lg" : "text-xl"}
          color="unset"
          icon={rightIcon}
        />
      )}
      {loading && (
        <LoadingIcon className={small ? "text-lg" : "text-xl"} color="unset" />
      )}
    </button>
  );
}
