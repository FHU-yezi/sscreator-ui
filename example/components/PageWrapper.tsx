import type { JSX } from "preact";
import { useEffect } from "preact/hooks";
import { useLocation } from "wouter-preact";
import {
  ColorSchemeSwitch,
  ExternalLink,
  Footer,
  Header,
  LargeText,
  Main,
  Text,
  TextButton,
} from "../../src/main";

interface Props {
  name?: string;
  Component(): JSX.Element;
}

export default function PageWrapper({ name, Component }: Props) {
  // 设置页面标题
  useEffect(() => {
    document.title = name ? `${name} - SSCreator UI` : "SSCreator UI";
  }, []);

  // 处理部分情况下页面切换后不在顶部的问题
  useEffect(() => window.scrollTo(0, 0), []);

  const [location, setLocation] = useLocation();

  return (
    <>
      <Header className="items-center justify-between">
        {location === "/" ? (
          <LargeText bold>SSCreator UI</LargeText>
        ) : (
          <TextButton
            colorScheme="secondary"
            leftIcon="i-mdi-keyboard-arrow-left"
            onClick={() => setLocation("/")}
          >
            返回
          </TextButton>
        )}
        <ColorSchemeSwitch />
      </Header>
      <Main className="mx-auto my-8 max-w-4xl min-h-screen w-[90vw] flex flex-col gap-4">
        <Component />
      </Main>
      <Footer className="mx-auto max-w-4xl w-[90vw]">
        <Text>Made With Love</Text>
        <ExternalLink href="https://github.com/FHU-yezi/sscreator-ui">
          Opensource On GitHub
        </ExternalLink>
      </Footer>
    </>
  );
}
