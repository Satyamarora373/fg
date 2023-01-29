import { useRouter } from "next/router";
import styles from "../styles/perks.module.css";
import Image from "next/image";
import g1_img from "../assets/G1.png";
import g2_img from "../assets/G2.png";
import g3_img from "../assets/G3.png";
import g4_img from "../assets/G4.png";
import g5_img from "../assets/G5.png";
import g6_img from "../assets/G6.png";
export const Perks = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <br />
      <h6>.</h6>
      <br />
      <h1 className={styles.topper}>
        Additional <span>Perks</span> and <span>Benefits</span>
      </h1>
      <div className={styles.row1}>
        <div className={styles.im11}>
          <Image src={g1_img} layout="responsive" />
        </div>
        <div className={styles.im12}>
          <Image src={g2_img} layout="responsive" />
        </div>
        <div className={styles.im13}>
          <Image src={g3_img} layout="responsive" />
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.im21}>
          <Image src={g4_img} layout="responsive" />
        </div>
        <div className={styles.im22}>
          <Image src={g5_img} layout="responsive" />
        </div>
        <div className={styles.im23}>
          <Image src={g6_img} layout="responsive" />
        </div>
      </div>
      <br />
      <h6>.</h6>
      <br />
    </div>
  );
};
