import type { Meta } from "@storybook/preact";
import { MdFlag } from "react-icons/md";
import { OutlineButton } from "../../src/main";

const meta: Meta<typeof OutlineButton> = {
  component: OutlineButton,
  args: {
    children: "测试 OutlineButton",
    className: undefined,
    icon: undefined,
    onClick: () => null,
    loading: false,
    disabled: false,
    fullWidth: false,
    hoverBackgroundColor: undefined,
    ariaLabel: undefined,
  },
  argTypes: {
    className: {
      control: "text",
    },
    borderColor: {
      control: "text",
    },
    hoverBackgroundColor: {
      control: "text",
    },
    ariaLabel: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
export const Loading = {
  args: {
    loading: true,
  },
};
export const Disabled = {
  args: {
    disabled: true,
  },
};
export const FullWidth = {
  args: {
    fullWidth: true,
  },
};
export const WithIcon = {
  args: {
    icon: <MdFlag />,
  },
};
export const PureIcon = {
  args: {
    children: undefined,
    icon: <MdFlag />,
    ariaLabel: "测试 OutlineButton",
  },
};
