import type { VNode } from "preact";
import type { RouteProps } from "wouter-preact";
import { Route, Switch } from "wouter-preact";
import PageWrapper from "./components/PageWrapper";
import MainPage from "./pages/MainPage";
import { routes } from "./routes";

export default function App() {
  return (
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
  );
}
