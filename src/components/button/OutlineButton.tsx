import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import { TbLoader2 } from "react-icons/tb";
import Center from "../layout/Center";
import Row from "../layout/Row";
import Text from "../typography/Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  onClick?(): void;
  leftIcon?: ComponentChild;
  borderColor?: string;
  hoverColor?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isInline?: boolean;
}

export default function OutlineButton({
  children,
  className,
  onClick,
  leftIcon,
  borderColor = "border-zinc-800 dark:border-zinc-600",
  hoverColor = "hover:bg-zinc-100 hover:dark:bg-zinc-900",
  isLoading = false,
  isDisabled = false,
  isInline = false,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        className,
        "transition-all border-2 px-4 py-2 rounded-lg shadow",
        borderColor,
        {
          [hoverColor]: !isLoading && !isDisabled,
          "cursor-wait": isLoading,
          "cursor-not-allowed": isDisabled,
          "opacity-60": isLoading || isDisabled,

          "inline w-fit": isInline,
        },
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Center className="h-fit">
        <Text isBold>
          <Row gap="gap-2" className="items-center">
            {leftIcon}
            {children}
            {isLoading && <TbLoader2 className="motion-safe:animate-spin" />}
          </Row>
        </Text>
      </Center>
    </button>
  );
}
