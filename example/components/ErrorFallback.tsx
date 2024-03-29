import type { ComponentChildren, VNode } from "preact";
import { useErrorBoundary } from "preact/hooks";
import { useLocation } from "wouter-preact";
import {
  Badge,
  Center,
  Column,
  Heading1,
  Icon,
  Row,
  SmallText,
  SolidButton,
  Text,
  TextButton,
} from "../../src/main";

interface Props {
  children: ComponentChildren;
}

export default function ErrorFallback({ children }: Props) {
  const [error]: [Error, any] = useErrorBoundary();
  const [location] = useLocation();

  if (!error) {
    return children as VNode;
  }

  return (
    <Center className="mx-auto h-screen">
      <Column className="max-w-2xl w-[80vw]">
        <Row gap="gap-2" itemsCenter>
          <Icon className="text-3xl" icon="i-mdi-warning-octagon" />
          <Heading1>啊呀，出错了...</Heading1>
        </Row>

        <Column gap="gap-2">
          <SmallText bold>时间</SmallText>
          <Text color="gray">
            {new Date().toISOString().replace("T", " ").replace(/\..*Z/, "")}
          </Text>
        </Column>

        <Column gap="gap-2">
          <SmallText bold>页面路径</SmallText>
          <Text color="gray">{location}</Text>
        </Column>

        <Column gap="gap-2">
          <SmallText bold>错误信息</SmallText>
          <Badge className="mr-2" color="danger">
            {error.name}
          </Badge>
          <Text color="gray">{error.message}</Text>
        </Column>

        <SolidButton onClick={() => window.location.reload()} fullWidth>
          刷新
        </SolidButton>
        {location !== "/" && (
          <Center>
            <TextButton onClick={() => window.location.replace("/")}>
              返回首页
            </TextButton>
          </Center>
        )}
      </Column>
    </Center>
  );
}
