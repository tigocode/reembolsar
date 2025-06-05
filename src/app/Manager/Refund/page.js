
import { MdOutlineExitToApp, MdRestaurant } from 'react-icons/md';
import { FaReceipt } from "react-icons/fa";
import Image from 'next/image';
import Lupa from '@/../../public/Icon.png';

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
