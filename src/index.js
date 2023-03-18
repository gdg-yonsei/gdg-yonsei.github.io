import './styles/globals.css';
import './styles/locomotive-scroll.css';
import './styles/reset.css';
import 'react-app-polyfill/ie9'; // IE 9 support.
import 'react-app-polyfill/stable'; // Stable
import 'react-tooltip/dist/react-tooltip.css';

import Head from '@components/Head';
import { theme } from '@styles/global-theme';
import media from '@styles/media';
import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from '@/App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Fragment>
    <HelmetProvider>
      <Head />
      <ThemeProvider theme={{ ...theme, ...media }}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </Fragment>,
);
