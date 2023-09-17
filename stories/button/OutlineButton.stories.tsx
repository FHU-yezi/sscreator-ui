import type { Meta } from "@storybook/preact";
import { MdFlag } from "react-icons/md";
import { OutlineButton } from "../../src/main";

const meta: Meta<typeof OutlineButton> = {
  component: OutlineButton,
  args: {
    children: "按钮",
    className: undefined,
    onClick: () => null,
    leftIcon: undefined,
    isLoading: false,
    isDisabled: false,
    isInline: false,
  },
  argTypes: {
    className: {
      control: "text",
    },
    color: {
      control: "text",
    },
    hoverColor: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
export const Loading = {
  args: {
    isLoading: true,
  },
};
export const Disabled = {
  args: {
    isDisabled: true,
  },
};
export const Inline = {
  args: {
    isInline: true,
  },
};
export const WithIcon = {
  args: {
    leftIcon: <MdFlag />,
  },
};
