import styles from './GameMeta.module.css'
import {useContext} from "react";
import GameContext from "../store/game-context";

const GameMeta = () => {
    const gameContext = useContext(GameContext);

    const startGameHandler = () => {
        gameContext.resetGame();


        console.log('Game started!!!')
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
