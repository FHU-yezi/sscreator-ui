import type { Meta } from "@storybook/preact";
import { MdFlag } from "react-icons/md";
import { Icon, Text } from "../../src/main";

const meta: Meta<typeof Icon> = {
  component: (props) => (
    <Text>
      这<Icon {...props} />
      是一个图标
    </Text>
  ),
  args: {
    children: <MdFlag />,
    className: undefined,
    iconColor: undefined,
  },
  argTypes: {
    className: {
      control: "text",
    },
    iconColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
