import { signal } from "@preact/signals";
import { MdOutlineFlag } from "react-icons/md";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  ColorSchemeSwitch,
  Column,
  ErrorAlert,
  ExternalLink,
  Grid,
  IconButton,
  InfoAlert,
  InternalLink,
  NoResultNotice,
  NumberInput,
  OutlineButton,
  OutlineIconButton,
  Row,
  SuccessAlert,
  Switch,
  Text,
  TextAreaInput,
  TextInput,
  Title,
  WarningAlert,
} from "../src/main";
import "../src/utils/colorSchemeHelper";

const checkboxValue = signal(false);

const textInputValue = signal("测试 Value");
const textAreaInputValue = signal("测试 Value");
const numberInputValue = signal(0);

const switchValue = signal<1 | 2 | 3>(2);

export default function App() {
  return (
    <Column>
      <Title>颜色主题切换</Title>
      <ColorSchemeSwitch />

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
      <Button leftIcon={<MdOutlineFlag />}>按钮</Button>
      <Button isLoading>加载态</Button>
      <Button leftIcon={<MdOutlineFlag />} isLoading>
        加载态（带图标）
      </Button>
      <Button isDisabled>禁用态</Button>
      <Button isInline>Inline 按钮</Button>

      <Title>外框按钮</Title>
      <OutlineButton leftIcon={<MdOutlineFlag />}>按钮</OutlineButton>
      <OutlineButton isLoading>加载态</OutlineButton>
      <OutlineButton leftIcon={<MdOutlineFlag />} isLoading>
        加载态（带图标）
      </OutlineButton>
      <OutlineButton isDisabled>禁用态</OutlineButton>
      <OutlineButton isInline>Inline 按钮</OutlineButton>

      <Title>图标按钮</Title>
      <Row>
        <IconButton>
          <MdOutlineFlag />
        </IconButton>
        <IconButton isLoading>
          <MdOutlineFlag />
        </IconButton>
        <IconButton isDisabled>
          <MdOutlineFlag />
        </IconButton>
      </Row>

      <Title>外框图标按钮</Title>
      <Row>
        <OutlineIconButton>
          <MdOutlineFlag />
        </OutlineIconButton>
        <OutlineIconButton isLoading>
          <MdOutlineFlag />
        </OutlineIconButton>
        <OutlineIconButton isDisabled>
          <MdOutlineFlag />
        </OutlineIconButton>
      </Row>

      <Title>复选框</Title>
      <Checkbox
        label="测试 Label"
        value={checkboxValue}
        description="测试 Description"
      />
      <Text>内容：{checkboxValue.value}</Text>

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

      <Title>卡片</Title>
      <Card>
        <Row>
          <div className="rounded bg-green-500 p-2 shadow">元素 1</div>
          <div className="rounded bg-orange-500 p-2 shadow">元素 2</div>
          <div className="rounded bg-blue-500 p-2 shadow">元素 3</div>
          <div className="rounded bg-purple-500 p-2 shadow">元素 4</div>
        </Row>
      </Card>

      <Title>Grid</Title>
      <Grid cols="grid-cols-1 sm:grid-cols-2">
        <div className="rounded bg-green-500 p-2 shadow">元素 1</div>
        <div className="rounded bg-orange-500 p-2 shadow">元素 2</div>
        <div className="rounded bg-blue-500 p-2 shadow">元素 3</div>
        <div className="rounded bg-purple-500 p-2 shadow">元素 4</div>
      </Grid>

      <Title>徽章</Title>
      <Row>
        <Badge color="bg-green-400 dark:bg-green-600">可用</Badge>
        <Badge color="bg-orange-400 dark:bg-orange-600">降级</Badge>
        <Badge color="bg-red-400 dark:bg-red-600">不可用</Badge>
      </Row>

      <Title>滑动选择</Title>
      <Switch
        label="测试 Label"
        value={switchValue}
        description="测试 Description"
        data={[
          {
            label: "选项一",
            value: 1,
            leftIcon: <MdOutlineFlag />,
          },
          { label: "选项二", value: 2 },
          { label: "选项三", value: 3 },
        ]}
      />
      <Text>当前选择：{switchValue.value}</Text>

      <Title>提示</Title>
      <SuccessAlert>
        <Column gap="gap-2">
          <Text isLarge isBold>
            成功
          </Text>
          <Text>文章已发布。</Text>
          <Text>请返回您的个人主页查看展示效果。</Text>
        </Column>
      </SuccessAlert>
      <InfoAlert>
        <Column gap="gap-2">
          <Text isLarge isBold>
            提示
          </Text>
          <Text>
            在昨天，您的文章被阅读了 300 次，收获了 23 个点赞和 17 条评论。
          </Text>
          <Text>欲访问更多信息，请转到 首页 - 创作中心。</Text>
        </Column>
      </InfoAlert>
      <WarningAlert>
        <Column gap="gap-2">
          <Text isLarge isBold>
            警告
          </Text>
          <Text>您有 1 篇文章未通过审核，已转为仅自己可见。</Text>
          <Text>请转到 首页 - 文章管理 查看详情。</Text>
        </Column>
      </WarningAlert>
      <ErrorAlert>
        <Column gap="gap-2">
          <Text isLarge isBold>
            错误
          </Text>
          <Text>获取数据时出现未知异常。</Text>
          <Text>请尝试刷新页面或更换网络环境。</Text>
        </Column>
      </ErrorAlert>

      <Title>无结果提示</Title>
      <NoResultNotice />
    </Column>
  );
}
