import Lupa from '@/../../public/Icon.png'
import Exit from '@/../../public/Frame.png'
import Image from 'next/image'

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
            <Image src={Exit} alt="Exit Icon" width={22} height={22} />
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
            <Image src={Lupa} alt="Search Icon" className={styles.img} />
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
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src={Exit} alt="Exit Icon" width={22} height={22} />
                </td>
                <td>João Silva</td>
                <td>Engenharia</td>
                <td>01/10/2023</td>
               <td>R$ 150,00</td>
                <td>
                  <button>Visualizar</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={Exit} alt="Exit Icon" width={22} height={22} />
                </td>
                <td>Maria Oliveira</td>
                <td>O&M</td>
                <td>02/10/2023</td>
               <td>R$ 200,00</td>
                <td>
                  <button>Visualizar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
