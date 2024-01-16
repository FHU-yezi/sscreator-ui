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
  TextButton,
} from "../src/main";

interface Props {
  error: Error;
}

export default function ErrorFallback({ error }: Props) {
  const [location] = useLocation();

  return (
    <Center className="mx-auto h-screen">
      <Column className="max-w-2xl w-[80vw]">
        <Column gap="gap-2">
          <Icon icon={<VscBracketError className="font-bold" size={48} />} />
          <Heading1>啊呀，出错了...</Heading1>
        </Column>

        <Column gap="gap-2">
          <SmallText bold>时间</SmallText>
          <SmallText colorScheme="gray">
            {new Date().toISOString().replace("T", " ").replace(/\..*Z/, "")}
          </SmallText>
        </Column>

        <Column gap="gap-2">
          <SmallText bold>页面路径</SmallText>
          <SmallText colorScheme="gray">{location}</SmallText>
        </Column>

        <Column gap="gap-2">
          <SmallText bold>错误信息</SmallText>
          <SmallText colorScheme="gray">
            <Badge className="mr-2" colorScheme="danger">
              {error.name}
            </Badge>
            {error.message}
          </SmallText>
        </Column>

        <SolidButton
          colorScheme="primary"
          onClick={() => window.location.reload()}
          fullWidth
        >
          刷新
        </SolidButton>
        {location !== "/" && (
          <Center>
            <TextButton
              colorScheme="primary"
              onClick={() => window.location.replace("/")}
            >
              返回首页
            </TextButton>
          </Center>
        )}
      </Column>
    </Center>
  );
}
