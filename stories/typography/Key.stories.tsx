import type { Meta } from "@storybook/preact";
import { Key, Text } from "../../src/main";

const meta: Meta<typeof Key> = {
  component: (props) => (
    <Text>
      按下<Key {...props}>Ctrl</Key>+<Key {...props}>C</Key>来终止
    </Text>
  ),
  args: {
    children: "Ctrl",
    className: undefined,
    textColor: undefined,
    borderColor: undefined,
    backgroundColor: undefined,
  },
  argTypes: {
    className: {
      control: "text",
    },
    textColor: {
      control: "text",
    },
    borderColor: {
      control: "text",
    },
    backgroundColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
