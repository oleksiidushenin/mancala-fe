import styles from './Store.module.css'

const Store = (props: { amount: number }) => {
    return (
        <div className={styles.store}>
            <div className={styles.data}>
                {props.amount}
            </div>
        </div>
    )
}

export default Store;
