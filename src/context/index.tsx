import React from 'react';
import { PomodoroProvider } from './PomodoroContext';

const GlobalContext: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <>
      <PomodoroProvider>{children}</PomodoroProvider>
    </>
  );
};

export default GlobalContext;
