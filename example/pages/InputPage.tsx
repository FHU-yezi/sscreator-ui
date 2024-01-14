import { signal } from "@preact/signals";
import { NumberInput, Text, TextAreaInput, TextInput } from "../../src/main";

const textInputValue = signal("");
const textAreaInputValue = signal("");
const numberInputValue = signal<number | null>(0);

export default function InputPage() {
  return (
    <>
      <TextInput
        value={textInputValue}
        label="测试 Label"
        helpText="测试 HelpText"
        placeholder="测试 Placeholder"
      />
      <Text>输入值：{textInputValue.value}</Text>

      <TextInput value={textInputValue} label="禁用态" disabled />
      <TextInput
        value={textInputValue}
        label="错误态"
        errorMessage="测试错误消息"
      />

      <TextAreaInput
        value={textAreaInputValue}
        label="测试 Label"
        helpText="测试 HelpText"
        placeholder="测试 Placeholder"
      />
      <Text>输入值：{textAreaInputValue.value}</Text>

      <TextAreaInput value={textAreaInputValue} label="禁用态" disabled />
      <TextAreaInput
        value={textAreaInputValue}
        label="错误态"
        errorMessage="测试错误消息"
      />

      <NumberInput
        value={numberInputValue}
        label="测试 Label"
        helpText="测试 HelpText"
        placeholder="测试 Placeholder"
      />
      <Text>输入值：{numberInputValue.value}</Text>

      <NumberInput value={numberInputValue} label="禁用态" disabled />
      <NumberInput
        value={numberInputValue}
        label="错误态"
        errorMessage="测试错误消息"
      />
    </>
  );
}
