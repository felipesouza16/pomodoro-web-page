import { useContext, useEffect } from 'react';
import { Divider } from './shared/components/Divider';
import { Header } from './shared/components/Header';
import { Modal } from './shared/components/Modal';
import { Stopwatch } from './shared/components/Stopwatch';
import { PomodoroContext } from './shared/context/Pomodoro';
import { verifyColor } from './shared/util/verify';

export const App = () => {
  const { verifyLocalStorage } = useContext(PomodoroContext);

  useEffect(() => {
    verifyLocalStorage();
  }, []);

  return (
    <>
      <div
        className={`h-screen w-screen ${verifyColor(
          'application',
        )} font-mono flex flex-col`}
      >
        <Header />
        <Divider />
        <Stopwatch />
        <Modal />
      </div>
    </>
  );
};
