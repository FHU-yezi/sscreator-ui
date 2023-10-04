import type { Meta } from "@storybook/preact";
import { MdFlag } from "react-icons/md";
import { GhostButton } from "../../src/main";

const meta: Meta<typeof GhostButton> = {
  component: GhostButton,
  args: {
    children: "测试 GhostButton",
    className: undefined,
    onClick: () => null,
    loading: false,
    disabled: false,
    fullWidth: false,
    iconOnly: false,
    hoverBackgroundColor: undefined,
    ariaLabel: undefined,
  },
  argTypes: {
    className: {
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
    children: (
      <>
        <MdFlag />
        测试 GhostButton
      </>
    ),
  },
};
export const PureIcon = {
  args: {
    children: <MdFlag />,
    iconOnly: true,
    ariaLabel: "测试 GhostButton",
  },
};
