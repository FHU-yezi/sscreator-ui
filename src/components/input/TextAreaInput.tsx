import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { Ref } from "preact";
import type { BasicColorType } from "../../utils/colorType";
import InputWrapper from "./InputWrapper";

interface Props {
  value: Signal<string>;
  type?: BasicColorType;
  label?: string;
  placeholder?: string;
  rows?: number;
  helpText?: string;
  errorMessage?: string;
  disabled?: boolean;
  selectAllOnFocus?: boolean;
  onEnter?(): void;
  onFocus?(): void;
  onBlur?(): void;
  inputRef?: Ref<HTMLTextAreaElement>;
}

export default function TextAreaInput({
  value,
  type,
  label,
  placeholder,
  rows = 10,
  helpText,
  errorMessage,
  disabled = false,
  selectAllOnFocus = false,
  onEnter,
  onFocus,
  onBlur,
  inputRef,
}: Props) {
  return (
    <InputWrapper
      label={label}
      helpText={helpText}
      errorMessage={errorMessage}
      disabled={disabled}
    >
      <textarea
        className={clsx(
          "border-2 rounded px-3 py-2 my-1 outline-none transition-colors bg-zinc-50 dark:bg-zinc-900",
          {
            "border-zinc-300 dark:border-zinc-700": errorMessage === undefined,
            "border-red-600 text-red-600": errorMessage !== undefined,
          },
          {
            "focus:border-green-600": type === "success",
            "focus:border-blue-600": type === "info" || type === undefined,
            "focus:border-orange-600": type === "warning",
            "focus:border-red-600": type === "danger",
          },
        )}
        type="text"
        value={value.value}
        onChange={(event) => (value.value = event.currentTarget.value)}
        label={label}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        ref={inputRef}
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
        onBlur={onBlur}
        spellCheck={false}
        aria-invalid={errorMessage === undefined}
      />
    </InputWrapper>
  );
}
