import clsx from "clsx";
import type { ComponentChildren, VNode } from "preact";
import LoadingIcon from "../components/LoadingIcon";
import Center from "../components/layout/Center";
import Row from "../components/layout/Row";
import Text from "../components/typography/Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  isLoading: boolean;
  message?: string;
  iconSize?: number;
  backgroundColor?: string;
}

export default function LoadingArea({
  children,
  className,
  isLoading,
  message = "加载中",
  iconSize = 28,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
}: Props) {
  if (!isLoading) {
    return children as VNode;
  }

  return (
    <Center className={clsx(className, "rounded", backgroundColor)}>
      <Row className="items-center" gap="gap-2">
        <LoadingIcon size={iconSize} />
        <Text large bold>
          {message}
        </Text>
      </Row>
    </Center>
  );
}
