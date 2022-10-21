import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { global, reset } from './assets/global';
import { SearchContextProvider } from './context/SearchContext/SearchProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <Global styles={reset} />
      <Global styles={global} />
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);

