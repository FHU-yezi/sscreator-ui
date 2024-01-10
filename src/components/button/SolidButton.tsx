import { clsx } from "clsx";
import type { ComponentChildren } from "preact";
import { TbLoader2 } from "react-icons/tb";
import { Icon, Row, Text } from "../../main";
import type { ColorType } from "../../utils/colorType";

interface Props {
  children?: ComponentChildren;
  className?: string;
  onClick(): void;
  type?: ColorType;
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
        "shadow rounded transition-color group",
        {
          "px-3 py-1.5": !small,
          "p-1": small,

          "cursor-wait": loading,
          "cursor-not-allowed": disabled,
          "w-full": fullWidth,
        },
        className,
        {
          "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900":
            type === "primary",
          "bg-zinc-200 hover:bg-zinc-300 disabled:bg-zinc-100":
            type === "secondary",
          "bg-green-700 hover:bg-green-800 disabled:bg-green-900":
            type === "success",
          "bg-orange-600 hover:bg-orange-700 disabled:bg-orange-900":
            type === "warning",
          "bg-red-600 hover:bg-red-700 disabled:bg-red-900": type === "danger",
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
          color={clsx("group-disabled:opacity-90", {
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
