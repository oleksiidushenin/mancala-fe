import styles from './Pits.module.css'
import Pit from "./Pit";

const Pits = (props: { isFirstPlayer: boolean, pits: [number, number][] }) => {
    const targetPits = props.isFirstPlayer ? props.pits : props.pits.slice().reverse();
    const classNames = [
        styles.pits,
        props.isFirstPlayer ? styles.firstPlayer : styles.secondPlayer
    ]

    return <div className={classNames.join(" ")}>
        {targetPits.map(pit =>
            <Pit
                key={pit[0]}
                index={pit[0]}
                amount={pit[1]}
                isFirstPlayer={props.isFirstPlayer}
            />
        )}
    </div>
}

export default Pits;
