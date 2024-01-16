import { Route, Switch } from "wouter-preact";
import PageWrapper from "./components/PageWrapper";
import BadgePage from "./pages/BadgePage";
import ButtonPage from "./pages/ButtonPage";
import CheckboxPage from "./pages/CheckboxPage";
import HeadingPage from "./pages/HeadingPage";
import InputPage from "./pages/InputPage";
import LinkPage from "./pages/LinkPage";
import MainPage from "./pages/MainPage";
import NoticePage from "./pages/NoticePage";
import TextPage from "./pages/TextPage";

export default function App() {
  return (
    <Switch>
      <Route key="/" path="/">
        <PageWrapper Component={MainPage} />
      </Route>
      <Route key="/heading" path="/heading">
        <PageWrapper Component={HeadingPage} />
      </Route>
      <Route key="/text" path="/text">
        <PageWrapper Component={TextPage} />
      </Route>
      <Route key="/link" path="/link">
        <PageWrapper Component={LinkPage} />
      </Route>
      <Route key="/badge" path="/badge">
        <PageWrapper Component={BadgePage} />
      </Route>
      <Route key="/button" path="/button">
        <PageWrapper Component={ButtonPage} />
      </Route>
      <Route key="/checkbox" path="/checkbox">
        <PageWrapper Component={CheckboxPage} />
      </Route>
      <Route key="/input" path="/input">
        <PageWrapper Component={InputPage} />
      </Route>
      <Route key="/notice" path="/notice">
        <PageWrapper Component={NoticePage} />
      </Route>
    </Switch>
  );
}
