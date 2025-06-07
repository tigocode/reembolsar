
import { MdOutlineExitToApp, MdRestaurant, MdKeyboardReturn } from 'react-icons/md';
import { FaReceipt } from "react-icons/fa";
import { IoReturnDownForward } from "react-icons/io5";
import Link from 'next/link';

import styles from './Refund.module.css';

export default function PageRefund() {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.containerLogo}>
          <h1>Reembolsar</h1>
        </div>
        <div className={styles.containerUser}>
          <h1>Olá, Admin</h1>
          <button>
            <MdOutlineExitToApp className={styles.imgTopo} />
          </button>
        </div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.containerTitle}>
          <h2>Solicitação de Reembolso</h2>
          <Link href={"/Manager/Refunds"} className={styles.containerLink}>
            <IoReturnDownForward className={styles.linkReturn}/>
          </Link>
        </div>
        <div className={styles.containerTitleUser}>
          <h3>João Silva</h3>
          <span>Ref. Mês Jun.25</span>
        </div>
        <div className={styles.containerData}>
          <div className={styles.containerBoxService}>
            <div className={styles.containerIcons}>
              <MdRestaurant className={styles.icons} />
            </div>
            <div className={styles.containerText}>
              <h3>MegaGrill</h3>
              <span>Alimentação</span>
            </div>
          </div>
          <div className={styles.containerBoxData}>
            <div className={styles.containerValue}>
              <p>R$ </p>
              <span>209,07</span>
            </div>
            <div className={styles.containerReceipt}>
              <button>
                <FaReceipt className={styles.icons} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.containerData}>
          <div className={styles.containerBoxService}>
            <div className={styles.containerIcons}>
              <MdRestaurant className={styles.icons} />
            </div>
            <div className={styles.containerText}>
              <h3>MegaGrill</h3>
              <span>Alimentação</span>
            </div>
          </div>
          <div className={styles.containerBoxData}>
            <div className={styles.containerValue}>
              <p>R$ </p>
              <span>89,67</span>
            </div>
            <div className={styles.containerReceipt}>
              <button>
                <FaReceipt className={styles.icons} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
