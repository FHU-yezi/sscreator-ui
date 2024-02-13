import { signal, useSignalEffect } from "@preact/signals";
import {
  AutoCompleteInput,
  Heading1,
  NumberInput,
  Text,
  TextAreaInput,
  TextInput,
  useDebouncedSignal,
} from "../../src/main";

const textInputValue = signal("");
const textAreaInputValue = signal("");
const autoCompleteInputValue = signal("");
const numberInputValue = signal<number | null>(0);

const options = signal<Array<string>>([]);

export default function InputPage() {
  const debouncedAutoCompleteInputValue = useDebouncedSignal(
    autoCompleteInputValue,
    100,
  );

  useSignalEffect(() => {
    options.value =
      debouncedAutoCompleteInputValue.value.length > 0 &&
      debouncedAutoCompleteInputValue.value.length <= 10
        ? [
            `${autoCompleteInputValue.value}@qq.com`,
            `${autoCompleteInputValue.value}@126.com`,
            `${autoCompleteInputValue.value}@163.com`,
          ]
        : [];
  });

  return (
    <>
      <Heading1>TextInput</Heading1>
      <TextInput
        id="test-textinput"
        value={textInputValue}
        label="测试 Label"
        helpText="测试 HelpText"
        placeholder="测试 Placeholder"
      />
      <Text>输入值：{textInputValue.value}</Text>

      <TextInput
        id="test-textinput-disabled"
        value={textInputValue}
        label="禁用态"
        disabled
      />
      <TextInput
        id="test-textinput-error"
        value={textInputValue}
        label="错误态"
        errorMessage="测试错误消息"
      />

      <TextAreaInput
        id="test-textarea"
        value={textAreaInputValue}
        label="测试 Label"
        helpText="测试 HelpText"
        placeholder="测试 Placeholder"
      />
      <Text>输入值：{textAreaInputValue.value}</Text>

      <Heading1>TextAreaInput</Heading1>
      <TextAreaInput
        id="test-textarea-disabled"
        value={textAreaInputValue}
        label="禁用态"
        disabled
      />
      <TextAreaInput
        id="test-textarea-error"
        value={textAreaInputValue}
        label="错误态"
        errorMessage="测试错误消息"
      />

      <Heading1>AutoCompleteInput</Heading1>
      <AutoCompleteInput
        id="test-autocompleteinput"
        value={autoCompleteInputValue}
        options={options.value}
        label="测试 Label"
        helpText="测试 HelpText"
        placeholder="测试 Placeholder"
        fullWidth
      />
      <Text>输入值：{autoCompleteInputValue.value}</Text>
      <Text>输入值（Debounced）：{debouncedAutoCompleteInputValue.value}</Text>

      <Heading1>NumberInput</Heading1>
      <NumberInput
        id="test-numberinput"
        value={numberInputValue}
        label="测试 Label"
        helpText="测试 HelpText"
        placeholder="测试 Placeholder"
      />
      <Text>输入值：{numberInputValue.value}</Text>

      <NumberInput
        id="test-numberinput-disabled"
        value={numberInputValue}
        label="禁用态"
        disabled
      />
      <NumberInput
        id="test-numberinput-error"
        value={numberInputValue}
        label="错误态"
        errorMessage="测试错误消息"
      />
    </>
  );
}
