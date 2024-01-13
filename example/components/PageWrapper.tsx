import type { JSX } from "preact";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useLocation } from "wouter-preact";
import {
  Column,
  Icon,
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
    <Column className="my-8 w-[90vw] max-w-4xl mx-auto">
      <Row className="justify-between mb-4" itemsCenter>
        {location === "/" ? (
          <Text>SSCreator UI</Text>
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
