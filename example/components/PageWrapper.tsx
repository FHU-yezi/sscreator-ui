import type { JSX } from "preact";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useLocation } from "wouter-preact";
import {
  Column,
  Icon,
  LargeText,
  Row,
  Text,
  TextButton,
  useColorScheme,
} from "../../src/main";

interface Props {
  Component(): JSX.Element;
}

export default function PageWrapper({ Component }: Props) {
  const [location, setLocation] = useLocation();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Column className="mx-auto my-8 max-w-4xl w-[90vw]">
      <Row className="mb-4 justify-between" itemsCenter>
        {location === "/" ? (
          <LargeText bold>SSCreator UI</LargeText>
        ) : (
          <TextButton type="secondary" onClick={() => setLocation("/")}>
            <Icon icon={<MdKeyboardArrowLeft size={24} />} />
            返回
          </TextButton>
        )}
        <Row gap="gap-2">
          <Text>{colorScheme === "light" ? "浅色模式" : "深色模式"}</Text>
          <TextButton type="primary" onClick={toggleColorScheme}>
            切换
          </TextButton>
        </Row>
      </Row>
      <Component />
    </Column>
  );
}
