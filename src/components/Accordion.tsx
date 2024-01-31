import { useSignal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { MdKeyboardArrowUp } from "react-icons/md";
import Icon from "./Icon";
import Column from "./layout/Column";
import Text from "./text/Text";

interface Props {
  children: ComponentChildren;
  label: string;
}

export default function Accordion({ children, label }: Props) {
  const isOpened = useSignal(false);

  return (
    <Column gap="gap-0">
      <button
        type="button"
        className={clsx("flex justify-between border rounded-t p-4", {
          "rounded-b": !isOpened.value,
        })}
        onClick={() => (isOpened.value = !isOpened.value)}
      >
        <Text bold>{label}</Text>
        <Icon
          className={clsx("transition-transform", {
            "rotate-180": isOpened.value,
          })}
          icon={<MdKeyboardArrowUp size={24} />}
        />
      </button>
      <div
        className={clsx("border-x rounded-b overflow-hidden", {
          "h-0": !isOpened.value,
          "h-auto p-4 border-b": isOpened.value,
        })}
        aria-hidden={!isOpened.value}
      >
        {children}
      </div>
    </Column>
  );
}
