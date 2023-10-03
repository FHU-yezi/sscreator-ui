import type { ComponentChildren } from "preact";
import { MdOutlineInfo } from "react-icons/md";
import Column from "../layout/Column";
import Text from "../typography/Text";

interface Props {
  children: ComponentChildren;
  inputId?: string;
  label?: string;
  description?: string;
  isInvalid?: boolean;
  invalidMessage?: string;
}

export default function InputWrapper({
  children,
  inputId,
  label,
  description,
  isInvalid = false,
  invalidMessage,
}: Props) {
  return (
    <Column gap="gap-1.5">
      <label htmlFor={inputId}>
        <Text bold>{label}</Text>
      </label>

      {children}

      <Text
        className="transition-colors"
        color={isInvalid ? "text-red-500" : undefined}
        small
        gray={!isInvalid}
      >
        {!isInvalid ? (
          description
        ) : (
          <>
            <MdOutlineInfo className="mr-1 inline" />
            {invalidMessage ?? "输入无效"}
          </>
        )}
      </Text>
    </Column>
  );
}
