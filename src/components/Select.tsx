import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChild } from "preact";
import { MdCheck, MdKeyboardArrowDown } from "react-icons/md";
import Icon from "./Icon";
import InputWrapper from "./input/InputWrapper";
import Column from "./layout/Column";
import Row from "./layout/Row";

interface Option<T> {
  label: string;
  value: T;
  leftIcon?: ComponentChild;
}

interface Props<T> {
  id: string;
  label?: string;
  isDropdownOpened: Signal<boolean>;
  value: Signal<T | null>;
  options: Array<Option<T>>;
  helpText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Select<T extends ComponentChild>({
  id,
  label,
  isDropdownOpened,
  value,
  options,
  helpText,
  disabled = false,
  fullWidth = false,
}: Props<T>) {
  const currentOption = options.find((x) => x.value === value.value);

  return (
    <InputWrapper id={id} label={label} helpText={helpText} disabled={disabled}>
      <button
        type="button"
        className={clsx(
          "border-2 relative border-zinc-300 px-3 py-2 dark:border-zinc-700 transition-colors rounded outline-none text-zinc-950 dark:text-zinc-50",
          {
            "w-min": !fullWidth,
            "w-full": fullWidth,
          },
        )}
        onClick={() => (isDropdownOpened.value = !isDropdownOpened.value)}
      >
        <Row className="justify-between" gap="gap-2">
          <Row gap="gap-1">
            {currentOption?.leftIcon && (
              <Icon colorScheme="unset" icon={currentOption.leftIcon} />
            )}
            <span
              className={clsx("whitespace-nowrap", {
                "text-zinc-500 dark:text-zinc-400": !value.value,
              })}
            >
              {currentOption?.label ?? "(请选择)"}
            </span>
          </Row>
          <Icon colorScheme="unset" icon={<MdKeyboardArrowDown size={24} />} />
        </Row>
      </button>
      <div className="relative">
        {isDropdownOpened.value && (
          <Column
            className={clsx(
              "absolute border-2 border-zinc-300 rounded bg-white p-2 shadow -top-2.5 dark:(border-zinc-700 bg-zinc-900)",
              {
                "w-min": !fullWidth,
                "w-full": fullWidth,
              },
            )}
            gap="gap-0"
          >
            {options.map((item) => (
              <button
                type="button"
                className={clsx(
                  "px-2 py-1 text-left transition-colors  hover:bg-zinc-100 text-zinc-950 dark:(text-zinc-50 hover:bg-zinc-900)",
                  {
                    "font-semibold": value.value === item,
                  },
                )}
                onClick={() => {
                  value.value = item.value;
                  isDropdownOpened.value = false;
                }}
              >
                <Row className="justify-between whitespace-nowrap" itemsCenter>
                  <Row gap="gap-1">
                    {item.leftIcon && (
                      <Icon colorScheme="unset" icon={item.leftIcon} />
                    )}
                    {item.label}
                  </Row>
                  {value.value === item.value && (
                    <Icon colorScheme="unset" icon={<MdCheck size={24} />} />
                  )}
                </Row>
              </button>
            ))}
          </Column>
        )}
      </div>
    </InputWrapper>
  );
}
