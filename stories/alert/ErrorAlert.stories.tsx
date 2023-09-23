import type { Meta } from "@storybook/preact";
import { Column, ErrorAlert, Text } from "../../src/main";

const meta: Meta<typeof ErrorAlert> = {
  component: ErrorAlert,
  args: {
    children: (
      <Column>
        <Text isBold isLarge>
          错误
        </Text>
        <Text>发生意外错误，请联系技术支持。</Text>
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
