import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { Checkbox } from "../src/main";

const isChecked = signal(false);

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    label: "复选框",
    value: isChecked,
    description: "这是一个测试复选框",
    borderColor: undefined,
  },
  argTypes: {
    borderColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
