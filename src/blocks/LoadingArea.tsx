import clsx from "clsx";
import type { ComponentChildren, VNode } from "preact";
import LoadingIcon from "../components/LoadingIcon";
import Center from "../components/layout/Center";
import Row from "../components/layout/Row";
import Text from "../components/typography/Text";

interface Props {
  children: ComponentChildren;
  className?: string;
  loading: boolean;
  message?: string;
  iconSize?: number;
  backgroundColor?: string;
}

export default function LoadingArea({
  children,
  className,
  loading,
  message = "加载中",
  iconSize = 28,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
}: Props) {
  if (!loading) {
    return children as VNode;
  }

  return (
    <Center className={clsx(className, "rounded", backgroundColor)}>
      <Row gap="gap-2" verticalCenter>
        <LoadingIcon size={iconSize} />
        <Text large bold>
          {message}
        </Text>
      </Row>
    </Center>
  );
}
