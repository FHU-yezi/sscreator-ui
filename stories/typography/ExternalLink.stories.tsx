import type { Meta } from "@storybook/preact";
import { ExternalLink, Text } from "../../src/main";

const meta: Meta<typeof ExternalLink> = {
  component: (props) => (
    <Text>
      点击 <ExternalLink {...props} /> 访问简书
    </Text>
  ),
  args: {
    children: "此链接",
    className: undefined,
    href: "https://www.jianshu.com",
    openInCurrentTab: false,
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
