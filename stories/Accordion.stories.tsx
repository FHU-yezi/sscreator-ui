import { signal } from "@preact/signals";
import type { Meta } from "@storybook/preact";
import { Accordion, Column, Text } from "../src/main";

const isOpened = signal(false);

const meta: Meta<typeof Accordion> = {
  component: (props) => <Accordion {...props} />,
  args: {
    children: (
      <Column>
        <Text>简书会员分为四个等级：铜牌、银牌、金牌和白金。</Text>
        <Text>高等级会员会获得更高的持钻收益率。</Text>
      </Column>
    ),
    cardClassName: undefined,
    title: "关于简书会员",
    isOpened,
  },
  argTypes: {
    cardClassName: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};
