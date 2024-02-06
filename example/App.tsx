import { render, type VNode } from "preact";
import { Toaster } from "react-hot-toast";
// eslint-disable-next-line import/no-extraneous-dependencies
import { install } from "resize-observer";
import type { RouteProps } from "wouter-preact";
import { Route, Switch } from "wouter-preact";
import ErrorFallback from "./components/ErrorFallback";
import PageWrapper from "./components/PageWrapper";
import MainPage from "./pages/MainPage";
import { routes } from "./routes";

// eslint-disable-next-line import/no-extraneous-dependencies
import "@unocss/reset/tailwind.css";
import "uno.css";

// 处理 Safari 浏览器上的 ResizeObserver 兼容性问题
if (!window.ResizeObserver) {
  install();
}

export default function App() {
  return (
    <ErrorFallback>
      <Switch>
        <Route path="/">
          <PageWrapper Component={MainPage} />
        </Route>

        {
          routes.map((item) => (
            <Route path={item.path}>
              <PageWrapper name={item.name} Component={item.component} />
            </Route>
          )) as any as VNode<RouteProps<undefined, string>>
        }
      </Switch>

      <Toaster />
    </ErrorFallback>
  );
}

render(<App />, document.body);
