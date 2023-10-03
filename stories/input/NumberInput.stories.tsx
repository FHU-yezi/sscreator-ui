import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { NumberInput } from "../../src/main";

const value = signal(undefined);

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  args: {
    className: undefined,
    label: "数字输入框",
    value,
    description: "描述",
    placeholder: "请输入内容",
    disabled: false,
    invlid: false,
    invalidMessage: undefined,
    noSelectAllOnFocus: false,
    width: undefined,
    textColor: undefined,
    backgroundColor: undefined,
    borderColor: undefined,
  },
  argTypes: {
    className: {
      control: "text",
    },
    invalidMessage: {
      control: "text",
    },
    width: {
      control: "text",
    },
    textColor: {
      control: "text",
    },
    backgroundColor: {
      control: "text",
    },
    borderColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
