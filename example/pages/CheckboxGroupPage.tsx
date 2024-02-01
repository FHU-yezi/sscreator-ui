import { signal } from "@preact/signals";
import { Checkbox, CheckboxGroup, Text } from "../../src/main";

const options = [
  {
    label: "C 语言",
    value: "C",
  },
  {
    label: "Python",
    value: "Python",
  },
  {
    label: "TS",
    value: "Typescript",
  },
];

const checkedItems = signal<Array<string>>([]);

const isDisabled = signal(false);

export default function CheckboxGroupPage() {
  return (
    <>
      <Checkbox id="is-disabled" label="Disabled" value={isDisabled} />
      <CheckboxGroup
        id="programming-language-flex"
        className="flex flex-col gap-2"
        label="选择编程语言（Flex）"
        value={checkedItems}
        options={options}
        helpText="测试 helpText"
        disabled={isDisabled.value}
      />
      <CheckboxGroup
        id="programming-language-grid"
        className="grid grid-cols-2 gap-2"
        label="选择编程语言（Grid）"
        value={checkedItems}
        options={options}
        helpText="测试 helpText"
        disabled={isDisabled.value}
      />
      <Text>当前选择：{checkedItems.value.toString()}</Text>
    </>
  );
}
