import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { Ref } from "preact";
import { useId } from "preact/hooks";
import InputWrapper from "./InputWrapper";

interface Props {
  className?: string;
  label?: string;
  value: Signal<string>;
  description?: string;
  placeholder?: string;
  rows?: number;
  isDisabled?: boolean;
  onEnter?(): void;
  onFocus?(): void;
  onBlur?(): void;
  noSelectAllOnFocus?: boolean;
  width?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  inputRef?: Ref<HTMLTextAreaElement>;
}

export default function TextAreaInput({
  className,
  label,
  value,
  description,
  placeholder,
  rows = 10,
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
  const inputId = useId();

  return (
    <InputWrapper inputId={inputId} label={label} description={description}>
      <textarea
        type="text"
        id={inputId}
        className={clsx(
          className,
          "py-1.5 px-3 rounded-lg border focus:outline-none disabled:opacity-60 resize-none",
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
        rows={rows}
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
