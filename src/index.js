import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
