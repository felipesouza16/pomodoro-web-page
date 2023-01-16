import { useContext, useEffect, useState } from 'react';
import { PomodoroContext } from '../../context/Pomodoro';
import { TypeButton } from '../../util/enum';
import { verifyColor } from '../../util/verify';
import AlarmClock from '../../../assets/sounds/alarmclock.mp3';
import { Howl } from 'howler';

export const Stopwatch = () => {
  const { typeButton, setTypeButton, currentValuesTimes } =
    useContext(PomodoroContext);
  const [time, setTime] = useState(currentValuesTimes?.pomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const text =
    'O relógio está correndo!\nCaso confirme a contagem será resetada.\nDeseja trocar de contagem?';

  const soundPlay = (src: string) => {
    const sound = new Howl({ src, volume: currentValuesTimes.volume });
    sound.play();
  };

  const setCurrentTime = () => {
    switch (typeButton) {
      case TypeButton.POMODORO:
        setTime(currentValuesTimes.pomodoro);
        break;
      case TypeButton.PAUSA_PEQUENA:
        setTime(currentValuesTimes.shortBreak);
        break;
      case TypeButton.PAUSA_LONGA:
        setTime(currentValuesTimes.longBreak);
        break;
    }
  };

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        if (time === 0) {
          setCurrentTime();
          handleStop();
          soundPlay(AlarmClock);
          return;
        }
        setTime(previous => previous - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  useEffect(() => {
    setCurrentTime();
  }, [currentValuesTimes]);

  const getTime = (timeWatch: number) => {
    const min = Math.floor(timeWatch / 60);
    const seg = timeWatch % 60;
    return `${min < 10 ? '0' + min : min}:${seg < 10 ? '0' + seg : seg}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleClickPomodoro = () => {
    if (isRunning && !confirm(text)) {
      return;
    }
    setTypeButton(TypeButton.POMODORO);
    setTime(currentValuesTimes?.pomodoro);
    handleStop();
  };

  const handleClickShortBreak = () => {
    if (isRunning && !confirm(text)) {
      return;
    }
    setTypeButton(TypeButton.PAUSA_PEQUENA);
    setTime(currentValuesTimes?.shortBreak);
    handleStop();
  };

  const handleClickLongBreak = () => {
    if (isRunning && !confirm(text)) {
      return;
    }
    setTypeButton(TypeButton.PAUSA_LONGA);
    setTime(currentValuesTimes?.longBreak);
    handleStop();
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`flex flex-col justify-center items-center ${verifyColor(
          'stopwatch',
        )} h-96 w-[28rem] rounded-xl space-y-10`}
      >
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
            onClick={handleClickPomodoro}
            className={`px-2 ${
              typeButton === TypeButton.POMODORO &&
              `${verifyColor('button')} rounded-lg`
            }`}
          >
            Pomodoro
          </button>
          <button
            type="button"
            onClick={handleClickShortBreak}
            className={`px-2 ${
              typeButton === TypeButton.PAUSA_PEQUENA &&
              `${verifyColor('button')} rounded-lg`
            }`}
          >
            Pausa pequena
          </button>
          <button
            type="button"
            onClick={handleClickLongBreak}
            className={`px-2 ${
              typeButton === TypeButton.PAUSA_LONGA &&
              `${verifyColor('button')} rounded-lg`
            }`}
          >
            Pausa longa
          </button>
        </div>
      </div>
    </div>
  );
};
