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
        "disabled:opacity-70 w-min inline-flex justify-center items-center",
        {
          "gap-2": !small,
          "gap-1": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
        },
        className,
        {
          "text-blue-600 dark:text-blue-400 enabled:hover:(text-blue-800 dark:text-blue-600)":
            color === "primary",
          "text-zinc-950 dark:text-zinc-50 enabled:hover:(text-zinc-700 dark:text-zinc-300)":
            color === "gray",
          "text-green-600 dark:text-green-400 enabled:hover:(text-green-800 dark:text-green-600)":
            color === "success",
          "text-orange-600 dark:text-orange-400 enabled:hover:(text-orange-800 dark:text-orange-600)":
            color === "warning",
          "text-red-600 dark:text-red-400 enabled:hover:(text-red-800 dark:text-red-600)":
            color === "danger",
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
