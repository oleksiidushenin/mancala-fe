import styles from './Pits.module.css'
import Pit from "./Pit";

const Pits = () => {
    return <div className={styles.pits}>
        <Pit/>
        <Pit/>
        <Pit/>
        <Pit/>
        <Pit/>
        <Pit/>
    </div>
}

export default Pits;
