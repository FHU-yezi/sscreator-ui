import { useSignal, type Signal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChild } from "preact";
import { MdCheck, MdKeyboardArrowDown } from "react-icons/md";
import Icon from "./Icon";
import InputWrapper from "./input/InputWrapper";
import Column from "./layout/Column";
import Row from "./layout/Row";

interface Props<T> {
  id: string;
  label?: string;
  value: Signal<T | null>;
  options: Array<T>;
  helpText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Select<T extends ComponentChild>({
  id,
  label,
  value,
  options,
  helpText,
  disabled = false,
  fullWidth = false,
}: Props<T>) {
  const isOpened = useSignal(false);

  return (
    <InputWrapper id={id} label={label} helpText={helpText} disabled={disabled}>
      <button
        type="button"
        className={clsx(
          "border-2 border-zinc-300 px-3 py-2 my-1 dark:border-zinc-700 transition-colors rounded outline-none text-zinc-950 dark:text-zinc-50",
          {
            "w-min": !fullWidth,
          },
        )}
        onClick={() => (isOpened.value = !isOpened.value)}
      >
        <Row className="justify-between" gap="gap-1">
          <span
            className={clsx("whitespace-nowrap", {
              "text-zinc-500 dark:text-zinc-400": !value.value,
            })}
          >
            {value.value ?? "(请选择)"}
          </span>
          <Icon colorScheme="unset" icon={<MdKeyboardArrowDown size={24} />} />
        </Row>
      </button>
      {isOpened.value && (
        <Column
          className="absolute mt-4 w-min translate-y-1/2 border-2 border-zinc-300 rounded bg-white p-2 shadow dark:(border-zinc-700 bg-zinc-900)"
          gap="gap-0"
        >
          {options.map((item) => (
            <button
              type="button"
              className={clsx(
                "px-2 py-1 text-left transition-colors hover:bg-zinc-100 text-zinc-950 dark:(text-zinc-50 hover:bg-zinc-900)",
                {
                  "font-semibold": value.value === item,
                },
              )}
              onClick={() => {
                value.value = item;
                isOpened.value = false;
              }}
            >
              <Row className="justify-between">
                {item}
                {value.value === item && (
                  <Icon colorScheme="unset" icon={<MdCheck size={24} />} />
                )}
              </Row>
            </button>
          ))}
        </Column>
      )}
    </InputWrapper>
  );
}
