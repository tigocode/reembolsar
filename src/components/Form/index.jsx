import styles from "./Form.module.css";

export default function From({ children }) {
  return (
    <>
      <form action="" className={styles.containerForm}>
        {children}
      </form>
    </>
  );
}
