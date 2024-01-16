import type { JSX } from "preact";
import { MdKeyboardArrowLeft, MdSwapHoriz } from "react-icons/md";
import { useLocation } from "wouter-preact";
import {
  Column,
  LargeText,
  OutlineButton,
  Row,
  Text,
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
          <OutlineButton
            colorScheme="secondary"
            leftIcon={<MdKeyboardArrowLeft size={24} />}
            onClick={() => setLocation("/")}
          >
            返回
          </OutlineButton>
        )}
        <Row itemsCenter>
          <Text>{colorScheme === "light" ? "浅色模式" : "深色模式"}</Text>
          <OutlineButton
            colorScheme="primary"
            rightIcon={<MdSwapHoriz size={20} />}
            onClick={toggleColorScheme}
            small
          >
            切换
          </OutlineButton>
        </Row>
      </Row>
      <Component />
    </Column>
  );
}
