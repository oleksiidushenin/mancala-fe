import styles from './Board.module.css'
import Store from "./Store";
import PitsBoard from "./PitsBoard";
import {useContext} from "react";
import GameContext from "../store/game-context";
import {getFirstPlayerPits, getFirstStoreValue, getSecondPlayerPits, getSecondStoreValue} from "../domain/GameService";

const Board = () => {
    const gameContext = useContext(GameContext);
    const game = gameContext.game;

    return (
        <div className={styles.board}>
            <Store
                isFirstPlayer={false}
                amount={getSecondStoreValue(game)}
            />
            <PitsBoard
                firstPlayerPits={getFirstPlayerPits(game)}
                secondPlayerPits={getSecondPlayerPits(game)}
            />
            <Store
                isFirstPlayer={true}
                amount={getFirstStoreValue(game)}
            />
        </div>
    )
}

export default Board;
