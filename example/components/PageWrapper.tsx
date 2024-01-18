import type { JSX } from "preact";
import { Suspense } from "preact/compat";
import { useEffect } from "preact/hooks";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useLocation } from "wouter-preact";
import {
  ColorSchemeSwitch,
  Column,
  LargeText,
  LoadingPage,
  OutlineButton,
  Row,
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
      <Suspense fallback={<LoadingPage />}>
        <Component />
      </Suspense>
    </Column>
  );
}
