import type { PlayerType } from '../types/PlayerType';
import type { TeamType } from '../types/TeamType';
import styles from './Body.module.css';
import Info from './Info';
import Warning from './Warning';

function Body({ team, players }: { team: TeamType; players: PlayerType[] }) {
  return (
  <div className={styles.bodyContainer}>
    <h2>Team Details</h2>
    <div className={`${styles.logo}`} style={{backgroundColor: team.logoColor}} />
    <p>Name: <b>{team.name}</b></p>
    <p>Country: <b>{team.country}</b></p>
    <p>Number of Players: <b>{players.length}</b></p>
    {players.length < 11 ? <Warning /> : <Info />}
  </div>);
}

export default Body;