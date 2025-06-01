import styles from './Refunds.module.css';

export default function PageRefunds() {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.containerLogo}>
          <h1>Reembolsar</h1>
        </div>
        <div className={styles.containerUser}>
          <h1>Tiago</h1>
        </div>
      </div>
      <div className={styles.containerBox}>
        <h1>TESTE</h1>
      </div>
    </div>
  );
}
