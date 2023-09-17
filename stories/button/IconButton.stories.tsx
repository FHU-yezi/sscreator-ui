import type { Meta } from "@storybook/preact";
import { MdFlag } from "react-icons/md";
import { IconButton } from "../../src/main";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  args: {
    children: <MdFlag />,
    className: undefined,
    onClick: () => null,
    label: "按钮",
    isLoading: false,
    isDisabled: false,
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
