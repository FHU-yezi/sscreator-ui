import {
  ColorSchemeSwitch,
  Header as HeaderBlock,
  Row,
  Text,
} from "../../src/main";

export default function Header() {
  return (
    <HeaderBlock>
      <Row className="h-full w-full flex-nowrap items-center justify-between">
        <Text isLarge isBold>
          SSCreator UI
        </Text>
        <ColorSchemeSwitch />
      </Row>
    </HeaderBlock>
  );
}
