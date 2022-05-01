import styles from './Pit.module.css'

const Pit = (props: {index: number, amount: number }) => {
    const selectPitHandler = () => {
        console.log("Clicked " + props.index)
    }

    return (
        <div className={styles.pit} onClick={selectPitHandler}>
            {props.amount}
        </div>
    )
}

export default Pit;
