import React, { useState } from 'react';
import { createTeam } from '../api/api';
import styles  from './NewTeam.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

function NewTeam() {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [logoColor, setLogoColor] = useState<string>('#000000');
    const navigate = useNavigate();

    function onClose() {
        navigate('..')
    }

    async function onCreate(e: React.FormEvent) {
        e.preventDefault();
        await createTeam({ name, country, logoColor });
        onClose();
    };

    function onLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newColor = e.target.value;
        setLogoColor(newColor);
    }

    return (
            <Modal>
                <form onSubmit={onCreate} >
                    <h1>Add a New Team</h1>
                    <div className={styles.colorPickerSection}>
                        <h3>Team Color</h3>
                        <input type="color" onChange={onLogoChange} className={styles.colorPicker}/>
                    </div>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Name"/>
                    <input value={country} onChange={e => setCountry(e.target.value)} placeholder="Country"/>
                    <div className={styles.buttonsSection}>
                        <Link to='..'>
                            <button type="button" className='secondaryButton'>Cancel</button>
                        </Link>
                        <Link to='..'>
                            <button type="submit" className='primaryButton' onClick={onCreate}>Add Team</button>
                        </Link>
                    </div>
                </form>
            </Modal>
    );
}
export default NewTeam