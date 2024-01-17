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
  fullWidth?: boolean;
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
  fullWidth = false,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "shadow rounded transition-colors disabled:opacity-70",
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
          "bg-blue-600 enabled:hover:bg-blue-700": colorScheme === "primary",
          "bg-zinc-200 enabled:hover:bg-zinc-300": colorScheme === "secondary",
          "bg-green-700 enabled:hover:bg-green-800": colorScheme === "success",
          "bg-orange-600 enabled:hover:bg-orange-700":
            colorScheme === "warning",
          "bg-red-600 enabled:hover:bg-red-700": colorScheme === "danger",
        },
        colorScheme !== "unset" &&
          (colorScheme === "secondary" ? "text-zinc-950" : "text-zinc-50"),
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
