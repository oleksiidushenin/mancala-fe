import React, {useState} from "react";
import GameException from "../domain/GameException";

export const ErrorContext = React.createContext({
    hasError: false,
    message: "",
    setGameException: (hasError: boolean, message: string) => {
    }
})


const ErrorProvider = (props: { children: React.ReactNode }) => {
    const [gameException, setGameException] = useState(new GameException(false, ""));
    const errorContext = {
        hasError: gameException.hasError,
        message: gameException.message,
        setGameException: (hasError: boolean, message: string) => setGameException(prevState => {
            return {
                ...prevState,
                hasError: hasError,
                message: message
            }
        })
    }

    return (
        <ErrorContext.Provider value={errorContext}>
            {props.children}
        </ErrorContext.Provider>
    );
}

export default ErrorProvider;
