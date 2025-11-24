import styles from './Warning.module.css';
function Warning() {
  return (
    <div className={styles.warning}>WARNING: This team has fewer players than 11!</div>
  );
}

export default Warning;