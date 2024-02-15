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
}

export default function TextButton({
  children,
  className,
  color = "primary",
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  small = false,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "disabled:opacity-60 w-min inline-flex justify-center items-center",
        {
          "gap-1": !small,
          "gap-1.5": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
        },
        className,
        {
          "text-blue-600 enabled:hover:text-blue-800 dark:(text-blue-500 enabled:hover:text-blue-700)":
            color === "primary",
          "text-zinc-600 enabled:hover:text-zinc-800 dark:(text-zinc-400 enabled:hover:text-zinc-600)":
            color === "black",
          "text-green-700 enabled:hover:text-green-900 dark:(text-green-600 enabled:hover:text-green-800)":
            color === "success",
          "text-orange-700 enabled:hover:text-orange-900 dark:(text-orange-600 enabled:hover:text-orange-800)":
            color === "warning",
          "text-red-600 enabled:hover:text-red-800 dark:(text-red-500 enabled:hover:text-red-700)":
            color === "danger",
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
