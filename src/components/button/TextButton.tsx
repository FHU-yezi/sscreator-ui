import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
import { TbLoader2 } from "react-icons/tb";
import { Icon, Row, Text } from "../../main";
import type { FullColorType } from "../../utils/colorType";

interface Props {
  children?: ComponentChildren;
  className?: string;
  onClick(): void;
  type?: FullColorType;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
}

export default function SolidButton({
  children,
  className,
  onClick,
  type,
  color = "",
  loading = false,
  disabled = false,
}: Props) {
  return (
    <button
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
              "text-blue-600 enabled:hover:text-blue-800": type === "primary",
              "text-zinc-950 enabled:hover:text-zinc-700 dark:(text-zinc-50 enabled:hover:text-zinc-400)":
                type === "secondary",
              "text-green-700 enabled:hover:text-green-900": type === "success",
              "text-orange-600 enabled:hover:text-orange-800":
                type === "warning",
              "text-red-600 enabled:hover:text-red-800": type === "danger",
              [color]: type === undefined,
            })}
          />
        )}
        <Text
          color={clsx({
            "text-blue-600 enabled:hover:text-blue-800": type === "primary",
            "text-zinc-950 enabled:hover:text-zinc-700 dark:(text-zinc-50 enabled:hover:text-zinc-400)":
              type === "secondary",
            "text-green-700 enabled:hover:text-green-900": type === "success",
            "text-orange-600 enabled:hover:text-orange-800": type === "warning",
            "text-red-600 enabled:hover:text-red-800": type === "danger",
            [color]: type === undefined,
          })}
        >
          {children}
        </Text>
      </Row>
    </button>
  );
}
