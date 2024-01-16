import { clsx } from "clsx";
import type { ComponentChild } from "preact";
import type { HTMLAttributes } from "preact/compat";
import { TbLoader2 } from "react-icons/tb";
import type {
  PrimaryAndSecondaryColorType,
  SemanticColorType,
} from "../../utils/colorSchemeTypes";
import Icon from "../Icon";
import Row from "../layout/Row";
import SmallText from "../text/SmallText";
import Text from "../text/Text";

interface CustomStyle {
  backgroundColor?: string;
  textColor?: string;
}

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "loading"> {
  children?: ComponentChild;
  leftIcon?: ComponentChild;
  rightIcon?: ComponentChild;
  className?: string;
  colorScheme?: PrimaryAndSecondaryColorType | SemanticColorType;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  customStyle?: CustomStyle;
}

export default function OutlineButton({
  children,
  leftIcon,
  rightIcon,
  className,
  colorScheme,
  loading = false,
  disabled = false,
  small = false,
  fullWidth = false,
  customStyle = {},
  ...props
}: Props) {
  const textCustomStyle = {
    textColor: clsx({
      "text-zinc-950 dark:text-zinc-50 group-enabled:group-hover:text-zinc-50":
        colorScheme !== undefined && colorScheme !== "secondary",
      "text-zinc-950 dark:text-zinc-50": colorScheme === "secondary",
      [customStyle.textColor ?? ""]: colorScheme === undefined,
    }),
  };

  return (
    <button
      type="button"
      className={clsx(
        "border-2 shadow rounded transition-colors disabled:opacity-70 group",
        {
          "px-3 py-1.5": !small && !leftIcon && !rightIcon,
          "pl-2 pr-3 py-1.5": !small && leftIcon && !rightIcon,
          "pl-3 pr-2 py-1.5": !small && !leftIcon && rightIcon,
          "px-2 py-1.5": !small && leftIcon && rightIcon,
          "p-1": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
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
          [customStyle.backgroundColor ?? ""]: colorScheme === undefined,
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
        nowrap
      >
        {loading && (
          <Icon
            className="transition-colors"
            icon={<TbLoader2 className="motion-safe:animate-spin" />}
            customStyle={textCustomStyle}
          />
        )}
        {leftIcon && (
          <Icon
            className="transition-colors"
            icon={leftIcon}
            customStyle={textCustomStyle}
          />
        )}
        {small ? (
          <SmallText
            className="transition-colors"
            customStyle={textCustomStyle}
          >
            {children}
          </SmallText>
        ) : (
          <Text className="transition-colors" customStyle={textCustomStyle}>
            {children}
          </Text>
        )}
        {rightIcon && (
          <Icon
            className="transition-colors"
            icon={rightIcon}
            customStyle={textCustomStyle}
          />
        )}
      </Row>
    </button>
  );
}
