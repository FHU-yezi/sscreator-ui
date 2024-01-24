import type { Signal } from "@preact/signals";
import clsx from "clsx";
import { MdDone } from "react-icons/md";
import Icon from "./Icon";
import Column from "./layout/Column";
import Row from "./layout/Row";
import SmallText from "./text/SmallText";

interface Props {
  id: string;
  label: string;
  value: Signal<boolean>;
  helpText?: string;
}

export default function Checkbox({ value, id, label, helpText }: Props) {
  return (
    <Column gap="gap-1">
      <Row gap="gap-2" itemsCenter>
        <button
          id={id}
          type="button"
          role="checkbox"
          className={clsx("h-5 w-5 border-2 rounded transition-colors", {
            "bg-zinc-50 border-zinc-300 dark:(bg-zinc-900 border-zinc-700)":
              !value.value,
            "bg-blue-600 border-blue-600": value.value,
          })}
          onClick={() => (value.value = !value.value)}
          aria-checked={value.value}
          aria-describedby={helpText ? `${id}-help-text` : undefined}
        >
          <Icon
            className={clsx("transition-opacity text-zinc-50", {
              "opacity-0": !value.value,
            })}
            colorScheme="unset"
            icon={<MdDone size={16} />}
            aria-hidden
          />
        </button>

        <label
          id={`${id}-label`}
          className="text-zinc-950 dark:text-zinc-50"
          htmlFor={id}
        >
          {label}
        </label>
      </Row>
      {helpText && (
        <SmallText id={`${id}-help-text`} colorScheme="gray">
          {helpText}
        </SmallText>
      )}
    </Column>
  );
}
