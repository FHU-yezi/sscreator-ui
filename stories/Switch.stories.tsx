import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { Switch } from "../src/main";

const isOpen = signal(1);

const meta: Meta<typeof Switch> = {
  component: Switch,
  args: {
    label: "切换组件",
    value: isOpen,
    description: "这是一个测试复选框",
    data: [
      {
        label: "选项 1",
        value: 1,
      },
      {
        label: "选项 2",
        value: 2,
      },
      {
        label: "选项 3",
        value: 3,
      },
    ],
    backgroundColor: undefined,
  },
  argTypes: {
    backgroundColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
