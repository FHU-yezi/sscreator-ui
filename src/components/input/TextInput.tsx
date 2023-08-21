import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { Ref } from "preact";
import InputWrapper from "./InputWrapper";

interface Props {
  className?: string;
  label?: string;
  value: Signal<string>;
  description?: string;
  placeholder?: string;
  isDisabled?: boolean;
  onEnter?(): void;
  onFocus?(): void;
  onBlur?(): void;
  noSelectAllOnFocus?: boolean;
  width?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  inputRef?: Ref<HTMLInputElement>;
}

export default function TextInput({
  className,
  label,
  value,
  description,
  placeholder,
  isDisabled = false,
  onEnter,
  onFocus,
  onBlur,
  noSelectAllOnFocus = false,
  width = "w-full",
  textColor = "text-zinc-950 dark:text-zinc-50",
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
  borderColor = "border-zinc-200 dark:border-zinc-700",
  inputRef,
}: Props) {
  return (
    <InputWrapper label={label} description={description}>
      <input
        type="text"
        className={clsx(
          className,
          "py-1.5 px-3 rounded-lg border-2 focus:outline-none disabled:opacity-60",
          width,
          textColor,
          backgroundColor,
          borderColor,
          {
            "cursor-not-allowed": isDisabled,
          },
        )}
        placeholder={placeholder}
        disabled={isDisabled}
        value={value.value}
        onChange={(event) => (value.value = event.currentTarget.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter" && onEnter) {
            onEnter();
          }
        }}
        onFocus={(event) => {
          if (onFocus) {
            onFocus();
          }
          if (!noSelectAllOnFocus) {
            event.currentTarget.select();
          }
        }}
        onBlur={onBlur}
        aria-label={label}
        spellCheck={false}
        ref={inputRef}
      />
    </InputWrapper>
  );
}
