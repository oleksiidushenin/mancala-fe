import styles from './ErrorNotification.module.css'

const ErrorNotification = (props: { message: string }) => {
    return (
        <div className={styles.error}>
            {props.message}
        </div>
    );
}

export default ErrorNotification;
