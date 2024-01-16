import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { MdKeyboardArrowUp } from "react-icons/md";
import Icon from "./Icon";
import Column from "./layout/Column";
import Text from "./text/Text";

interface Props {
  children: ComponentChildren;
  label: string;
  open: Signal<boolean>;
}

export default function Accordion({ children, label, open }: Props) {
  return (
    <Column gap="gap-0">
      <button
        type="button"
        className={clsx("flex justify-between border rounded-t p-4", {
          "rounded-b": !open.value,
        })}
        onClick={() => (open.value = !open.value)}
      >
        <Text bold>{label}</Text>
        <Icon
          className={clsx("transition-transform", {
            "rotate-180": open.value,
          })}
          icon={<MdKeyboardArrowUp size={24} />}
        />
      </button>
      <div
        className={clsx("border-x rounded-b overflow-hidden", {
          "h-0": !open.value,
          "h-auto p-4 border-b": open.value,
        })}
        aria-hidden={!open.value}
      >
        {children}
      </div>
    </Column>
  );
}
