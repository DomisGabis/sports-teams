import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamList from './pages/TeamList';
import TeamPage from './pages/TeamPage.tsx';
import RootLayout from './components/RootLayout.tsx';
import NewTeam from './pages/NewTeam.tsx';
import NewPlayer from './pages/NewPlayer.tsx';
import Player from './components/Player.tsx';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route path='' element={<TeamList />} >
            <Route path="new-team" element={<NewTeam />} />
          </Route>
          <Route path=":id" element={<TeamPage />} >
            <Route path="new-player" element={<NewPlayer />} />
            <Route path=":playerId" element={<Player />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
