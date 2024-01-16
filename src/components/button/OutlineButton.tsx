import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import { TbLoader2 } from "react-icons/tb";
import type {
  PrimaryAndSecondaryColorType,
  SemanticColorType,
} from "../../utils/colorSchemeTypes";
import Icon from "../Icon";
import Row from "../layout/Row";
import Text from "../text/Text";

interface CustomStyle {
  backgroundColor?: string;
  textColor?: string;
}

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "loading"> {
  children?: ComponentChildren;
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
  className,
  colorScheme,
  loading = false,
  disabled = false,
  small = false,
  fullWidth = false,
  customStyle = {},
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "border-2 shadow rounded transition-colors disabled:opacity-70 group",
        {
          "px-3 py-1.5": !small,
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
      <Row className="justify-center" gap="gap-2" itemsCenter nowrap>
        {loading && (
          <Icon
            icon={<TbLoader2 className="motion-safe:animate-spin" />}
            customStyle={{
              textColor: clsx({
                "text-zinc-950 dark:text-zinc-50 group-enabled:group-hover:text-zinc-50":
                  colorScheme !== undefined && colorScheme !== "secondary",
                "text-zinc-950 dark:text-zinc-50": colorScheme === "secondary",
                [customStyle.textColor ?? ""]: colorScheme === undefined,
              }),
            }}
          />
        )}
        <Text
          className="transition-colors"
          customStyle={{
            textColor: clsx({
              "text-zinc-950 dark:text-zinc-50 group-enabled:group-hover:text-zinc-50":
                colorScheme !== undefined && colorScheme !== "secondary",
              "text-zinc-950 dark:text-zinc-50": colorScheme === "secondary",
              [customStyle.textColor ?? ""]: colorScheme === undefined,
            }),
          }}
        >
          {children}
        </Text>
      </Row>
    </button>
  );
}
