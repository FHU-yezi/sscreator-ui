import type { Signal } from "@preact/signals";
import clsx from "clsx";
import Icon from "../Icon";
import Column from "../layout/Column";
import Row from "../layout/Row";
import SmallText from "../text/SmallText";

interface Props {
  id: string;
  label: string;
  value: Signal<boolean>;
  helpText?: string;
}

export default function Checkbox({ value, id, label, helpText }: Props) {
  return (
    <Column gap="gap-1">
      <Row gap="gap-1" itemsCenter>
        <button
          id={id}
          type="button"
          role="checkbox"
          onClick={() => {
            value.value = !value.value;
          }}
          aria-checked={value.value}
          aria-describedby={helpText ? `${id}-help-text` : undefined}
        >
          <Icon
            className={clsx("block text-2xl", {
              "text-zinc-950 dark:text-zinc-50": !value.value,
              "text-blue-600": value.value,
            })}
            color="unset"
            icon={
              value.value
                ? "i-mdi-checkbox-outline"
                : "i-mdi-checkbox-blank-outline"
            }
            aria-hidden
          />
        </button>

        <label
          id={`${id}-label`}
          className="text-zinc-950 dark:text-zinc-50"
          for={id}
        >
          {label}
        </label>
      </Row>
      {helpText && (
        <SmallText id={`${id}-help-text`} color="gray">
          {helpText}
        </SmallText>
      )}
    </Column>
  );
}
