import ReactDOM from "react-dom/client";
import Head from "@components/Head";
import Home from "@pages/Home/index";
import { theme } from "@styles/global-theme";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import "./styles/globals.css";
import "./styles/locomotive-scroll.css";
import "./styles/reset.css";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "@pages/App";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Fragment>
    <HelmetProvider>
      <Head />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </Fragment>
);
