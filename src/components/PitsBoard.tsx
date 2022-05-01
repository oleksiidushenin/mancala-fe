import Pits from "./Pits";
import React from "react";
import styles from './PitsBoard.module.css'

const PitsBoard = (props: {firstPlayerPits: number[], secondPlayerPits: number[]}) => {


    return (
        <div className={styles.pitsBoard}>
            <Pits amounts={props.firstPlayerPits}/>
            <Pits amounts={props.secondPlayerPits}/>
        </div>
    )
}

export default PitsBoard;
