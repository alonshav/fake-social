import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { lightMode } from './app/styles/global/GlobalThemes';
import GlobalStyles from './app/styles/global/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={lightMode}>
      <GlobalStyles />
      <Provider store={store}>
          <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
