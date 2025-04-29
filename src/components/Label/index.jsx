import styles from "./Label.module.css";

export default function Label(props) {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={props.htmlFor} className={styles.containerInput}>
        {props.text}
      </label>
    </div>
  );
}
