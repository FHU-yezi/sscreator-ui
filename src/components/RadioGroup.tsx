import type { Signal } from "@preact/signals";
import clsx from "clsx";
import Icon from "./Icon";
import InputWrapper from "./input/InputWrapper";
import Row from "./layout/Row";

interface Option<T> {
  label: string;
  value: T;
}

interface Props<T> {
  id: string;
  className: string;
  label?: string;
  value: Signal<T | null>;
  options: Array<Option<T>>;
  helpText?: string;
  disabled?: boolean;
}

export default function RadioGroup<T>({
  id,
  className,
  label,
  value,
  options,
  helpText,
  disabled = false,
}: Props<T>) {
  const currentOption = options.find((x) => x.value === value.value);

  return (
    <InputWrapper id={id} label={label} helpText={helpText} disabled={disabled}>
      <div className={className}>
        {options.map((item) => (
          <Row gap="gap-1" itemsCenter>
            <button
              id={`${id}-${item.value}-radiobox`}
              type="button"
              role="radio"
              onClick={() => (value.value = item.value)}
              disabled={disabled}
              aria-checked={currentOption?.value === item.value}
              aria-describedby={helpText ? `${id}-help-text` : undefined}
            >
              <Icon
                className={clsx("block text-lg", {
                  "text-zinc-950 dark:text-zinc-50":
                    currentOption?.value !== item.value,
                  "text-blue-500": currentOption?.value === item.value,
                })}
                color="unset"
                icon={
                  currentOption?.value === item.value
                    ? "i-mdi-radiobox-marked"
                    : "i-mdi-radiobox-blank"
                }
                aria-hidden
              />
            </button>
            <label
              id={`${id}-${item.value}-label`}
              className="text-zinc-950 dark:text-zinc-50"
              for={`${id}-${item.value}-radiobox`}
            >
              {item.label}
            </label>
          </Row>
        ))}
      </div>
    </InputWrapper>
  );
}
