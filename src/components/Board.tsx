import styles from './Board.module.css'
import Store from "./Store";
import PitsBoard from "./PitsBoard";
import {useContext} from "react";
import GameContext from "../store/game-context";

const Board = () => {
    const gameContext = useContext(GameContext);
    const game = gameContext.game;

    return (
        <div className={styles.board}>
            <Store
                isFirstPlayer={false}
                amount={game.getFirstStoreValue()}
            />
            <PitsBoard
                firstPlayerPits={game.getFirstPlayerPits()}
                secondPlayerPits={game.getSecondPlayerPits()}
            />
            <Store
                isFirstPlayer={true}
                amount={game.getSecondStoreValue()}
            />
        </div>
    )
}

export default Board;
