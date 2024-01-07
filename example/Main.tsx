/* eslint-disable import/no-extraneous-dependencies */
import "@unocss/reset/tailwind.css";
import { StrictMode, render } from "preact/compat";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { install } from "resize-observer";
import "uno.css";
import App from "./App";
import ErrorFallback from "./ErrorFallback";

// 处理 Safari 浏览器上的 ResizeObserver 兼容性问题
if (!window.ResizeObserver) {
  install();
}

function Main() {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>

      <Toaster />
    </StrictMode>
  );
}

render(<Main />, document.body);
