import { signal } from "@preact/signals";
import { Checkbox, RadioGroup, Text } from "../../src/main";

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

const selected = signal<string | null>(null);

const isDisabled = signal(false);

export default function RadioGroupPage() {
  return (
    <>
      <Checkbox id="is-disabled" label="Disabled" value={isDisabled} />
      <RadioGroup
        id="programming-language-flex"
        className="flex flex-col gap-2"
        label="选择编程语言（Flex）"
        value={selected}
        options={options}
        helpText="测试 helpText"
        disabled={isDisabled.value}
      />
      <RadioGroup
        id="programming-language-grid"
        className="grid grid-cols-2 gap-2"
        label="选择编程语言（Grid）"
        value={selected}
        options={options}
        helpText="测试 helpText"
        disabled={isDisabled.value}
      />
      <Text>当前选择：{selected.value}</Text>
    </>
  );
}
