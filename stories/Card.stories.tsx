import type { Meta } from "@storybook/preact";
import { Card, Column, Text } from "../src/main";

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    children: (
      <Column>
        <Text bold large>
          测试标题
        </Text>
        <Text>这是一张卡片</Text>
        <Text>这是卡片中的另一段文字</Text>
      </Column>
    ),
    className: undefined,
    padding: undefined,
    margin: undefined,
    rounded: undefined,
    borderColor: undefined,
    isBorderLess: false,
  },
  argTypes: {
    className: {
      control: "text",
    },
    padding: {
      control: "text",
    },
    margin: {
      control: "text",
    },
    rounded: {
      control: "text",
    },
    borderColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
