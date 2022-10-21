import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { global, reset } from './assets/global';
import { AuthContextProvider } from './context/AuthContext/AuthProvider';
import { SearchContextProvider } from './context/SearchContext/SearchProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <Global styles={reset} />
        <Global styles={global} />
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

