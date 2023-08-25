/* eslint-disable import/no-extraneous-dependencies */
import "@unocss/reset/tailwind.css";
import { render, StrictMode } from "preact/compat";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import "uno.css";
import { AppContainer } from "../src/main";
import App from "./App";
import ErrorFallback from "./components/ErrorFallback";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Main() {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header />
        <AppContainer>
          <App />
        </AppContainer>
        <Footer />

        <Toaster />
      </ErrorBoundary>
    </StrictMode>
  );
}

render(<Main />, document.body);
