import type { Meta } from "@storybook/preact";
import { Column, WarningAlert, Text } from "../../src/main";

const meta: Meta<typeof WarningAlert> = {
  component: WarningAlert,
  args: {
    children: (
      <Column>
        <Text isBold isLarge>
          文章被锁定
        </Text>
        <Text>您的文章未通过审核，现在处于锁定状态，请前往创作中心处理。</Text>
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
