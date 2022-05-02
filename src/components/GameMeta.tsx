import styles from './GameMeta.module.css'
import {useContext} from "react";
import GameContext from "../store/game-context";
import {ErrorContext} from "../store/ErrorProvider";

const GameMeta = () => {
    const gameContext = useContext(GameContext);
    const errorContext = useContext(ErrorContext);
    const isFinished = gameContext.game.finished;
    const activePlayer = gameContext.game.firstPlayerTurn ? 'First Player' : 'Second Player';
    const gameStatusStyle = isFinished
        ? styles.finished
        : gameContext.game.firstPlayerTurn ? styles.firstPlayerActive : styles.secondPlayerActive;
    const winner = gameContext.game.winner;

    const startGameHandler = () => {
        gameContext.resetGame();
        errorContext.setGameException(false, "");
    }

    return (
        <div className={styles.gameMeta}>
            <div>
                <h1>Mancala</h1>
            </div>
            <div>
                <button className={styles.gameMetaButton} type={"button"} onClick={startGameHandler}>Reset Game</button>
            </div>
            <div className={gameStatusStyle}>
                {!isFinished && <p>Next move: {activePlayer}</p>}
                {isFinished && <p>WINNER: {winner}</p>}
            </div>
        </div>
    )
}

export default GameMeta;
