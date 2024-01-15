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

interface Props {
  children?: ComponentChildren;
  className?: string;
  onClick(): void;
  colorScheme?: PrimaryAndSecondaryColorType | SemanticColorType;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
}

export default function SolidButton({
  children,
  className,
  onClick,
  colorScheme,
  color = "",
  loading = false,
  disabled = false,
}: Props) {
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
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
    >
      <Row className="justify-center" gap="gap-2" itemsCenter nowrap>
        {loading && (
          <Icon
            icon={<TbLoader2 className="motion-safe:animate-spin" />}
            color={clsx({
              "text-blue-600 enabled:hover:text-blue-800":
                colorScheme === "primary",
              "text-zinc-950 enabled:hover:text-zinc-700 dark:(text-zinc-50 enabled:hover:text-zinc-400)":
                colorScheme === "secondary",
              "text-green-700 enabled:hover:text-green-900":
                colorScheme === "success",
              "text-orange-600 enabled:hover:text-orange-800":
                colorScheme === "warning",
              "text-red-600 enabled:hover:text-red-800":
                colorScheme === "danger",
              [color]: colorScheme === undefined,
            })}
          />
        )}
        <Text
          color={clsx({
            "text-blue-600 enabled:hover:text-blue-800":
              colorScheme === "primary",
            "text-zinc-950 enabled:hover:text-zinc-700 dark:(text-zinc-50 enabled:hover:text-zinc-400)":
              colorScheme === "secondary",
            "text-green-700 enabled:hover:text-green-900":
              colorScheme === "success",
            "text-orange-600 enabled:hover:text-orange-800":
              colorScheme === "warning",
            "text-red-600 enabled:hover:text-red-800": colorScheme === "danger",
            [color]: colorScheme === undefined,
          })}
        >
          {children}
        </Text>
      </Row>
    </button>
  );
}
