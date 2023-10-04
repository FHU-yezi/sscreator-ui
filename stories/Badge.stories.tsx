import type { Meta } from "@storybook/preact";
import { Badge, Text } from "../src/main";

const meta: Meta<typeof Badge> = {
  component: (props) => (
    <Text>
      There is a badge：
      <Badge {...props} />
    </Text>
  ),
  args: {
    children: "测试 Badge",
    className: undefined,
    textColor: "text-green-700 dark:text-green-300",
    backgroundColor: "bg-green-200 dark:bg-green-800",
    rounded: undefined,
  },
  argTypes: {
    className: {
      control: "text",
    },
    rounded: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
