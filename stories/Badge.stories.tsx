import type { Meta } from "@storybook/preact";
import { Badge } from "../src/main";

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    children: "Badge",
    className: undefined,
    color: "bg-green-300",
  },
  argTypes: {
    className: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
