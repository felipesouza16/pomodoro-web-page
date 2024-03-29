import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'tailwindcss/tailwind.css';
import { GlobalContext } from './shared/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>,
);
