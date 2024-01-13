import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Column from "../layout/Column";
import SmallText from "../text/SmallText";
import Text from "../text/Text";

interface Props {
  children: ComponentChildren;
  label?: string;
  helpText?: string;
  errorMessage?: string;
  disabled: boolean;
}

export default function InputWrapper({
  children,
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
        <Text type={errorMessage !== undefined ? "danger" : undefined} bold>
          {label}
        </Text>
      )}
      {helpText && (
        <SmallText type={errorMessage !== undefined ? "danger" : "gray"}>
          {helpText}
        </SmallText>
      )}
      {children}
      {errorMessage && (
        <SmallText type={errorMessage !== undefined ? "danger" : undefined}>
          {errorMessage}
        </SmallText>
      )}
    </Column>
  );
}
