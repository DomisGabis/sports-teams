import styles from './Footer.module.css';

function Footer() {
  return (
  <div className={styles.footer}>
    <ul>
      <li>Author: <p className={styles.bold}>Dominik Gabiś</p></li>
      <li>Course: <p className={styles.bold}>Web Frameworks and Tools</p></li>
    </ul>
  </div>
)} 
export default Footer;
