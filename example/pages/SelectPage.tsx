import { signal } from "@preact/signals";
import { Checkbox, Select, Text } from "../../src/main";

const selected = signal<string | null>(null);
const isFullWidth = signal(false);

export default function SelectPage() {
  return (
    <>
      <Checkbox id="is-full-width" label="Full Width" value={isFullWidth} />
      <Select
        id="programming-language"
        label="选择编程语言"
        value={selected}
        options={["C", "Rust", "Java", "Python", "Typescript"]}
        helpText="测试 helpText"
        fullWidth={isFullWidth.value}
      />
      <Text>当前选择：{selected.value}</Text>
    </>
  );
}
