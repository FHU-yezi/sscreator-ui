import clsx from "clsx";
import type { ComponentChild } from "preact";
import { TbLoader2 } from "react-icons/tb";
import Center from "../layout/Center";
import Row from "../layout/Row";
import Text from "../typography/Text";

interface Props {
  children: ComponentChild;
  className?: string;
  onClick?(): void;
  color?: string;
  hoverColor?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export default function OutlineIconButton({
  children,
  className,
  onClick,
  color = "border-zinc-800 dark:border-zinc-600",
  hoverColor = "hover:bg-zinc-100 hover:dark:bg-zinc-900",
  isLoading = false,
  isDisabled = false,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        className,
        "transition-all border-2 p-2 rounded-lg shadow inline w-fit",
        color,
        {
          [hoverColor]: !isLoading && !isDisabled,
          "cursor-wait": isLoading,
          "cursor-not-allowed": isDisabled,
          "opacity-60": isLoading || isDisabled,
        },
      )}
      onClick={onClick}
    >
      <Center className="h-fit">
        <Text isBold>
          <Row gap="gap-2" className="items-center">
            {children}
            {isLoading && <TbLoader2 className="motion-safe:animate-spin" />}
          </Row>
        </Text>
      </Center>
    </button>
  );
}
