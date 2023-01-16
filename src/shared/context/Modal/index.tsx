import { createContext, useState } from 'react';

type Props = {
    children: React.ReactNode;
}

type ModalContextProps = {
    openModal: boolean;
    setOpenModal: (arg: boolean) => void;
}

export const ModalContext = createContext({} as ModalContextProps);

export const ModalContextProvider = ({ children }: Props) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <ModalContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </ModalContext.Provider>
    );
}
