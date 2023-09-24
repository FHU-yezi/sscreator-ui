import type { Meta } from "@storybook/preact";
import { Column, SuccessAlert, Text } from "../../src/main";

const meta: Meta<typeof SuccessAlert> = {
  component: SuccessAlert,
  args: {
    children: (
      <Column>
        <Text bold large>
          文章已发布
        </Text>
        <Text>您的文章将在通过审核后对外可见。</Text>
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
