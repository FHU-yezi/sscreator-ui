import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
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

interface Props {
  children?: ComponentChildren;
  className?: string;
  onClick(): void;
  colorScheme?: PrimaryAndSecondaryColorType | SemanticColorType;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  customStyle?: CustomStyle;
}

export default function SolidButton({
  children,
  className,
  onClick,
  colorScheme,
  loading = false,
  disabled = false,
  small = false,
  fullWidth = false,
  customStyle = {},
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "shadow rounded transition-colors disabled:opacity-70 group",
        {
          "px-3 py-1.5": !small,
          "p-1": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
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
          [customStyle.backgroundColor ?? ""]: colorScheme === undefined,
        },
      )}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
    >
      <Row className="justify-center" gap="gap-2" itemsCenter nowrap>
        {loading && (
          <Icon
            icon={<TbLoader2 className="motion-safe:animate-spin" />}
            customStyle={{
              textColor: clsx({
                "text-zinc-50":
                  colorScheme !== undefined && colorScheme !== "secondary",
                "text-zinc-950": colorScheme === "secondary",
                [customStyle.textColor ?? ""]: colorScheme === undefined,
              }),
            }}
          />
        )}
        <Text
          customStyle={{
            textColor: clsx({
              "text-zinc-50":
                colorScheme !== undefined && colorScheme !== "secondary",
              "text-zinc-950": colorScheme === "secondary",
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
