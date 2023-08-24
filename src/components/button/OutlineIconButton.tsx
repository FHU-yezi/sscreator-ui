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
  borderColor?: string;
  hoverColor?: string;
  isBorderLess?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export default function OutlineIconButton({
  children,
  className,
  onClick,
  label,
  borderColor = "border-zinc-800 dark:border-zinc-600",
  hoverColor = "hover:bg-zinc-100 hover:dark:bg-zinc-900",
  isBorderLess = false,
  isLoading = false,
  isDisabled = false,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(className, "transition-all p-2 rounded-lg inline w-fit", {
        "border shadow": !isBorderLess,
        [borderColor]: !isBorderLess,

        [hoverColor]: !isLoading && !isDisabled,
        "cursor-wait": isLoading,
        "cursor-not-allowed": isDisabled,
        "opacity-60": isLoading || isDisabled,
      })}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={label}
    >
      <Center className="h-fit">
        <Text isBold>
          <Row gap="gap-2" className="items-center">
            {children}
            {isLoading && <LoadingIcon noWrapInText />}
          </Row>
        </Text>
      </Center>
    </button>
  );
}
