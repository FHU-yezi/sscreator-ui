import type { Meta } from "@storybook/preact";
import { InternalLink, Text } from "../../src/main";

const meta: Meta<typeof InternalLink> = {
  component: (props) => (
    <Text>
      点击 <InternalLink {...props} /> 原地跳转
    </Text>
  ),
  args: {
    children: "此链接",
    className: undefined,
    path: "/",
    hideIcon: false,
    textColor: undefined,
  },
  argTypes: {
    className: {
      control: "text",
    },
    textColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
