import styles from './Modal.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Modal ({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    function onClose() {
        navigate('..')
    }

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>);
}
export default Modal;