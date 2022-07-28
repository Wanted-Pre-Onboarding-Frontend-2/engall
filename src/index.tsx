import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './router/Routes';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './style/index.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 1000 * 60,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
