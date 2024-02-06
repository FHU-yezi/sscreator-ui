import { clsx } from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  PrimaryAndSecondaryColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../types/colorSchemeTypes";
import Icon from "../Icon";
import Row from "../layout/Row";
import LoadingIcon from "../loading/LoadingIcon";
import SmallText from "../text/SmallText";
import Text from "../text/Text";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "loading"> {
  children?: ComponentChild;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
  colorScheme?:
    | UnsetColorType
    | PrimaryAndSecondaryColorType
    | SemanticColorType;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
}

export default function TextButton({
  children,
  className,
  leftIcon,
  rightIcon,
  colorScheme = "primary",
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
            colorScheme === "primary",
          "text-zinc-950 dark:text-zinc-50 enabled:hover:(text-zinc-700 dark:text-zinc-300)":
            colorScheme === "secondary",
          "text-green-600 dark:text-green-400 enabled:hover:(text-green-800 dark:text-green-600)":
            colorScheme === "success",
          "text-orange-600 dark:text-orange-400 enabled:hover:(text-orange-800 dark:text-orange-600)":
            colorScheme === "warning",
          "text-red-600 dark:text-red-400 enabled:hover:(text-red-800 dark:text-red-600)":
            colorScheme === "danger",
        },
      )}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
      {...props}
    >
      <Row gap="gap-1" itemsCenter>
        {leftIcon && (
          <Icon className="text-2xl" colorScheme="unset" icon={leftIcon} />
        )}
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
      </Row>
      {loading && (
        <LoadingIcon
          className={small ? "text-lg" : "text-xl"}
          colorScheme="unset"
        />
      )}
    </button>
  );
}
