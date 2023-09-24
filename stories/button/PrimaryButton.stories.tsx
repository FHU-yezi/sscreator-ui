import type { Meta } from "@storybook/preact";
import { MdFlag } from "react-icons/md";
import { PrimaryButton } from "../../src/main";

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  args: {
    children: "测试 PrimaryButton",
    className: undefined,
    onClick: () => null,
    loading: false,
    disabled: false,
    fullWidth: false,
    iconOnly: false,
    ariaLabel: undefined,
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
        测试 PrimaryButton
      </>
    ),
  },
};
export const PureIcon = {
  args: {
    children: <MdFlag />,
    iconOnly: true,
    ariaLabel: "测试 PrimaryButton",
  },
};
