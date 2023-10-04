import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { Ref } from "preact";
import { useId } from "preact/hooks";
import InputWrapper from "./InputWrapper";

interface Props {
  className?: string;
  label?: string;
  value: Signal<number>;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  onEnter?(): void;
  onFocus?(): void;
  onBlur?(): void;
  noSelectAllOnFocus?: boolean;
  width?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  invalidBorderColor?: string;
  inputRef?: Ref<HTMLInputElement>;
}

export default function NumberInput({
  className,
  label,
  value,
  description,
  placeholder,
  disabled = false,
  invalid = false,
  invalidMessage,
  onEnter,
  onFocus,
  onBlur,
  noSelectAllOnFocus = false,
  width = "w-full",
  textColor = "text-zinc-950 dark:text-zinc-50",
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
  borderColor = "border-zinc-200 dark:border-zinc-700 focus:border-blue-500",
  invalidBorderColor = "border-red-500",
  inputRef,
}: Props) {
  const inputId = useId();

  return (
    <InputWrapper
      inputId={inputId}
      label={label}
      description={description}
      isInvalid={invalid}
      invalidMessage={invalidMessage}
    >
      <input
        type="number"
        id={inputId}
        inputMode="numeric"
        pattern="[0-9\.]*"
        className={clsx(
          className,
          "py-1.5 px-3 rounded-lg border outline-none disabled:opacity-60 appearance-none transition-colors",
          width,
          textColor,
          backgroundColor,
          {
            "cursor-not-allowed": disabled,
            [borderColor]: !invalid,
            [invalidBorderColor]: invalid,
          },
        )}
        // 在 Firefox 上隐藏上下箭头
        style={{
          "-moz-appearance": "textfield",
        }}
        placeholder={placeholder}
        disabled={disabled}
        value={value.value}
        onChange={(event) => {
          const parseResult = parseFloat(event.currentTarget.value);
          if (!Number.isNaN(parseResult)) {
            value.value = parseResult;
          }
        }}
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
        aria-invalid={invalid}
        spellCheck={false}
        ref={inputRef}
      />
    </InputWrapper>
  );
}
