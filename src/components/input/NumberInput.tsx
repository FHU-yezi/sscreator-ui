import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { Ref } from "preact";
import InputWrapper from "./InputWrapper";

interface Props {
  className?: string;
  label?: string;
  value: Signal<number>;
  min?: number;
  max?: number;
  step?: string;
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

export default function NumberInput({
  className,
  label,
  value,
  min,
  max,
  step = "1",
  description,
  placeholder,
  isDisabled,
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
        type="number"
        inputMode="numeric"
        pattern="[0-9\.]*"
        className={clsx(
          className,
          "py-1.5 px-3 rounded-lg border-2 focus:outline-none disabled:opacity-60 appearance-none",
          width,
          textColor,
          backgroundColor,
          borderColor,
          {
            "cursor-not-allowed": isDisabled,
          },
        )}
        // 在 Firefox 上隐藏上下箭头
        style={{
          "-moz-appearance": "textfield",
        }}
        placeholder={placeholder}
        disabled={isDisabled}
        value={value.value}
        min={min}
        max={max}
        step={step}
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
        spellCheck={false}
        ref={inputRef}
      />
    </InputWrapper>
  );
}
