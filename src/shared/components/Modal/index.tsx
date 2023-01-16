import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ModalContext } from '../../context/Modal';
import { PomodoroContext } from '../../context/Pomodoro';
import { TypeButton } from '../../util/enum';
import { TimesPomodoro } from '../../util/types';
import { Input } from '../Input';
import { getTime, handleBlur, onlyInputNumber } from './Modal.helpers';

export const Modal = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const { currentValuesTimes, handleChangeTimesPomodoro, setTypeButton } =
    useContext(PomodoroContext);
  const { setValue, getValues } = useForm();

  const handleSave = () => {
    const newObject: TimesPomodoro = {
      pomodoro: Number(getValues('pomodoro')) * 60,
      shortBreak: Number(getValues('shortBreak')) * 60,
      longBreak: Number(getValues('longBreak')) * 60,
    };

    handleChangeTimesPomodoro(newObject);
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <div className="relative z-10">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-2xl font-medium leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Configurações
                      </h3>
                      <div className="mt-10">
                        <div className="mb-3 xl:w-96">
                          <Input
                            onChange={event =>
                              setValue('pomodoro', event.target.value)
                            }
                            label="Pomodoro"
                            onKeyPress={onlyInputNumber}
                            onBlur={handleBlur}
                            type="text"
                            maxLength={2}
                            defaultValue={getTime(currentValuesTimes?.pomodoro)}
                          />
                        </div>
                        <div className="mb-3 xl:w-96">
                          <Input
                            onChange={event =>
                              setValue('shortBreak', event.target.value)
                            }
                            label="Pausa curta"
                            onKeyPress={onlyInputNumber}
                            onBlur={handleBlur}
                            type="text"
                            maxLength={2}
                            defaultValue={getTime(
                              currentValuesTimes?.shortBreak,
                            )}
                          />
                        </div>
                        <div className="mb-3 xl:w-96">
                          <Input
                            onChange={event =>
                              setValue('longBreak', event.target.value)
                            }
                            label="Pausa longa"
                            onKeyPress={onlyInputNumber}
                            onBlur={handleBlur}
                            type="text"
                            maxLength={2}
                            defaultValue={getTime(
                              currentValuesTimes?.longBreak,
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
