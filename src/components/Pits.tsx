import styles from './Pits.module.css'
import Pit from "./Pit";

const Pits = (props: { isFirstPlayer: boolean, pits: [number, number][] }) => {
    const targetPits = props.isFirstPlayer ? props.pits : props.pits.slice().reverse();

    return <div className={styles.pits}>
        {targetPits.map(pit =>
            <Pit
                key={pit[0]}
                index={pit[0]}
                amount={pit[1]}
            />
        )}
    </div>
}

export default Pits;
