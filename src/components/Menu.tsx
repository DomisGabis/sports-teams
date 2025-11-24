import { Link, useNavigate } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import MenuContext from './MenuContext';

function Menu() {
    
    const { leftSectionContent, centerSectionContent, rightSectionContent } = useContext(MenuContext);

    function reloadPage() {
        useNavigate()('/')
        window.location.reload();
    }
    
    return(
    <div className={styles.menu}>
        <div className={`${styles.left} ${styles.section}`}>
            <Link to="/" className={styles.logoLink} onClick={reloadPage}>
                <img src={logo} alt="App logo" className={styles.logo} />
            </Link>
            {leftSectionContent}
        </div>
        <div className={`${styles.center} ${styles.section}`}>
            {centerSectionContent}
        </div>
        <div className={`${styles.right} ${styles.section}`}>
            {rightSectionContent}
            
        </div>
    </div>);
};

export default Menu;
