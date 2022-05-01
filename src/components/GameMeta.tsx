import styles from './GameMeta.module.css'
import {useContext} from "react";
import GameContext from "../store/game-context";
import {ErrorContext} from "../store/ErrorProvider";

const GameMeta = () => {
    const gameContext = useContext(GameContext);
    const errorContext = useContext(ErrorContext);

    const startGameHandler = () => {
        gameContext.resetGame();
        errorContext.setGameException(false, "");
    }

    return (
        <div className={styles.gameMeta}>
            <p>Mancala</p>
            <button type={"button"} onClick={startGameHandler}>Reset Game</button>
            <p>Next move: Dog</p>
            <p>Winner: Cat</p>
        </div>
    )
}

export default GameMeta;
