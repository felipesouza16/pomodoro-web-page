import React, { createContext, useReducer, useState } from 'react';

type PropsPomodoroContext = {
  teste: any;
  setTeste: any;
};

const PomodoroContext = createContext<PropsPomodoroContext | null>(
  {} as PropsPomodoroContext
);

const PomodoroProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [teste, setTeste] = useState();

  return (
    <PomodoroContext.Provider value={{ teste, setTeste }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export { PomodoroProvider };
export default PomodoroContext;
