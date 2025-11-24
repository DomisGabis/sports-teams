import styles from './TeamSlab.module.css';
import type { TeamType } from '../types/TeamType';

function TeamSlab({team}: {team: TeamType}) {
    return (
        <div className={styles.slab}>
            <div className={`${styles.logo}`} style={{backgroundColor: team.logoColor}} />
            <h2>{team.name}</h2>
        </div>
    );
}

export default TeamSlab;