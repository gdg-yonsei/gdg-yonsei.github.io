import { hydrate, render } from "react-dom";
import App from "@pages/App";
import "./styles/reset.css";
import "./styles/globals.css";
import Head from "@components/Head";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/global-theme";

const rootElement = document.getElementById("root");

function Index() {
  return (
    <>
      <HelmetProvider>
        <Head />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

if (rootElement.hasChildNodes()) {
  hydrate(<Index />, rootElement);
} else {
  render(<Index />, rootElement);
}
