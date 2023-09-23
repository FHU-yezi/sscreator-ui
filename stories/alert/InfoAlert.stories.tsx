import type { Meta } from "@storybook/preact";
import { Column, InfoAlert, Text } from "../../src/main";

const meta: Meta<typeof InfoAlert> = {
  component: InfoAlert,
  args: {
    children: (
      <Column>
        <Text isBold isLarge>
          提示
        </Text>
        <Text>您收到了新的私信，请于 个人中心 - 互动 查看。</Text>
      </Column>
    ),
    className: undefined,
    leftIcon: undefined,
    padding: undefined,
    margin: undefined,
    rounded: undefined,
    iconGap: undefined,
    backgroundColor: undefined,
    borderColor: undefined,
    iconColor: undefined,
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
    iconGap: {
      control: "text",
    },
    backgroundColor: {
      control: "text",
    },
    borderColor: {
      control: "text",
    },
    iconColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
