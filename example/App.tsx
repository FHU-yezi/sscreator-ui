import { signal } from "@preact/signals";
import { FiFlag } from "react-icons/fi";
import {
  Button,
  Column,
  ExternalLink,
  IconButton,
  InternalLink,
  NumberInput,
  OutlineButton,
  OutlineIconButton,
  Row,
  Text,
  TextAreaInput,
  TextInput,
  Title,
} from "../src/main";
import "../src/utils/colorSchemeHelper";

const textInputValue = signal("测试 Value");
const textAreaInputValue = signal("测试 Value");
const numberInputValue = signal(0);

export default function App() {
  return (
    <Column>
      <Title>文字</Title>
      <Text>文字 Text</Text>
      <Text isGray>灰色文字 Gray Text</Text>
      <Text isSmall>小号文字 Small Text</Text>
      <Text isSmall isGray>
        小号灰色文字 Small Gray Text
      </Text>
      <Text isLarge>大号文字 Large Text</Text>
      <Text isBold>加粗文字 Bold Text</Text>
      <Text isLarge isBold>
        大号加粗文字 Large Bold Text
      </Text>

      <Title>标题</Title>
      <Title>标题 Title</Title>

      <Title>行</Title>
      <Row>
        <div className="rounded bg-green-500 p-2 shadow">元素 1</div>
        <div className="rounded bg-orange-500 p-2 shadow">元素 2</div>
        <div className="rounded bg-blue-500 p-2 shadow">元素 3</div>
        <div className="rounded bg-purple-500 p-2 shadow">元素 4</div>
      </Row>

      <Title>列</Title>
      <Column>
        <div className="rounded bg-green-500 p-2 shadow">元素 1</div>
        <div className="rounded bg-orange-500 p-2 shadow">元素 2</div>
        <div className="rounded bg-blue-500 p-2 shadow">元素 3</div>
        <div className="rounded bg-purple-500 p-2 shadow">元素 4</div>
      </Column>

      <Title>内部链接</Title>
      <InternalLink path="/aa">链接</InternalLink>

      <Title>外部链接</Title>
      <ExternalLink href="https://www.jianshu.com" hideIcon>
        简书
      </ExternalLink>
      <ExternalLink href="https://github.com" />

      <Title>按钮</Title>
      <Button leftIcon={<FiFlag />}>按钮</Button>
      <Button isLoading>加载态</Button>
      <Button leftIcon={<FiFlag />} isLoading>
        加载态（带图标）
      </Button>
      <Button isDisabled>禁用态</Button>
      <Button isInline>Inline 按钮</Button>

      <Title>外框按钮</Title>
      <OutlineButton leftIcon={<FiFlag />}>按钮</OutlineButton>
      <OutlineButton isLoading>加载态</OutlineButton>
      <OutlineButton leftIcon={<FiFlag />} isLoading>
        加载态（带图标）
      </OutlineButton>
      <OutlineButton isDisabled>禁用态</OutlineButton>
      <OutlineButton isInline>Inline 按钮</OutlineButton>

      <Title>图标按钮</Title>
      <Row>
        <IconButton>
          <FiFlag />
        </IconButton>
        <IconButton isLoading>
          <FiFlag />
        </IconButton>
        <IconButton isDisabled>
          <FiFlag />
        </IconButton>
      </Row>

      <Title>外框图标按钮</Title>
      <Row>
        <OutlineIconButton>
          <FiFlag />
        </OutlineIconButton>
        <OutlineIconButton isLoading>
          <FiFlag />
        </OutlineIconButton>
        <OutlineIconButton isDisabled>
          <FiFlag />
        </OutlineIconButton>
      </Row>

      <Title>文本输入</Title>
      <TextInput
        label="测试 Label"
        value={textInputValue}
        description="测试 Description"
        placeholder="占位符 Placeholder"
      />
      <Text>内容：{textInputValue.value}</Text>

      <Title>文本输入</Title>
      <TextAreaInput
        label="测试 Label"
        value={textAreaInputValue}
        description="测试 Description"
        placeholder="占位符 Placeholder"
      />
      <Text>内容：{textAreaInputValue.value}</Text>

      <Title>数字输入</Title>
      <NumberInput
        label="测试 Label"
        value={numberInputValue}
        description="测试 Description"
        placeholder="占位符 Placeholder"
      />
      <Text>内容：{numberInputValue.value}</Text>
    </Column>
  );
}
