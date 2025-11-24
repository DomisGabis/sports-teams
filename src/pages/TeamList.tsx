import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getTeams } from '../api/api';
import styles from './TeamList.module.css'
import MenuContext from '../components/MenuContext';

import type { TeamType } from '../types/TeamType';
import TeamSlab from '../components/TeamSlab';

function TeamList() {
  const { setLeftSectionContent, setCenterSectionContent, setRightSectionContent } = useContext(MenuContext);
  
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [allTeams, setAllTeams] = useState<TeamType[]>([]);
  const [teams, setTeams] = useState<TeamType[]>([]);
  const location = useLocation();
  
  const linkNewTeam = 
          <Link to='new-team'>
            <button type='button' className='primaryButton'>
                Add a New Team
            </button>
          </Link>;

  function filterTeams(data: TeamType[], term: string): TeamType[] {
    return data.filter(team =>
      team.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  useEffect(() => {
    setLeftSectionContent(
      <h1>Browse Teams</h1>
    );
    setCenterSectionContent(<input
        placeholder="Search"
        value={searchTerm}
        onChange={e => {
          const value = e.target.value;
          setSearchTerm(value);
          setTeams(filterTeams(allTeams, value));
        }}
        className={styles.searchInput}
        />);
    setRightSectionContent(linkNewTeam);

    (async () => {
      const { data } = await getTeams();
      setAllTeams(data);
      setTeams(filterTeams(data, searchTerm));
    })();
  }, [searchTerm, location.pathname]);




  return (
    <div>
      <Outlet />
      <div className={styles.teamsGrid}>
        {teams.map((team) => (
          <Link key={team.id} className={styles.teamSlab} to={`${team.id}`}>
            <TeamSlab team={team} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
