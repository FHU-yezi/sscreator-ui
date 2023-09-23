import type { Meta } from "@storybook/preact";
import { LoadingIcon } from "../src/main";

const meta: Meta<typeof LoadingIcon> = {
  component: LoadingIcon,
  args: {
    className: undefined,
    size: 48,
    noWrapInText: false,
  },
  argTypes: {
    className: {
      control: "text",
    },
    size: {
      control: "number",
    },
  },
};

export default meta;

export const Default = {};
