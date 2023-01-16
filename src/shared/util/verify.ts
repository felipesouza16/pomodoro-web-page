import { useContext } from 'react';
import { PomodoroContext } from '../context/Pomodoro';
import { TypeButton } from './enum';

export const verifyColor = (
  location: 'application' | 'stopwatch' | 'button'
) => {
  const { typeButton } = useContext(PomodoroContext);

  const applicationCase = () => {
    switch (typeButton) {
      case TypeButton.POMODORO:
        return 'bg-red-400';
      case TypeButton.PAUSA_PEQUENA:
        return 'bg-slate-400';
      case TypeButton.PAUSA_LONGA:
        return 'bg-emerald-400';
    }
  };

  const stopwatchCase = () => {
    switch (typeButton) {
      case TypeButton.POMODORO:
        return 'bg-red-300';
      case TypeButton.PAUSA_PEQUENA:
        return 'bg-slate-300';
      case TypeButton.PAUSA_LONGA:
        return 'bg-emerald-300';
    }
  };

  const butttonCase = () => {
    switch (typeButton) {
      case TypeButton.POMODORO:
        return 'bg-red-200';
      case TypeButton.PAUSA_PEQUENA:
        return 'bg-slate-200';
      case TypeButton.PAUSA_LONGA:
        return 'bg-emerald-200';
    }
  };

  switch (location) {
    case 'application':
      return applicationCase();
    case 'stopwatch':
      return stopwatchCase();
    case 'button':
      return butttonCase();
  }
};
