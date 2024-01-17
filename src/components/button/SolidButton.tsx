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
  customStyle = {},
  ...props
}: Props) {
  const textCustomStyle = {
    textColor: clsx({
      "text-zinc-50": colorScheme !== undefined && colorScheme !== "secondary",
      "text-zinc-950": colorScheme === "secondary",
      [customStyle.textColor ?? ""]: colorScheme === undefined,
    }),
  };

  return (
    <button
      type="button"
      className={clsx(
        "shadow rounded transition-colors disabled:opacity-70 group",
        {
          "px-3 py-1.5": !small && !leftIcon && !rightIcon,
          "pl-2 pr-3 py-1.5": !small && leftIcon && !rightIcon,
          "pl-3 pr-2 py-1.5": !small && !leftIcon && rightIcon,
          "px-2 py-1.5": !small && leftIcon && rightIcon,
          "p-1": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
          "w-min": !fullWidth,
        },
        className,
        {
          "bg-blue-600 enabled:hover:bg-blue-700": colorScheme === "primary",
          "bg-zinc-200 enabled:hover:bg-zinc-300": colorScheme === "secondary",
          "bg-green-700 enabled:hover:bg-green-800": colorScheme === "success",
          "bg-orange-600 enabled:hover:bg-orange-700":
            colorScheme === "warning",
          "bg-red-600 enabled:hover:bg-red-700": colorScheme === "danger",
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
        itemsCenter
        nowrap
      >
        {leftIcon && (
          <Icon
            className="transition-colors"
            icon={leftIcon}
            customStyle={textCustomStyle}
          />
        )}
        {children &&
          (small ? (
            <SmallText
              className="whitespace-nowrap transition-colors"
              customStyle={textCustomStyle}
            >
              {children}
            </SmallText>
          ) : (
            <Text
              className="whitespace-nowrap transition-colors"
              customStyle={textCustomStyle}
            >
              {children}
            </Text>
          ))}
        {rightIcon && (
          <Icon
            className="transition-colors"
            icon={rightIcon}
            customStyle={textCustomStyle}
          />
        )}
        {loading && (
          <Icon
            className="transition-colors"
            icon={
              <TbLoader2
                className="motion-safe:animate-spin"
                size={small ? 16 : 20}
              />
            }
            customStyle={textCustomStyle}
          />
        )}
      </Row>
    </button>
  );
}
