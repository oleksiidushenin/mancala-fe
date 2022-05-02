import styles from './Pit.module.css'
import {useContext} from "react";
import GameContext from "../store/game-context";
import {ErrorContext} from "../store/ErrorProvider";

const Pit = (props: { index: number, amount: number, isFirstPlayer: boolean }) => {
    const gameContext = useContext(GameContext);
    const errorContext = useContext(ErrorContext);
    const isActive = !gameContext.game.finished
        && props.isFirstPlayer === gameContext.game.firstPlayerTurn
        && props.amount > 0;

    const selectPitHandler = () => {
        if (props.isFirstPlayer !== gameContext.game.firstPlayerTurn || gameContext.game.board[props.index] === 0) {
            return;
        }

        try {
            gameContext.selectPit(props.index);
        } catch (error: any) {
            errorContext.setGameException(true, error.message);
        }
    }

    const pitStyles = [
        styles.pit,
        isActive
            ? (props.isFirstPlayer ? styles.firstPlayer : styles.secondPlayer)
            : (props.isFirstPlayer ? styles.firstPlayerWaiting : styles.secondPlayerWaiting),
        isActive ? styles.active : styles.passive
    ];

    return (
        <button className={pitStyles.join(" ")} onClick={selectPitHandler}>
            {props.amount}
        </button>
    )
}

export default Pit;
