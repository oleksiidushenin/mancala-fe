import styles from './Pit.module.css'
import {useContext} from "react";
import GameContext from "../store/game-context";

const Pit = (props: { index: number, amount: number, isFirstPlayer: boolean }) => {
    const gameContext = useContext(GameContext);
    const isActive = props.isFirstPlayer === gameContext.game.firstPlayerTurn && props.amount > 0;

    const selectPitHandler = () => {
        if (props.isFirstPlayer !== gameContext.game.firstPlayerTurn) {
            return;
        }

        gameContext.selectPit(props.index);
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
