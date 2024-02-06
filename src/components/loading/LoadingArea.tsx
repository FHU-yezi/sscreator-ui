import clsx from "clsx";
import type { ComponentChildren, VNode } from "preact";
import type { HTMLAttributes } from "preact/compat";
import Center from "../layout/Center";
import Row from "../layout/Row";
import Text from "../text/Text";
import LoadingIcon from "./LoadingIcon";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "loading"> {
  children: ComponentChildren;
  className?: string;
  loading: boolean;
}

export default function LoadingArea({ children, className, loading }: Props) {
  if (!loading) {
    return children as VNode;
  }

  return (
    <div className={clsx("bg-zinc-100 dark:bg-zinc-900 rounded", className)}>
      <Center className="h-full">
        <Row gap="gap-2" itemsCenter>
          <LoadingIcon className="text-lg" />
          <Text bold>加载中</Text>
        </Row>
      </Center>
    </div>
  );
}
