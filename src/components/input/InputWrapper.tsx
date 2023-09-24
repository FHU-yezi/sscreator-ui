import type { ComponentChildren } from "preact";
import Column from "../layout/Column";
import Text from "../typography/Text";

interface Props {
  children: ComponentChildren;
  label?: string;
  description?: string;
}

export default function InputWrapper({ children, label, description }: Props) {
  return (
    <Column gap="gap-1.5">
      <Text bold>{label}</Text>

      {children}

      <Text small gray>
        {description}
      </Text>
    </Column>
  );
}
