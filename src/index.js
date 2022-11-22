import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </ThemeProvider >
  // </React.StrictMode>
  
);
//
