import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { MdFlag } from "react-icons/md";
import { Icon, Switch } from "../src/main";

const isOpen = signal(1);

const meta: Meta<typeof Switch> = {
  component: Switch,
  args: {
    label: "切换组件",
    value: isOpen,
    description: "这是一个测试切换组件",
    data: [
      {
        label: "选项 1",
        value: 1,
        leftIcon: (
          <Icon className="mr-1">
            <MdFlag />
          </Icon>
        ),
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
