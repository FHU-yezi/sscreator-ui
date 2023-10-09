import type { Meta } from "@storybook/preact";
import { Text } from "../../src/main";

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    children:
      "这是一段测试文字，在手机端可以用于测试换行与截断，同时支持调整颜色、设置大小、加粗、居中等",
    className: undefined,
    color: undefined,
    gray: false,
    small: false,
    large: false,
    bold: false,
    center: false,
    nowrap: false,
    truncate: false,
    inline: false,
  },
  argTypes: {
    className: {
      control: "text",
    },
    color: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};

export const WithColor = {
  args: {
    color: "text-green-500",
  },
};
export const Gray = {
  args: {
    gray: true,
  },
};
export const Small = {
  args: {
    small: true,
  },
};
export const Large = {
  args: {
    large: true,
  },
};
export const Bold = {
  args: {
    bold: true,
  },
};
export const Center = {
  args: {
    center: true,
  },
};
export const Nowrap = {
  args: {
    nowrap: true,
  },
};
export const Truncate = {
  args: {
    truncate: true,
  },
};
export const Inline = {
  args: {
    inline: true,
  },
};
