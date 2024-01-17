import { signal } from "@preact/signals";
import { Select, Text } from "../../src/main";

const selected = signal<string | null>(null);

export default function SelectPage() {
  return (
    <>
      <Select
        id="programming-language"
        label="选择编程语言"
        value={selected}
        options={["C", "Rust", "Java", "Python", "Typescript"]}
        helpText="测试 helpText"
      />
      <Text>当前选择：{selected.value}</Text>
    </>
  );
}
