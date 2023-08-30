import { signal } from "@preact/signals";
import { MdOutlineFlag } from "react-icons/md";
import {
  Badge,
  Button,
  Card,
  Center,
  Checkbox,
  Column,
  DataCard,
  ErrorAlert,
  ExternalLink,
  Grid,
  Heading,
  HorizontalScoll,
  IconButton,
  InfoAlert,
  InternalLink,
  Key,
  LoadingArea,
  Modal,
  NoResultNotice,
  NumberInput,
  OutlineButton,
  OutlineIconButton,
  Row,
  SuccessAlert,
  Switch,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  Text,
  TextAreaInput,
  TextInput,
  Tooltip,
  VerticalScoll,
  WarningAlert,
} from "../src/main";

const checkboxValue = signal(false);

const textInputValue = signal("测试 Value");
const textAreaInputValue = signal("测试 Value");
const numberInputValue = signal(0);

const switchValue = signal<1 | 2 | 3>(2);

const isModalOpen = signal(false);
const isLoadingAreaLoading = signal(true);

export default function App() {
  return (
    <Column>
      <Heading>文字</Heading>
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
      <Text isOneLine>
        换行测试文字，这段文字会非常长，以至于一行无法完全展示，这段文字只有第一行会展示，而且在文字的最后会有省略号。
      </Text>

      <Heading>标题</Heading>
      <Heading>标题 Heading</Heading>

      <Heading>行</Heading>
      <Row>
        <div className="rounded bg-green-500 p-2 shadow">元素 1</div>
        <div className="rounded bg-orange-500 p-2 shadow">元素 2</div>
        <div className="rounded bg-blue-500 p-2 shadow">元素 3</div>
        <div className="rounded bg-purple-500 p-2 shadow">元素 4</div>
      </Row>

      <Heading>列</Heading>
      <Column>
        <div className="rounded bg-green-500 p-2 shadow">元素 1</div>
        <div className="rounded bg-orange-500 p-2 shadow">元素 2</div>
        <div className="rounded bg-blue-500 p-2 shadow">元素 3</div>
        <div className="rounded bg-purple-500 p-2 shadow">元素 4</div>
      </Column>

      <Heading>水平滚动</Heading>
      <HorizontalScoll className="w-[30vh]">
        <Text className="w-screen">
          简书是一个 UGC 内容创作平台，其 Slogan
          是「创作你的创作」，通过简书钻贝等虚拟货币，将用户对平台的贡献返还给他们。
          简书是一个 UGC 内容创作平台，其 Slogan
          是「创作你的创作」，通过简书钻贝等虚拟货币，将用户对平台的贡献返还给他们。
          简书是一个 UGC 内容创作平台，其 Slogan
          是「创作你的创作」，通过简书钻贝等虚拟货币，将用户对平台的贡献返还给他们。
        </Text>
      </HorizontalScoll>

      <Heading>垂直滚动</Heading>
      <VerticalScoll className="h-[30vh]">
        <Text className="w-screen sm:w-[30%]">
          简书是一个 UGC 内容创作平台，其 Slogan
          是「创作你的创作」，通过简书钻贝等虚拟货币，将用户对平台的贡献返还给他们。
          简书是一个 UGC 内容创作平台，其 Slogan
          是「创作你的创作」，通过简书钻贝等虚拟货币，将用户对平台的贡献返还给他们。
          简书是一个 UGC 内容创作平台，其 Slogan
          是「创作你的创作」，通过简书钻贝等虚拟货币，将用户对平台的贡献返还给他们。
          简书是一个 UGC 内容创作平台，其 Slogan
          是「创作你的创作」，通过简书钻贝等虚拟货币，将用户对平台的贡献返还给他们。
          简书是一个 UGC 内容创作平台，其 Slogan
          是「创作你的创作」，通过简书钻贝等虚拟货币，将用户对平台的贡献返还给他们。
        </Text>
      </VerticalScoll>

      <Heading>内部链接</Heading>
      <InternalLink path="/aa">链接</InternalLink>

      <Heading>外部链接</Heading>
      <ExternalLink href="https://www.jianshu.com" hideIcon>
        简书
      </ExternalLink>
      <ExternalLink href="https://github.com" />

      <Heading>键位</Heading>
      <Text>
        按下
        <Key>Ctrl + C</Key>
        来复制内容
      </Text>

      <Heading>按钮</Heading>
      <Button leftIcon={<MdOutlineFlag />}>按钮</Button>
      <Button isLoading>加载态</Button>
      <Button leftIcon={<MdOutlineFlag />} isLoading>
        加载态（带图标）
      </Button>
      <Button isDisabled>禁用态</Button>
      <Button isInline>Inline 按钮</Button>

      <Heading>外框按钮</Heading>
      <OutlineButton leftIcon={<MdOutlineFlag />}>按钮</OutlineButton>
      <OutlineButton isLoading>加载态</OutlineButton>
      <OutlineButton leftIcon={<MdOutlineFlag />} isLoading>
        加载态（带图标）
      </OutlineButton>
      <OutlineButton isDisabled>禁用态</OutlineButton>
      <OutlineButton isInline>Inline 按钮</OutlineButton>

      <Heading>图标按钮</Heading>
      <Row>
        <IconButton label="示例按钮">
          <MdOutlineFlag />
        </IconButton>
        <IconButton label="示例按钮" isLoading>
          <MdOutlineFlag />
        </IconButton>
        <IconButton label="示例按钮" isDisabled>
          <MdOutlineFlag />
        </IconButton>
      </Row>

      <Heading>外框图标按钮</Heading>
      <Row>
        <OutlineIconButton label="示例按钮">
          <MdOutlineFlag />
        </OutlineIconButton>
        <OutlineIconButton label="示例按钮" isLoading>
          <MdOutlineFlag />
        </OutlineIconButton>
        <OutlineIconButton label="示例按钮" isDisabled>
          <MdOutlineFlag />
        </OutlineIconButton>
      </Row>

      <Heading>复选框</Heading>
      <Checkbox
        label="测试 Label"
        value={checkboxValue}
        description="测试 Description"
      />
      <Text>内容：{checkboxValue.value}</Text>

      <Heading>文本输入</Heading>
      <TextInput
        label="测试 Label"
        value={textInputValue}
        description="测试 Description"
        placeholder="占位符 Placeholder"
      />
      <Text>内容：{textInputValue.value}</Text>

      <Heading>文本输入</Heading>
      <TextAreaInput
        label="测试 Label"
        value={textAreaInputValue}
        description="测试 Description"
        placeholder="占位符 Placeholder"
      />
      <Text>内容：{textAreaInputValue.value}</Text>

      <Heading>数字输入</Heading>
      <NumberInput
        label="测试 Label"
        value={numberInputValue}
        description="测试 Description"
        placeholder="占位符 Placeholder"
      />
      <Text>内容：{numberInputValue.value}</Text>

      <Heading>卡片</Heading>
      <Card>
        <Row>
          <div className="rounded bg-green-500 p-2 shadow">元素 1</div>
          <div className="rounded bg-orange-500 p-2 shadow">元素 2</div>
          <div className="rounded bg-blue-500 p-2 shadow">元素 3</div>
          <div className="rounded bg-purple-500 p-2 shadow">元素 4</div>
        </Row>
      </Card>

      <Heading>Grid</Heading>
      <Grid cols="grid-cols-1 sm:grid-cols-2">
        <div className="rounded bg-green-500 p-2 shadow">元素 1</div>
        <div className="rounded bg-orange-500 p-2 shadow">元素 2</div>
        <div className="rounded bg-blue-500 p-2 shadow">元素 3</div>
        <div className="rounded bg-purple-500 p-2 shadow">元素 4</div>
      </Grid>

      <Heading>徽章</Heading>
      <Row>
        <Badge color="bg-green-400 dark:bg-green-600">可用</Badge>
        <Badge color="bg-orange-400 dark:bg-orange-600">降级</Badge>
        <Badge color="bg-red-400 dark:bg-red-600">不可用</Badge>
      </Row>

      <Heading>滑动选择</Heading>
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

      <Heading>提示</Heading>
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

      <Heading>表格</Heading>
      <Table className="w-full">
        <TableHeader>
          <Text isBold isCenter isNoWrap>
            第一列
          </Text>
          <Text isBold isCenter isNoWrap>
            第二列
          </Text>
          <Text isBold isCenter isNoWrap>
            第三列
          </Text>
        </TableHeader>
        <TableBody>
          <TableRow>
            <Text isCenter isNoWrap>
              第一行第一列
            </Text>
            <Text isCenter isNoWrap>
              第一行第二列
            </Text>
            <Text isCenter isNoWrap>
              第一行第三列
            </Text>
          </TableRow>
          <TableRow>
            <Text isCenter isNoWrap>
              第二行第一列
            </Text>
            <Text isCenter isNoWrap>
              第二行第二列
            </Text>
            <Text isCenter isNoWrap>
              第二行第三列
            </Text>
          </TableRow>
          <TableRow>
            <Text isCenter isNoWrap>
              第三行第一列
            </Text>
            <Text isCenter isNoWrap>
              第三行第二列
            </Text>
            <Text isCenter isNoWrap>
              第三行第三列
            </Text>
          </TableRow>
        </TableBody>
      </Table>

      <Heading>模态窗</Heading>
      <Button onClick={() => (isModalOpen.value = true)}>打开模态窗</Button>
      <Modal isOpen={isModalOpen} title="测试标题">
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
      </Modal>

      <Heading>无结果提示</Heading>
      <NoResultNotice />

      <Heading>数据卡片</Heading>
      <Row>
        <DataCard
          className="flex-1"
          name="测试数据"
          value={1234}
          trendValue="增长 6.66%"
          trendType="up"
          description="这是一条测试数据"
        />
        <DataCard
          className="flex-1"
          name="Demo Data"
          value="56.78%"
          description="无边框"
          isBorderLess
        />
      </Row>

      <Heading>加载中区域</Heading>
      <Checkbox label="加载中" value={isLoadingAreaLoading} />
      <LoadingArea
        className="h-48 w-full"
        isLoading={isLoadingAreaLoading.value}
      >
        <Center className="h-48 w-full rounded bg-green-500 p-2 shadow">
          <Text isLarge isBold>
            内容
          </Text>
        </Center>
      </LoadingArea>

      <Heading>提示</Heading>
      <Tooltip tooltip="这是一条很长的提示，为了测试提示组件是否能在这种情况下自动换行，以保证阅读体验">
        <Text>鼠标移动到文字上查看提示</Text>
      </Tooltip>
      <Tooltip tooltip="这是一条较短的提示" isHideIcon>
        <Text>隐藏图标的提示</Text>
      </Tooltip>
    </Column>
  );
}
