import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import arrowLeft from '../assets/arrow-left.svg';
import { getTeam, getPlayers } from '../api/api';
import styles from './TeamPage.module.css';
import MenuContext from '../components/MenuContext';
import type { TeamType } from '../types/TeamType';
import Body from '../components/Body';
import type { PlayerType } from '../types/PlayerType';
import PlayerSlab from '../components/PlayerSlab';

function TeamPage() {
  const { setLeftSectionContent, setCenterSectionContent, setRightSectionContent } = useContext(MenuContext);
  
  const teamId = useParams<{ id: string }>().id;
  const [team, setTeam] = useState<TeamType | null>(null);
  const [players, setPlayers] = useState<PlayerType[]>([]);


  const linkBack = 
            <Link to=".." className={styles.backLink}>
              <img src={arrowLeft} className={styles.arrow} />
            </Link>;
  const linkNewPlayer = 
            <Link to={location.pathname+'/new-player'}>
                <button className='primaryButton' type='button'>
                    Add a New Player
                </button>
            </Link>;

  useEffect(() => {
  
    if (!teamId) return;
    (async () => {
      const { data: t } = await getTeam(teamId);
      setTeam(t);
      const { data: p } = await getPlayers(teamId);
      setPlayers(p);
    })();
  }, [location.pathname]);

  useEffect(() => {
    setLeftSectionContent(linkBack);
    setCenterSectionContent(team ? <h1>{team.name}</h1> : <h1/>);
    setRightSectionContent(linkNewPlayer);
  }, [team]);

  useEffect(() => {
  }, [players]);

  

  return (
    <div>
      <Outlet />
      <div className={styles.pageContainer}>
        <div className={styles.teamDetails}>
          {team ? <Body team={team!} players={players} /> : <h2>Error while fetching team details</h2>}
        </div>
        <div className={styles.playersSection}>
          <h2>Players</h2>
          <div className={styles.playersGrid}>
            {players.map((player) => <Link className={styles.playerSlab} to={location.pathname+`/${player.id}`}><PlayerSlab key={player.id} player={player} /></Link>)}
          </div>
        </div>


      </div>

    </div>
  );
};

export default TeamPage;
