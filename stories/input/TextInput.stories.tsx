import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { TextInput } from "../../src/main";

const value = signal(undefined);

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  args: {
    className: undefined,
    label: "测试 TextInput",
    value,
    description: "描述",
    placeholder: "请输入内容",
    disabled: false,
    invalid: false,
    invalidMessage: undefined,
    noSelectAllOnFocus: false,
    width: undefined,
    textColor: undefined,
    backgroundColor: undefined,
    borderColor: undefined,
    invalidBorderColor: undefined,
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
    invalidBorderColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
