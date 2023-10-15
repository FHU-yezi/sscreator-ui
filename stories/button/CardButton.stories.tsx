import type { Meta } from "@storybook/preact";
import { CardButton, Column, Text } from "../../src/main";

const meta: Meta<typeof CardButton> = {
  component: CardButton,
  args: {
    children: (
      <Column>
        <Text className="text-left" large bold>
          卡片测试工具
        </Text>
        <Text>可视化查看该组件能否正常展示</Text>
      </Column>
    ),
    className: undefined,
    onClick: () => null,
    disabled: false,
    ariaLabel: undefined,
    padding: undefined,
    margin: undefined,
    rounded: undefined,
    borderColor: undefined,
    shadowColor: undefined,
  },
  argTypes: {
    className: {
      control: "text",
    },
    ariaLabel: {
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
    shadowColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
