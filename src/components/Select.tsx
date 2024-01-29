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
  zIndex?: number;
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
  zIndex = 1,
}: Props<T>) {
  const currentOption = options.find((x) => x.value === value.value);

  return (
    <InputWrapper id={id} label={label} helpText={helpText} disabled={disabled}>
      <button
        type="button"
        className={clsx(
          "border border-zinc-300 px-3 py-2 dark:border-zinc-700 rounded text-zinc-950 dark:text-zinc-50",
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
              "absolute border border-zinc-300 rounded bg-white shadow -top-2.5 dark:(border-zinc-700 bg-zinc-900)",
              {
                "w-min": !fullWidth,
                "w-full": fullWidth,
              },
            )}
            gap="gap-0"
            style={{
              zIndex,
            }}
          >
            {options.map((item) => (
              <button
                type="button"
                className={clsx(
                  "px-2 py-1 text-left hover:bg-zinc-100 text-zinc-950 dark:(text-zinc-50 hover:bg-zinc-800)",
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
