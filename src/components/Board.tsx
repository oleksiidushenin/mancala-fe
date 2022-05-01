import styles from './Board.module.css'
import Store from "./Store";
import PitsBoard from "./PitsBoard";

const Board = () => {
    return (
        <div className={styles.board}>
            <Store/>
            <PitsBoard/>
            <Store/>
        </div>
    )
}

export default Board;
