import { signal } from "@preact/signals";
import { Checkbox, Text } from "../../src/main";

const checked = signal(false);

export default function CheckboxPage() {
  return (
    <>
      <Checkbox
        id="test-checkbox"
        value={checked}
        label="测试 Checkbox"
        helpText="测试 helpText"
      />
      <Text>状态：{checked.value ? "已选中" : "未选中"}</Text>
    </>
  );
}
