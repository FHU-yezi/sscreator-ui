import clsx from "clsx";
import type { ComponentChild } from "preact";
import LoadingIcon from "../LoadingIcon";
import Center from "../layout/Center";
import Row from "../layout/Row";
import Text from "../typography/Text";

interface Props {
  children: ComponentChild;
  className?: string;
  onClick?(): void;
  label?: string;
  color?: string;
  hoverColor?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export default function IconButton({
  children,
  className,
  onClick,
  label,
  color = "bg-zinc-800",
  hoverColor = "hover:bg-zinc-900",
  isLoading = false,
  isDisabled = false,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        className,
        "transition-all p-2 rounded-lg shadow inline w-fit",
        color,
        {
          [hoverColor]: !isLoading && !isDisabled,
          "cursor-wait": isLoading,
          "cursor-not-allowed": isDisabled,
          "opacity-80": isLoading || isDisabled,
        },
      )}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={label}
    >
      <Center className="h-fit">
        <Text color="text-zinc-50 dark:text-zinc-200" isBold>
          <Row gap="gap-2" className="items-center">
            {children}
            {isLoading && <LoadingIcon noWrapInText />}
          </Row>
        </Text>
      </Center>
    </button>
  );
}
