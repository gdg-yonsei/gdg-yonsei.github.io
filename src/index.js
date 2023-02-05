import Head from "@components/Head";
import App from "@pages/App";
import { theme } from "@styles/global-theme";
import { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./styles/globals.css";
import "./styles/locomotive-scroll.css";
import "./styles/reset.css";

import "react-app-polyfill/ie9"; // IE 9 support.
import "react-app-polyfill/ie11"; // IE 11 support.
import "react-app-polyfill/stable"; // Stable 

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
