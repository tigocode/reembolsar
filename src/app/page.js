import Box from "@/components/Box";
import Logo from "@/components/Logo";
import From from "@/components/Form";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";

import styles from "./styles.module.css";

export default function Home() {
  return (
    < div className={styles.container}>
      <Box>
        <Logo />
        <From>
          <div className={styles.containerInput}>
            <Label
              text="E-MAIL"
              htmlFor="email"
            />
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </div>
        </From>
      </Box>
    </div>
  );
}
