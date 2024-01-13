import { Route, Switch } from "wouter-preact";
import PageWrapper from "./components/PageWrapper";
import NoticesPage from "./pages/NoticesPage";
import ButtonsPage from "./pages/ButtonsPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <Switch>
      <Route key="/" path="/">
        <PageWrapper Component={MainPage} />
      </Route>
      <Route key="/button" path="/button">
        <PageWrapper Component={ButtonsPage} />
      </Route>
      <Route key="/notice" path="/notice">
        <PageWrapper Component={NoticesPage} />
      </Route>
    </Switch>
  );
}
