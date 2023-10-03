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
  isDisabled?: boolean;
  isInvalid?: boolean;
  invalidMessage?: string;
  onEnter?(): void;
  onFocus?(): void;
  onBlur?(): void;
  noSelectAllOnFocus?: boolean;
  width?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  invalidBorderColor?: string;
  inputRef?: Ref<HTMLInputElement>;
}

export default function TextInput({
  className,
  label,
  value,
  description,
  placeholder,
  isDisabled = false,
  isInvalid = false,
  invalidMessage,
  onEnter,
  onFocus,
  onBlur,
  noSelectAllOnFocus = false,
  width = "w-full",
  textColor = "text-zinc-950 dark:text-zinc-50",
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
  borderColor = "border-zinc-200 dark:border-zinc-700",
  focusBorderColor = "focus:border-blue-500",
  invalidBorderColor = "border-red-500",
  inputRef,
}: Props) {
  const inputId = useId();

  return (
    <InputWrapper
      inputId={inputId}
      label={label}
      description={description}
      isInvalid={isInvalid}
      invalidMessage={invalidMessage}
    >
      <input
        type="text"
        id={inputId}
        className={clsx(
          className,
          "py-1.5 px-3 rounded-lg border outline-none disabled:opacity-60 transition-colors",
          width,
          textColor,
          backgroundColor,
          {
            "cursor-not-allowed": isDisabled,
            [borderColor]: !isInvalid,
            [focusBorderColor]: !isInvalid,
            [invalidBorderColor]: isInvalid,
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
        aria-invalid={isInvalid}
        spellCheck={false}
        ref={inputRef}
      />
    </InputWrapper>
  );
}
