import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { global, reset } from './assets/global';
import { AuthContextProvider } from './context/AuthContext/AuthProvider';
import { ReservationContextProvider } from './context/ReserveContext/ReservationProvider';
import { SearchContextProvider } from './context/SearchContext/SearchProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <ReservationContextProvider>
          <Global styles={reset} />
          <Global styles={global} />
          <App />
        </ReservationContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

