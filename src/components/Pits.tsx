import styles from './Pits.module.css'
import Pit from "./Pit";

const Pits = (props: {amounts: number[]}) => {
    return <div className={styles.pits}>
        <Pit amount={props.amounts[0]}/>
        <Pit amount={props.amounts[1]}/>
        <Pit amount={props.amounts[2]}/>
        <Pit amount={props.amounts[3]}/>
        <Pit amount={props.amounts[4]}/>
        <Pit amount={props.amounts[5]}/>
    </div>
}

export default Pits;
