import type { JSX } from "preact";
import { Column, SolidButton, Text, useColorScheme } from "../../src/main";

interface Props {
  Component(): JSX.Element;
}

export default function PageWrapper({ Component }: Props) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Column className="my-8 w-fit mx-auto">
      <Text>Current Color Scheme: {colorScheme}</Text>
      <SolidButton type="secondary" onClick={toggleColorScheme} small>
        Toggle Color Scheme
      </SolidButton>
      <Component />
    </Column>
  );
}
