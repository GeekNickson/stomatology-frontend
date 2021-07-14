import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { history, store } from './shared/store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/default-theme';
import { ConnectedRouter } from 'connected-react-router';

const Globals = createGlobalStyle`
  ::selection {
    text-shadow: none;
    color: #fff;
    background-color: rgba(94, 94, 202, 0.5);
  }

  html {
    font-size: 62.5%;
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  img {
    height: auto;
    max-width: 100%;
    user-select: none;
  }

  button {
    color: inherit;
  }

  a, button {
    touch-action: manipulation;
  }

  svg {
    fill: currentColor;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Globals />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
