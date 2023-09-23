/* eslint-disable react/jsx-props-no-spreading */
import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { Button, Column, Modal, Text } from "../src/main";

const isOpen = signal(false);

const meta: Meta<typeof Modal> = {
  component: (args) => (
    <>
      <Modal {...args} />
      <Button onClick={() => (isOpen.value = true)}>Open Modal</Button>
    </>
  ),
  args: {
    children: (
      <Column>
        <Text>测试文字</Text>
      </Column>
    ),
    className: undefined,
    isOpen,
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
