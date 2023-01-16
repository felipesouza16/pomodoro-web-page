import { createContext, useState } from 'react';
import { TypeButton } from '../../util/enum';
import { TimesPomodoro } from '../../util/types';

type Props = {
  children: React.ReactNode;
};

type PomodoroContextProps = {
  typeButton: number;
  setTypeButton: (arg: number) => void;
  currentValuesTimes: TimesPomodoro;
  setCurrentValuesTimes: (arg: TimesPomodoro) => void;
  verifyLocalStorage: () => void;
  handleChangeTimesPomodoro: (newObject: TimesPomodoro) => void;
};

const INITIAL_STATE_TIMES_POMODORO: TimesPomodoro = {
  pomodoro: 1500,
  shortBreak: 300,
  longBreak: 600,
  volume: 0.01,
};

export const PomodoroContext = createContext({} as PomodoroContextProps);

export const PomodoroContextProvider = ({ children }: Props) => {
  const [typeButton, setTypeButton] = useState(TypeButton.POMODORO);
  const [currentValuesTimes, setCurrentValuesTimes] = useState(
    localStorage.getItem('timesPomodoro')
      ? JSON.parse(localStorage.getItem('timesPomodoro') || '')
      : INITIAL_STATE_TIMES_POMODORO,
  );

  const handleChangeTimesPomodoro = async (newObject: TimesPomodoro) => {
    localStorage.setItem('timesPomodoro', JSON.stringify(newObject));
    setCurrentValuesTimes(newObject);
  };

  const verifyLocalStorage = () => {
    const hasLocalStorage = localStorage.getItem('timesPomodoro');

    if (hasLocalStorage) {
      return;
    }

    localStorage.setItem(
      'timesPomodoro',
      JSON.stringify(INITIAL_STATE_TIMES_POMODORO),
    );
  };

  return (
    <PomodoroContext.Provider
      value={{
        typeButton,
        setTypeButton,
        currentValuesTimes,
        setCurrentValuesTimes,
        verifyLocalStorage,
        handleChangeTimesPomodoro,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
