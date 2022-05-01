import styles from './Store.module.css'

const Store = (props: { isFirstPlayer: boolean, amount: number }) => {
    const storeStyles = [
        styles.storeData,
        props.isFirstPlayer ? styles.firstPlayer : styles.secondPlayer
    ];

    return (
        <div className={styles.store}>
            <div className={storeStyles.join(" ")}>
                {props.amount}
            </div>
        </div>
    )
}

export default Store;
