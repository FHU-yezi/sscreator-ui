import { Route, Switch } from "wouter-preact";
import PageWrapper from "./components/PageWrapper";
import ButtonPage from "./pages/ButtonPage";
import HeadingPage from "./pages/HeadingPage";
import InputPage from "./pages/InputPage";
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
      <Route key="/button" path="/button">
        <PageWrapper Component={ButtonPage} />
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
