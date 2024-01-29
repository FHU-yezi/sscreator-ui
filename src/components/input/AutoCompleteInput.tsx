import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { HTMLAttributes } from "preact/compat";
import Column from "../layout/Column";
import InputWrapper from "./InputWrapper";

interface Props extends Omit<HTMLAttributes<HTMLInputElement>, "value"> {
  id: string;
  label?: string;
  isDropdownOpened: Signal<boolean>;
  value: Signal<string>;
  options: Array<string>;
  helpText?: string;
  errorMessage?: string;
  disabled?: boolean;
  selectAllOnFocus?: boolean;
  onEnter?(): void;
  onFocus?(): void;
  onBlur?(): void;
  fullWidth?: boolean;
  zIndex?: number;
}

export default function AutoCompleteInput({
  id,
  label,
  isDropdownOpened,
  value,
  options,
  onCompositionStart,
  helpText,
  errorMessage,
  disabled = false,
  selectAllOnFocus = false,
  onEnter,
  onFocus,
  onBlur,
  fullWidth = false,
  zIndex = 1,
  ...props
}: Props) {
  return (
    <InputWrapper
      id={id}
      label={label}
      helpText={helpText}
      errorMessage={errorMessage}
      disabled={disabled}
    >
      <input
        className={clsx(
          "border rounded px-3 py-2 outline-none bg-zinc-50 dark:bg-zinc-900",
          {
            "border-zinc-300 dark:border-zinc-700 dark:text-zinc-50 focus:(border-blue-600 dark:border-blue-400)":
              errorMessage === undefined,
            "border-red-600 text-red-600 dark:(border-red-400 text-red-400)":
              errorMessage !== undefined,
          },
        )}
        type="text"
        id={id}
        value={value.value}
        onChange={(event) => {
          value.value = event.currentTarget.value;
          isDropdownOpened.value = true;
        }}
        label={label}
        disabled={disabled}
        onKeyUp={(event) => {
          if (event.key === "Enter" && onEnter) {
            onEnter();
          }
        }}
        onFocus={(event) => {
          if (onFocus) {
            onFocus();
          }
          if (selectAllOnFocus) {
            event.currentTarget.select();
          }

          isDropdownOpened.value = true;
        }}
        onBlur={() => {
          if (onBlur) {
            onBlur();
          }

          isDropdownOpened.value = false;
        }}
        spellCheck={false}
        aria-invalid={errorMessage === undefined}
        aria-describedby={helpText ? `${id}-help-text` : undefined}
        {...props}
      />
      <div className="relative">
        {isDropdownOpened.value && options.length !== 0 && (
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
                  "px-2 py-1 text-left  hover:bg-zinc-100 text-zinc-950 dark:(text-zinc-50 hover:bg-zinc-800)",
                  {
                    "font-semibold": value.value === item,
                  },
                )}
                onClick={() => {
                  value.value = item;
                  isDropdownOpened.value = false;
                }}
              >
                {item}
              </button>
            ))}
          </Column>
        )}
      </div>
    </InputWrapper>
  );
}
