import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getTeams = () => api.get('/teams');
export const getTeam = (id: string) => api.get(`/teams/${id}`);
export const createTeam = async (team: { name: string; country: string, logoColor: string }) => api.post('/teams', team);

export const getPlayers = (teamId?: string) =>
  api.get('/players', { params: teamId ? { teamId } : {} });

export const getPlayer = (id: string) => api.get(`/players/${id}`);

export const createPlayer = (player: { teamId: string; name: string; surname: string; number: number; position?: string }) =>
  api.post('/players', player);

export default api;
