import type { PlayerType } from '../types/PlayerType';
import styles from './PlayerSlab.module.css';

function PlayerSlab({ player }: { player: PlayerType }) {
    return (
        <div className={styles.slab}>
            <h3>{player.name} {player.surname}</h3>
        </div>
    )
}

export default PlayerSlab;