import { clsx } from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import { TbLoader2 } from "react-icons/tb";
import type {
  PrimaryAndSecondaryColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../utils/colorSchemeTypes";
import Icon from "../Icon";
import Row from "../layout/Row";
import SmallText from "../text/SmallText";
import Text from "../text/Text";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "loading"> {
  children?: ComponentChild;
  leftIcon?: ComponentChild;
  rightIcon?: ComponentChild;
  className?: string;
  colorScheme:
    | UnsetColorType
    | PrimaryAndSecondaryColorType
    | SemanticColorType;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
}

export default function SolidButton({
  children,
  leftIcon,
  rightIcon,
  className,
  colorScheme,
  loading = false,
  disabled = false,
  small = false,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "transition-colors disabled:opacity-70 w-min",
        {
          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
        },
        className,
        {
          "text-blue-600 enabled:hover:text-blue-800":
            colorScheme === "primary",
          "text-zinc-950 enabled:hover:text-zinc-700 dark:(text-zinc-50 enabled:hover:text-zinc-400)":
            colorScheme === "secondary",
          "text-green-700 enabled:hover:text-green-900":
            colorScheme === "success",
          "text-orange-600 enabled:hover:text-orange-800":
            colorScheme === "warning",
          "text-red-600 enabled:hover:text-red-800": colorScheme === "danger",
        },
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
        {loading && (
          <Icon
            colorScheme="unset"
            icon={
              <TbLoader2
                className="motion-safe:animate-spin"
                size={small ? 16 : 20}
              />
            }
          />
        )}
      </Row>
    </button>
  );
}
