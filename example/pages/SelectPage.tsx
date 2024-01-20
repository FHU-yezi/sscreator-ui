import { signal } from "@preact/signals";
import { MdWallet } from "react-icons/md";
import { Checkbox, Select, Text } from "../../src/main";

const isDropdownOpened = signal(false);
const selected = signal<string | null>(null);
const isFullWidth = signal(false);

export default function SelectPage() {
  return (
    <>
      <Checkbox id="is-full-width" label="Full Width" value={isFullWidth} />
      <Select
        id="programming-language"
        label="选择编程语言"
        isDropdownOpened={isDropdownOpened}
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
            leftIcon: <MdWallet size={24} />,
          },
        ]}
        helpText="测试 helpText"
        fullWidth={isFullWidth.value}
      />
      <Text>当前选择：{selected.value}</Text>
    </>
  );
}
