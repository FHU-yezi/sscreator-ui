import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { TextAreaInput } from "../../src/main";

const value = signal(undefined);

const meta: Meta<typeof TextAreaInput> = {
  component: TextAreaInput,
  args: {
    className: undefined,
    label: "测试 TextAreaInput",
    value,
    description: "描述",
    placeholder: "请输入内容",
    rows: 5,
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
