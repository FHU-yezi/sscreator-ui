/* eslint-disable import/no-extraneous-dependencies */
import "@unocss/reset/tailwind.css";
import { render, StrictMode } from "preact/compat";
import { ErrorBoundary } from "react-error-boundary";
import "uno.css";
import {
  AppContainer,
  ColorSchemeSwitch,
  Column,
  ExternalLink,
  Footer,
  Header,
  Row,
  Text,
} from "../src/main";
import App from "./App";
import ErrorFallback from "./components/ErrorFallback";

function Main() {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header>
          <Row className="h-full w-full flex-nowrap items-center justify-between">
            <Text isLarge isBold>
              SSCreator UI
            </Text>
            <ColorSchemeSwitch />
          </Row>
        </Header>
        <AppContainer>
          <App />
        </AppContainer>
        <Footer>
          <Column gap="gap-2">
            <Text isGray>
              GitHub：
              <ExternalLink href="https://github.com/FHU-yezi/sscreator-ui" />
            </Text>
            <Text isGray>Powered By Open-Source Software</Text>
            <Text isGray>
              By{" "}
              <ExternalLink href="https://www.jianshu.com/u/ea36c8d8aa30">
                初心不变_叶子
              </ExternalLink>
            </Text>
          </Column>
        </Footer>
      </ErrorBoundary>
    </StrictMode>
  );
}

render(<Main />, document.body);
