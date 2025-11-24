import React, { useState } from 'react';
import { createPlayer } from '../api/api';
import styles  from './NewTeam.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Modal from '../components/Modal';

function NewPlayer() {
    const teamId = useParams<{ id: string }>().id;
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newNumber, setNewNumber] = useState<number | ''>('');
    const [newPosition, setNewPosition] = useState('');
    const navigate = useNavigate();
    function onClose() {
        navigate('..')
    }
    

    async function onCreate(e: React.FormEvent) {
        e.preventDefault();
        if (!teamId || newName === '' || newNumber === '') return;
        await createPlayer({ teamId, name: newName, surname: newSurname, number: Number(newNumber), position: newPosition });
        setNewName(''); setNewNumber('');
        onClose();
    };

    return (
        <Modal>
            <form onSubmit={onCreate}>
                <h1>Add a New Player</h1>
                <input placeholder="Name" value={newName} onChange={e => setNewName(e.target.value)} required />
                <input placeholder="Surname" value={newSurname} onChange={e => setNewSurname(e.target.value)} required />
                <input placeholder="Number" type="number" value={newNumber} onChange={e => setNewNumber(Number(e.target.value))} required />
                <input placeholder="Position" value={newPosition} onChange={e => setNewPosition(e.target.value)} required />
                <div className={styles.buttonsSection}>
                    <Link to='..'>
                        <button className='secondaryButton' type="button">Cancel</button>
                    </Link>
                    <Link to='..'>
                        <button type="submit" className='primaryButton' onClick={onCreate}>Add player</button>
                    </Link>
                </div>
            </form>
        </Modal>
    );
}
export default NewPlayer