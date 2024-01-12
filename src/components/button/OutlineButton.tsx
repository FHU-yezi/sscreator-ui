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

export default function OutlineButton({
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
        "border-2 shadow rounded transition-color disabled:opacity-70 group",
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
            type === "primary",
          "border-zinc-500 enabled:(hover:border-zinc-300 hover:bg-zinc-300 hover:dark:border-zinc-700 hover:dark:bg-zinc-700)":
            type === "secondary",
          "border-green-600 enabled:hover:(border-green-700 bg-green-700)":
            type === "success",
          "border-orange-600 enabled:hover:(border-orange-700 bg-orange-700)":
            type === "warning",
          "border-red-600 enabled:hover:(border-red-700 bg-red-700)":
            type === "danger",
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
              "text-zinc-950 dark:text-zinc-50 group-enabled:group-hover:text-zinc-50":
                type !== undefined && type !== "secondary",
              "text-zinc-950 dark:text-zinc-50": type === "secondary",
              [textColor]: type === undefined,
            })}
          />
        )}
        <Text
          color={clsx("transition-color group-disabled:opacity-90", {
            "text-zinc-950 dark:text-zinc-50 group-enabled:group-hover:text-zinc-50":
              type !== undefined && type !== "secondary",
            "text-zinc-950 dark:text-zinc-50": type === "secondary",
            [textColor]: type === undefined,
          })}
        >
          {children}
        </Text>
      </Row>
    </button>
  );
}
