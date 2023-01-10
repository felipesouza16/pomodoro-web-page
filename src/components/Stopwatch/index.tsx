import { useEffect, useState } from 'react';

enum PomodoroTypes {
  POMODORO = 'pomodoro',
  PAUSA_PEQUENA = 'pausaPequena',
  PAUSA_LONGA = 'pausaLonga',
}

export const Stopwatch = () => {
  const [pomodoroVariant, setPomodoroVariant] = useState(
    PomodoroTypes.POMODORO
  );
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((previous) => previous - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const getTime = (timeWatch: number) => {
    const min = Math.floor(timeWatch / 60);
    const seg = timeWatch % 60;
    return `${min < 10 ? '0' + min : min}:${
      seg < 10 ? '0' + seg : seg
    }`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center bg-red-300 h-96 w-[28rem] rounded-xl space-y-10">
        <div>
          <span className="text-8xl font-bold ">{getTime(time)}</span>
        </div>
        <div>
          {isRunning ? (
            <button
              type="button"
              onClick={handleStop}
              className="bg-white w-56 h-10 rounded-3xl text-2xl uppercase font-semibold"
            >
              Stop
            </button>
          ) : (
            <button
              type="button"
              onClick={handleStart}
              className="bg-white w-56 h-10 rounded-3xl text-2xl uppercase font-semibold"
            >
              Start
            </button>
          )}
        </div>
        <div className="flex w-full h-14 items-end justify-center">
          <button
            type="button"
            onClick={() => setPomodoroVariant(PomodoroTypes.POMODORO)}
            className={`px-2 ${
              pomodoroVariant === PomodoroTypes.POMODORO &&
              'bg-red-200 rounded-lg'
            }`}
          >
            Pomodoro
          </button>
          <button
            type="button"
            onClick={() =>
              setPomodoroVariant(PomodoroTypes.PAUSA_PEQUENA)
            }
            className={`px-2 ${
              pomodoroVariant === PomodoroTypes.PAUSA_PEQUENA &&
              'bg-red-200 rounded-lg'
            }`}
          >
            Pausa pequena
          </button>
          <button
            type="button"
            onClick={() =>
              setPomodoroVariant(PomodoroTypes.PAUSA_LONGA)
            }
            className={`px-2 ${
              pomodoroVariant === PomodoroTypes.PAUSA_LONGA &&
              'bg-red-200 rounded-lg'
            }`}
          >
            Pausa longa
          </button>
        </div>
      </div>
    </div>
  );
};
