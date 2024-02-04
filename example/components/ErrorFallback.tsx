import type { ComponentChildren, VNode } from "preact";
import { useErrorBoundary } from "preact/hooks";
import { VscBracketError } from "react-icons/vsc";
import { useLocation } from "wouter-preact";
import {
  Badge,
  Center,
  Column,
  Heading1,
  Icon,
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
        <Column gap="gap-2">
          <Icon icon={<VscBracketError className="font-bold" size={48} />} />
          <Heading1>啊呀，出错了...</Heading1>
        </Column>

        <Column gap="gap-2">
          <SmallText bold>时间</SmallText>
          <Text colorScheme="gray">
            {new Date().toISOString().replace("T", " ").replace(/\..*Z/, "")}
          </Text>
        </Column>

        <Column gap="gap-2">
          <SmallText bold>页面路径</SmallText>
          <Text colorScheme="gray">{location}</Text>
        </Column>

        <Column gap="gap-2">
          <SmallText bold>错误信息</SmallText>
          <Badge className="mr-2" colorScheme="danger">
            {error.name}
          </Badge>
          <Text colorScheme="gray">{error.message}</Text>
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
