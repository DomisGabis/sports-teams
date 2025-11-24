import { useParams } from 'react-router-dom';
import type { PlayerType } from '../types/PlayerType';
import { useEffect, useState } from 'react';
import { getPlayer } from '../api/api';
import Modal from './Modal';

function Player() {

    const { playerId } = useParams<{ playerId: string }>();
    const [player, setPlayer] = useState<PlayerType | null>(null);

    useEffect(() => {
        console.log("1");
        if (!playerId) return;
        console.log("2");
        (async () => {
          const { data: p } = await getPlayer(playerId);
          setPlayer(p);
        })();
      }, [location.pathname]);

    return (
        <Modal>
            <h1>Player Details</h1>
            {!player ? <h3>Error while fetching player details</h3> : 
            <>
                <p>Name: <b>{player.name}</b></p>
                <p>Surname: <b>{player.surname}</b></p>
                <p>Number: <b>{player.number}</b></p>
                <p>Position: <b>{player.position}</b></p>
            </>}
        </Modal>
    );
}

export default Player;