import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { HTMLAttributes } from "preact/compat";
import InputWrapper from "./InputWrapper";

interface Props extends Omit<HTMLAttributes<HTMLInputElement>, "value"> {
  id: string;
  label?: string;
  value: Signal<string>;
  helpText?: string;
  errorMessage?: string;
  disabled?: boolean;
  selectAllOnFocus?: boolean;
  onEnter?(): void;
  onFocus?(): void;
}

export default function TextInput({
  id,
  label,
  value,
  helpText,
  errorMessage,
  disabled = false,
  selectAllOnFocus = false,
  onEnter,
  onFocus,
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
          "border rounded px-3 py-2 outline-none bg-zinc-50 text-zinc-950 dark:(bg-zinc-900 text-zinc-50)",
          {
            "border-zinc-300 dark:border-zinc-700 focus:(border-blue-600 dark:border-blue-500)":
              errorMessage === undefined,
            "border-red-600 text-red-600 dark:(border-red-500 text-red-500)":
              errorMessage !== undefined,
          },
        )}
        type="text"
        id={id}
        value={value.value}
        onInput={(event) => {
          value.value = event.currentTarget.value;
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
        }}
        spellCheck={false}
        aria-invalid={errorMessage === undefined}
        aria-describedby={helpText ? `${id}-help-text` : undefined}
        {...props}
      />
    </InputWrapper>
  );
}
