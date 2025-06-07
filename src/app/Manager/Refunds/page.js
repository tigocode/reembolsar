import Lupa from '@/../../public/Icon.png';
import Exit from '@/../../public/Frame.png';
import Link from 'next/link';
import { MdEngineering, MdOutlineExitToApp, MdSearch } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { FaMoneyBillTransfer } from "react-icons/fa6";

import styles from './Refunds.module.css';

export default function PageRefunds() {
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
          <h2>Solicitações</h2>
        </div>
        <div className={styles.containerSeach}>
          <input type="text" />
          <button>
            <MdSearch className={styles.img} />
          </button>
        </div>
        <div className={styles.containerTable}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Setor</th>
                <th>Referência</th>
                <th>Valor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <MdEngineering className={styles.Icons} />
                </td>
                <td>João Silva</td>
                <td>Engenharia</td>
                <td>01/10/2023</td>
                <td>R$ 150,00</td>
                <td>
                  <button>
                    <Link href="/Manager/Refund" className={styles.buttonLink}>
                      Visualizar
                    </Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <FaMoneyBillTransfer className={styles.Icons} />
                </td>
                <td>Maria Oliveira</td>
                <td>Financeiro</td>
                <td>02/10/2023</td>
                <td>R$ 200,00</td>
                <td>
                   <button>
                    <Link href="/Manager/Refund" className={styles.buttonLink}>
                      Visualizar
                    </Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <GoLaw className={styles.Icons} />
                </td>
                <td>Caio</td>
                <td>Juridico</td>
                <td>02/10/2023</td>
                <td>R$ 200,00</td>
                <td>
                  <button>
                    <Link href="/Manager/Refund" className={styles.buttonLink}>
                      Visualizar
                    </Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
