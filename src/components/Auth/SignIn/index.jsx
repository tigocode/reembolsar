import styles from "./SignIn.module.css"
import Link from "next/link";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBox}>
        <div className={styles.containerLogo}>
          <h1>Reembolsar</h1>
        </div>
        <div className={styles.containerForm}>
          <div className={styles.containerInput}>
            <label htmlFor="">E-MAIL</label>
            <input type="text" />
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="">SENHA</label>
            <input type="password" />
          </div>
          <button className={styles.button}>Entrar</button>
        </div>
        <Link href="/Auth/SignUp" className={styles.SignUp}>
          <span>Criar Conta</span>
        </Link>
      </div>
    </div>
  );
};
