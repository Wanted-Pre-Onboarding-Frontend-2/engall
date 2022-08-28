import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './router/Routes';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';
import './style/index.scss';
import { queryClient } from './hooks/queries/queryClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
