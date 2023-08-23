import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import LoadingIcon from "../LoadingIcon";
import Center from "../layout/Center";
import Row from "../layout/Row";
import Text from "../typography/Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  onClick?(): void;
  leftIcon?: ComponentChild;
  color?: string;
  hoverColor?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isInline?: boolean;
}

export default function Button({
  children,
  className,
  onClick,
  leftIcon,
  color = "bg-zinc-800",
  hoverColor = "hover:bg-zinc-900",
  isLoading = false,
  isDisabled = false,
  isInline = false,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        className,
        "transition-all px-4 py-2 rounded-lg shadow",
        color,
        {
          [hoverColor]: !isLoading && !isDisabled,
          "cursor-wait": isLoading,
          "cursor-not-allowed": isDisabled,
          "opacity-80": isLoading || isDisabled,

          "inline w-fit": isInline,
        },
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Center className="h-fit">
        <Text color="text-zinc-50 dark:text-zinc-200" isBold>
          <Row gap="gap-2" className="items-center">
            {leftIcon}
            {children}
            {isLoading && <LoadingIcon noWrapInText />}
          </Row>
        </Text>
      </Center>
    </button>
  );
}
