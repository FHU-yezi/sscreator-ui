import type { Meta } from "@storybook/preact";
import { FieldBlock, Text } from "../src/main";

const meta: Meta<typeof FieldBlock> = {
  component: FieldBlock,
  args: {
    children: <Text large>12.00%</Text>,
    fieldName: "测试数据",
    rowClassName: undefined,
    fieldTextClassName: undefined,
    loading: false,
  },
  argTypes: {
    rowClassName: {
      control: "text",
    },
    fieldTextClassName: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
