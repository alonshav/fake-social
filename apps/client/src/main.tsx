import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app/app';
import rootStore from './app/store/rootStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </StrictMode>
);
