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
  customStyle = {},
  ...props
}: Props) {
  const textCustomStyle = {
    textColor: clsx({
      "text-blue-600 enabled:hover:text-blue-800": colorScheme === "primary",
      "text-zinc-950 enabled:hover:text-zinc-700 dark:(text-zinc-50 enabled:hover:text-zinc-400)":
        colorScheme === "secondary",
      "text-green-700 enabled:hover:text-green-900": colorScheme === "success",
      "text-orange-600 enabled:hover:text-orange-800":
        colorScheme === "warning",
      "text-red-600 enabled:hover:text-red-800": colorScheme === "danger",
      [customStyle.textColor ?? ""]: colorScheme === undefined,
    }),
  };

  return (
    <button
      type="button"
      className={clsx(
        "transition-colors disabled:opacity-70 group",
        {
          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
        },
        className,
      )}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
      {...props}
    >
      <Row
        className="w-min items-end justify-center"
        gap="gap-1"
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
        {small ? (
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
        )}
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
