import { signal } from "@preact/signals";
import { Checkbox, Icon, Select, Text } from "../../src/main";

const selected = signal<string | null>(null);

const isDisabled = signal(false);
const isFullWidth = signal(false);

export default function SelectPage() {
  return (
    <>
      <Checkbox id="is-full-width" label="Full Width" value={isFullWidth} />
      <Select
        id="programming-language"
        label="选择编程语言"
        value={selected}
        options={[
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
            leftIcon: <Icon icon="i-mdi-wallet" />,
          },
        ]}
        helpText="测试 helpText"
        disabled={isDisabled.value}
        fullWidth={isFullWidth.value}
      />
      <Text>当前选择：{selected.value}</Text>
    </>
  );
}
