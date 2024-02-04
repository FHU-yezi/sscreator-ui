import type { Signal } from "@preact/signals";
import clsx from "clsx";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import Icon from "../Icon";
import InputWrapper from "../input/InputWrapper";
import Column from "../layout/Column";
import Row from "../layout/Row";

interface Option<T> {
  label: string;
  value: T;
}

interface Props<T> {
  id: string;
  className: string;
  label?: string;
  value: Signal<Array<T>>;
  options: Array<Option<T>>;
  helpText?: string;
  disabled?: boolean;
}

export default function CheckboxGroup<T>({
  id,
  className,
  label,
  value,
  options,
  helpText,
  disabled = false,
}: Props<T>) {
  return (
    <InputWrapper id={id} label={label} helpText={helpText} disabled={disabled}>
      <div className={className}>
        {options.map((item) => (
          <Column gap="gap-1">
            <Row gap="gap-1" itemsCenter>
              <button
                id={`${id}-${item.label}-checkbox`}
                type="button"
                role="checkbox"
                onClick={() =>
                  value.value.includes(item.value)
                    ? (value.value = value.value.filter(
                        (x) => x !== item.value,
                      ))
                    : (value.value = [...value.value, item.value])
                }
                disabled={disabled}
                aria-checked={value.value.includes(item.value)}
              >
                <Icon
                  className={clsx({
                    "text-zinc-950 dark:text-zinc-50": !value.value.includes(
                      item.value,
                    ),
                    "text-blue-500": value.value.includes(item.value),
                  })}
                  colorScheme="unset"
                  icon={
                    value.value.includes(item.value) ? (
                      <MdCheckBox size={20} />
                    ) : (
                      <MdCheckBoxOutlineBlank size={20} />
                    )
                  }
                  aria-hidden
                />
              </button>

              <label
                id={`${id}-${item.label}-checkbox-label`}
                className="text-zinc-950 dark:text-zinc-50"
                for={`${id}-${item.label}-checkbox`}
              >
                {item.label}
              </label>
            </Row>
          </Column>
        ))}
      </div>
    </InputWrapper>
  );
}
