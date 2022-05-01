import Pits from "./Pits";
import React from "react";
import styles from './PitsBoard.module.css'

const PitsBoard = (props: { firstPlayerPits: [number, number][], secondPlayerPits: [number, number][] }) => {
    return (
        <div className={styles.pitsBoard}>
            <Pits
                isFirstPlayer={false}
                pits={props.secondPlayerPits}
            />
            <Pits
                isFirstPlayer={true}
                pits={props.firstPlayerPits}
            />
        </div>
    )
}

export default PitsBoard;
