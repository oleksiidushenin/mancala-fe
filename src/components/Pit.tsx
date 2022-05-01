import styles from './Pit.module.css'
import {useContext} from "react";
import GameContext from "../store/game-context";
import {ErrorContext} from "../store/ErrorProvider";

const Pit = (props: { index: number, amount: number, isFirstPlayer: boolean }) => {
    const gameContext = useContext(GameContext);
    const errorContext = useContext(ErrorContext);
    const isActive = props.isFirstPlayer === gameContext.game.firstPlayerTurn && props.amount > 0;

    const selectPitHandler = () => {
        if (props.isFirstPlayer !== gameContext.game.firstPlayerTurn) {
            return;
        }

        try {
            gameContext.selectPit(props.index);
        } catch (error: any) {
            console.log("Game error")
            errorContext.setGameException(true, error.message);
        }
    }

    const pitStyles = [
        styles.pit,
        props.isFirstPlayer ? styles.firstPlayer : styles.secondPlayer,
        isActive ? styles.active : styles.passive
    ];

    return (
        <button className={pitStyles.join(" ")} onClick={selectPitHandler}>
            {props.amount}
        </button>
    )
}

export default Pit;
