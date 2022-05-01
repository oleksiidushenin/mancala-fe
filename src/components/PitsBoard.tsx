import Pits from "./Pits";
import React from "react";
import styles from './PitsBoard.module.css'

const PitsBoard = () => {
    return (
        <div className={styles.pitsBoard}>
            <Pits/>
            <Pits/>
        </div>
    )
}

export default PitsBoard;
