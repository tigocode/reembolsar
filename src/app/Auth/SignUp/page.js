import styles from "./SignUp.module.css"
import Link from "next/link";

export default function PageSignUp() {
  return (
   <div className={styles.container}>
      <div className={styles.containerBox}>
        <div className={styles.containerLogo}>
          <h1>Reembolsar</h1>
        </div>
        <div className={styles.containerForm}>
          <div className={styles.containerInput}>
            <label htmlFor="">NOME</label>
            <input type="text" />
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="">E-MAIL</label>
            <input type="text" />
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="">SENHA</label>
            <input type="password" />
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="">CONFIRME A SENHA</label>
            <input type="password" />
          </div>
          <button className={styles.button}>Cadastar</button>
        </div>
        <Link href="/" className={styles.SignUp}>
          <span>Já tenho uma conta</span>
        </Link>
      </div>
    </div>
  );
}
