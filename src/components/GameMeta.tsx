import styles from './GameMeta.module.css'

const GameMeta = () => {
    return (
        <div className={styles.gameMeta}>
            <p>Mancala</p>
            <button>Start Game</button>
            <p>Next move: Dog</p>
            <p>Winner: Cat</p>
        </div>
    )
}

export default GameMeta;
