import styles from './Store.module.css'

const Store = (props: { isFirstPlayer: boolean, amount: number }) => {
    const storeStyles = [
        styles.store,
        props.isFirstPlayer ? styles.firstPlayer : styles.secondPlayer
    ];

    const storeDataStyles = [
        styles.storeData,
        props.isFirstPlayer ? styles.firstPlayer : styles.secondPlayer
    ];

    return (
        <div className={storeStyles.join(" ")}>
            <div className={storeDataStyles.join(" ")}>
                {props.amount}
            </div>
        </div>
    )
}

export default Store;
