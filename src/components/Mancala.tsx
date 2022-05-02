import GameProvider from "../store/GameProvider";
import {ErrorContext} from "../store/ErrorProvider";
import GameMeta from "./GameMeta";
import Board from "./Board";
import React, {useContext} from "react";
import ErrorNotification from "./common/ErrorNotification";
import styles from './Mancala.module.css';

const Mancala = () => {
    const errorContext = useContext(ErrorContext);
    const hasErrors = errorContext.hasError;
    const errorMessage = errorContext.message;

    return (
        <div className={styles.application}>
            <GameProvider>
                <GameMeta/>
                <Board/>
                {hasErrors && <ErrorNotification message={errorMessage}/>}
            </GameProvider>
        </div>
    );
}

export default Mancala;
