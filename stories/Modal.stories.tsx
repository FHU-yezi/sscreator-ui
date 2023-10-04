import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { Column, Modal, PrimaryButton, Text } from "../src/main";

const open = signal(false);

const meta: Meta<typeof Modal> = {
  component: (args) => (
    <>
      <Modal {...args} />
      <PrimaryButton onClick={() => (open.value = true)}>
        Open Modal
      </PrimaryButton>
    </>
  ),
  args: {
    children: (
      <Column>
        <Text>测试文字</Text>
      </Column>
    ),
    className: undefined,
    open,
    title: "测试 Modal",
    backgroundColor: undefined,
    padding: undefined,
    rounded: undefined,
    hideCloseButton: false,
    preventCloseByClickMask: false,
    preventCloseByPressEsc: false,
  },
  argTypes: {
    className: {
      control: "text",
    },
    backgroundColor: {
      control: "text",
    },
    padding: {
      control: "text",
    },
    rounded: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
