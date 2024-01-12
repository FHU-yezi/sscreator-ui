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
  backgroundColor?: string;
  textColor?: string;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  fullWidth?: boolean;
}

export default function SolidButton({
  children,
  className,
  onClick,
  type,
  backgroundColor = "",
  textColor = "",
  loading = false,
  disabled = false,
  small = false,
  fullWidth = false,
}: Props) {
  return (
    <button
      className={clsx(
        "shadow rounded transition-color disabled:opacity-70 group",
        {
          "px-3 py-1.5": !small,
          "p-1": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
          "w-full": fullWidth,
        },
        className,
        {
          "bg-blue-600 enabled:hover:bg-blue-700": type === "primary",
          "bg-zinc-200 enabled:hover:bg-zinc-300": type === "secondary",
          "bg-green-700 enabled:hover:bg-green-800": type === "success",
          "bg-orange-600 enabled:hover:bg-orange-700": type === "warning",
          "bg-red-600 enabled:hover:bg-red-700": type === "danger",
          [backgroundColor]: type === undefined,
        },
      )}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
    >
      <Row className="justify-center" gap="gap-2" verticalCenter nowrap>
        {loading && (
          <Icon
            icon={<TbLoader2 className="motion-safe:animate-spin" />}
            color={clsx({
              "text-zinc-50": type !== undefined && type !== "secondary",
              "text-zinc-950": type === "secondary",
              [textColor]: type === undefined,
            })}
          />
        )}
        <Text
          color={clsx({
            "text-zinc-50": type !== undefined && type !== "secondary",
            "text-zinc-950": type === "secondary",
            [textColor]: type === undefined,
          })}
        >
          {children}
        </Text>
      </Row>
    </button>
  );
}
