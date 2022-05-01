import styles from './Pit.module.css'

const Pit = (props: { amount: number }) => {
    return (
        <div className={styles.pit}>
            {props.amount}
        </div>
    )
}

export default Pit;
