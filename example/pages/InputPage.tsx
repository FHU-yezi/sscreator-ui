import { signal } from "@preact/signals";
import { Text, TextInput } from "../../src/main";

const value = signal("");

export default function InputPage() {
  return (
    <>
      <TextInput
        value={value}
        label="测试 Label"
        helpText="测试 HelpText"
        placeholder="测试 Placeholder"
      />
      <Text>输入值：{value.value}</Text>

      <TextInput value={value} label="禁用态" disabled />
      <TextInput value={value} label="错误态" errorMessage="测试错误消息" />
    </>
  );
}
