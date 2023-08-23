/* eslint-disable import/no-extraneous-dependencies */
import "@unocss/reset/tailwind.css";
import { render, StrictMode } from "preact/compat";
import { ErrorBoundary } from "react-error-boundary";
import "uno.css";
import { ColorSchemeSwitch, Header, Row, Text } from "../src/main";
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
        <div className="mx-auto my-7 max-w-4xl min-h-screen w-[90vw]">
          <App />
        </div>
      </ErrorBoundary>
    </StrictMode>
  );
}

render(<Main />, document.body);
