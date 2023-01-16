import { PomodoroContextProvider } from "./Pomodoro"
import { ModalContextProvider } from "./Modal"

type GlobalContextProps = {
    children: React.ReactNode;
}
export const GlobalContext = ({ children }: GlobalContextProps) => {
    return (
        <PomodoroContextProvider>
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </PomodoroContextProvider>
    )
}
