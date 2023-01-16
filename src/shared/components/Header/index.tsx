import { useContext, useState } from 'react';
import { ModalContext } from '../../context/Modal';

export const Header = () => {
  const { setOpenModal } = useContext(ModalContext);

  const handleEdit = () => {
    setOpenModal(true);
  };

  return (
    <div className="flex justify-evenly items-center px-2 py-2 z-10">
      <a href="/pomodoro-web-page">
        <img
          className="w-8 h-8 md:w-14 md:h-14"
          src="https://user-images.githubusercontent.com/86385745/207751154-d4cb9b6a-1bf8-41e9-a66c-12f17ff04140.png"
          alt=""
        />
      </a>
      <h1 className="text-center text-2xl md:text-5xl">Pomodoro</h1>
      <img
        onClick={handleEdit}
        className="w-8 h-8 md:w-12 md:h-12 hover:cursor-pointer"
        src="https://user-images.githubusercontent.com/86385745/207751613-3579f7c9-390c-4f5d-8985-7fc72de51e4b.png"
        alt=""
      />
    </div>
  );
};
