import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Column from "../layout/Column";
import SmallText from "../text/SmallText";

interface Props {
  children: ComponentChildren;
  id: string;
  label?: string;
  helpText?: string;
  errorMessage?: string;
  disabled: boolean;
}

export default function InputWrapper({
  children,
  id,
  label,
  helpText,
  errorMessage,
  disabled,
}: Props) {
  return (
    <Column
      className={clsx({
        "opacity-60": disabled,
      })}
      gap="gap-1"
    >
      {label && (
        <label
          id={`${id}-label`}
          className={clsx("font-semibold", {
            "text-red-600 dark:text-red-400": errorMessage !== undefined,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {helpText && (
        <SmallText
          id={`${id}-help-text`}
          colorScheme={errorMessage !== undefined ? "danger" : "gray"}
        >
          {helpText}
        </SmallText>
      )}
      {children}
      {errorMessage && (
        <SmallText
          id={`${id}-error-message`}
          colorScheme={errorMessage !== undefined ? "danger" : undefined}
        >
          {errorMessage}
        </SmallText>
      )}
    </Column>
  );
}
