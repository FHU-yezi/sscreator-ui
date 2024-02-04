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
      gap="gap-2"
    >
      <Column gap="gap-1">
        {label && (
          <label
            id={`${id}-label`}
            className={clsx("font-semibold", {
              "text-red-600 dark:text-red-400": errorMessage !== undefined,
              "text-zinc-950 dark:text-zinc-50": errorMessage === undefined,
            })}
            for={id}
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
      </Column>
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
