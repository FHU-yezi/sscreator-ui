import type { JSX } from "preact";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useLocation } from "wouter-preact";
import {
  ColorSchemeSwitch,
  Column,
  LargeText,
  OutlineButton,
  Row,
} from "../../src/main";

interface Props {
  Component(): JSX.Element;
}

export default function PageWrapper({ Component }: Props) {
  const [location, setLocation] = useLocation();

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
        <ColorSchemeSwitch />
      </Row>
      <Component />
    </Column>
  );
}
